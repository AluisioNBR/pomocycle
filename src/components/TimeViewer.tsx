import { josefin } from '@/app/fonts'
import { Box, Heading } from '@chakra-ui/react'
import { Dispatch, useCallback, useEffect, useState } from 'react'

interface TimeViewerProps {
	children: number
	isRunning: boolean
	setIsRunning: Dispatch<boolean>
}

export function TimeViewer({
	children,
	isRunning,
	setIsRunning,
}: TimeViewerProps) {
	const [timerValue, setTimerValue] = useState(children)
	const [minutes, setMinutes] = useState('25')
	const [seconds, setSeconds] = useState('00')

	useEffect(() => {
		updateTimer(children)
	}, [children])

	const decrementTimer = useCallback(() => {
		setTimerValue((prevTimer) => {
			const nextTime = prevTimer - 1

			updateTimer(nextTime)

			return nextTime
		})
	}, [])

	const updateTimer = (time: number) => {
		const timerMinutes = time / 60
		const timerMinutesInt = Math.floor(timerMinutes)
		const timerSeconds = Math.ceil((timerMinutes - timerMinutesInt) * 60)

		setMinutes(
			`${timerMinutesInt}`.length == 2
				? `${timerMinutesInt}`
				: `0${timerMinutesInt}`
		)
		setSeconds(
			`${timerSeconds}`.length == 2 ? `${timerSeconds}` : `0${timerSeconds}`
		)
	}

	useEffect(() => {
		if (isRunning) {
			const timerInterval = setInterval(decrementTimer, 1000)

			setTimeout(() => {
				clearInterval(timerInterval)
				setIsRunning(false)
			}, children * 1000)
		}
	}, [isRunning, children, setIsRunning, decrementTimer])

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			w="18rem"
			h="10rem"
			bgGradient="linear(to-b, #9B33CC, #7933CC)"
			rounded={35}
		>
			<Heading color="white" fontSize={60} className={josefin.className}>
				{minutes}:{seconds}
			</Heading>
		</Box>
	)
}
