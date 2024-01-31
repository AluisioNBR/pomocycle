'use client'
import { Informations } from '@/components/Informations'
import { MenuButton } from '@/components/MenuButton'
import { StartButton } from '@/components/StartButton'
import { VStack } from '@chakra-ui/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { CycleInfos, standartCycleInfo } from './cycles'
import { Viewer } from '@/components/Viewer'

export default function Home() {
	const [cycleInfo, setCycleInfo] = useState<CycleInfos>(standartCycleInfo)
	const [cycle, setCycle] = useState(0)
	const [isRunning, setIsRunning] = useState(false)
	const minuntesToMiliSecondsConst = useMemo(() => 60 * 1000, [])

	const startPomo = useCallback(() => {
		setIsRunning(true)

		const timeout =
			cycle % 2 == 0
				? cycleInfo.work * minuntesToMiliSecondsConst
				: cycleInfo.rest * minuntesToMiliSecondsConst

		setTimeout(() => {
			if (cycle < cycleInfo.cycles) {
				setCycle((prevState) => prevState + 1)
				startPomo()
			} else {
				setCycle(0)
				setIsRunning(false)
			}
		}, timeout)
	}, [cycleInfo, cycle, minuntesToMiliSecondsConst])

	return (
		<VStack
			as="main"
			alignItems="center"
			justifyContent="space-between"
			minHeight="100vh"
			p="6rem"
		>
			<MenuButton />

			<Viewer isRunning={isRunning} setIsRunning={setIsRunning} cycle={cycle}>
				{cycleInfo}
			</Viewer>

			<StartButton onClick={startPomo} visibility={!isRunning} />

			<Informations
				cycles={cycleInfo.cycles}
				work={cycleInfo.work}
				rest={cycleInfo.rest}
			/>
		</VStack>
	)
}
