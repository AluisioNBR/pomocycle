import { Informations } from '@/components/Informations'
import { MenuButton } from '@/components/MenuButton'
import { StartButton } from '@/components/StartButton'
import { StatusViewer } from '@/components/StatusViewer'
import { TimeViewer } from '@/components/TimeViewer'
import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { Cycle, standartCycles } from './cycles'

export default function Home() {
	const [cycles, setCycles] = useState<Cycle[]>(standartCycles)

	return (
		<VStack
			as="main"
			alignItems="center"
			justifyContent="space-between"
			minHeight="100vh"
			p="6rem"
		>
			<MenuButton />

			<StatusViewer>STATUS</StatusViewer>

			<TimeViewer>{1500}</TimeViewer>

			<StartButton />

			<Informations cycles={4} work={25} rest={5} />
		</VStack>
	)
}
