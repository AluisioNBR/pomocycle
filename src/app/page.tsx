'use client'
import { Informations } from '@/components/Informations'
import { MenuButton } from '@/components/MenuButton'
import { StartButton } from '@/components/StartButton'
import { VStack } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { Viewer } from '@/components/Viewer'

const Info = {
	cycles: 4,
	work: 25,
	rest: 5,
}

export default function Home() {
	const [cycleInfo, setCycleInfo] = useState(Info)
	const [minutes, setMinutes] = useState(cycleInfo.work)
	const [seconds, setSeconds] = useState(0)
	const [status, setStatus] = useState('work')
	const [isActive, setIsActive] = useState(false)
	const [cyclesCounter, setCyclesCounter] = useState(0)

	const toggleTimer = () => {
		setIsActive(!isActive)
	}

	const reset = useCallback(() => {
		setCyclesCounter((prevState) => {
			let newCounter = prevState + 1

			if (!(newCounter < cycleInfo.cycles)) {
				setIsActive(false)
				newCounter = 0
			}

			return newCounter
		})

		setStatus((prevStatus) => {
			const newStatus = prevStatus === 'work' ? 'rest' : 'work'

			setMinutes(() => (newStatus === 'work' ? cycleInfo.work : cycleInfo.rest))

			return newStatus
		})
		setSeconds(0)
	}, [cycleInfo])

	useEffect(() => {
		let intervalId: string | number | NodeJS.Timeout | undefined
		if (isActive) {
			intervalId = setInterval(() => {
				if (seconds === 0) {
					if (minutes === 0) {
						reset()
					} else {
						setMinutes(minutes - 1)
						setSeconds(59)
					}
				} else {
					setSeconds(seconds - 1)
				}
			}, 1000)
		} else {
			clearInterval(intervalId)
		}

		return () => clearInterval(intervalId)
	}, [isActive, minutes, seconds, reset])

	return (
		<VStack
			as="main"
			alignItems="center"
			justifyContent="space-between"
			minHeight="100vh"
			p="6rem"
		>
			<MenuButton />

			<Viewer isRunning={isActive} min={minutes} sec={seconds}>
				{status}
			</Viewer>

			<StartButton onClick={toggleTimer} visibility={!isActive} />

			<Informations
				cycles={cycleInfo.cycles}
				work={cycleInfo.work}
				rest={cycleInfo.rest}
			/>
		</VStack>
	)
}
