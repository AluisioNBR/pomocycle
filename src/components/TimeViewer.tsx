import { josefin } from '@/app/fonts'
import { Box, Heading } from '@chakra-ui/react'

interface TimeViewerProps {
	min: number
	sec: number
}

export function TimeViewer({ min, sec }: TimeViewerProps) {
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
				{min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
			</Heading>
		</Box>
	)
}
