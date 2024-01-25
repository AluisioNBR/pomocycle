import { Text } from '@chakra-ui/react'

interface StatusViewerProps {
	children: string
}

export function StatusViewer({ children }: StatusViewerProps) {
	return (
		<div>
			<Text>{children}</Text>
		</div>
	)
}
