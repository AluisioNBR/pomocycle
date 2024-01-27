import { josefin } from '@/app/fonts'
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
