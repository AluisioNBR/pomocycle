'use client'
import { Informations } from '@/components/Informations'
import { MenuButton } from '@/components/MenuButton'
import { StartButton } from '@/components/StartButton'
import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Cycle, standartCycles } from './cycles'
import { Viewer } from '@/components/Viewer'

export default function Home() {
	const [cycles, setCycles] = useState<Cycle[]>(standartCycles)
	const [currentCycle, setCurrentCycle] = useState<Cycle>(cycles[0])
	const [isRunning, setIsRunning] = useState(false)

	const startPomo = () => {
		setIsRunning(true)
		// setTimeout()
	}

	return (
		<VStack
			as="main"
			alignItems="center"
			justifyContent="space-between"
			minHeight="100vh"
			p="6rem"
		>
			<MenuButton />

			<Viewer isRunning={isRunning} setIsRunning={setIsRunning}>
				{currentCycle}
			</Viewer>

			<StartButton onClick={startPomo} visibility={!isRunning} />

			<Informations cycles={4} work={25} rest={5} />
		</VStack>
	)
}
