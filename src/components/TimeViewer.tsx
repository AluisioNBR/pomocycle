import { Heading } from '@chakra-ui/react'

interface TimeViewerProps {
	children: number
}

export function TimeViewer({ children }: TimeViewerProps) {
	const minutes = '25'
	const seconds = '00'

	return (
		<div>
			<Heading>
				{minutes}:{seconds}
			</Heading>
		</div>
	)
}
