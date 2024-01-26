import { Box, Heading } from '@chakra-ui/react'

interface TimeViewerProps {
	children: number
}

export function TimeViewer({ children }: TimeViewerProps) {
	const minutes = '25'
	const seconds = '00'

	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			bgGradient="linear(to-b, #09B33CC, #7933CC)"
			rounded={10}
		>
			<Heading color="white">
				{minutes}:{seconds}
			</Heading>
		</Box>
	)
}
