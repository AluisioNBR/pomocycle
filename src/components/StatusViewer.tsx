import { jua } from '@/app/fonts'
import { Box, Text } from '@chakra-ui/react'

interface StatusViewerProps {
	children: 'work' | 'rest'
	isRunning: boolean
}

export function StatusViewer({ children, isRunning }: StatusViewerProps) {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			w="9.56rem"
			h="2.62rem"
			bgGradient="linear(to-b, #9B33CC, #7933CC)"
			rounded={10}
		>
			<Text color="white" fontSize={24} className={jua.className}>
				{!isRunning
					? 'Parado'
					: children == 'work'
					? 'Trabalhando'
					: 'Descansando'}
			</Text>
		</Box>
	)
}
