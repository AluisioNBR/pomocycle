import { jua } from '@/app/fonts'
import { Box, Text } from '@chakra-ui/react'

interface StatusViewerProps {
	status: string
	children: string
	isActive: boolean
}

export function StatusViewer({
	status,
	children,
	isActive,
}: StatusViewerProps) {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			w="9.56rem"
			h="2.62rem"
			bgGradient={
				status === 'work'
					? 'linear(to-b, #9B33CC, #7933CC)'
					: 'linear(to-b, #fff, #fff)'
			}
			rounded={10}
		>
			<Text
				color={status === 'work' ? 'white' : '#7933CC'}
				fontSize={24}
				className={jua.className}
			>
				{!isActive
					? 'Parado'
					: children == 'work'
					? 'Trabalhando'
					: 'Descansando'}
			</Text>
		</Box>
	)
}
