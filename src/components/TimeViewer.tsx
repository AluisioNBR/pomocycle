import { josefin } from '@/app/fonts'
import { Box, Heading } from '@chakra-ui/react'

interface TimeViewerProps {
	status: string
	min: number
	sec: number
	isFinished: boolean
}

export function TimeViewer({ status, min, sec, isFinished }: TimeViewerProps) {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			w="18rem"
			h="10rem"
			bgGradient={
				status === 'work' ? 'linear(to-b, #9B33CC, #7933CC)' : '#0000'
			}
			rounded={35}
		>
			<Heading color="white" fontSize={60} className={josefin.className}>
				{isFinished
					? 'Parabéns!'
					: `${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`}
			</Heading>
		</Box>
	)
}
