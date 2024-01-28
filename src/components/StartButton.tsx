import { Button, Image } from '@chakra-ui/react'

interface StartButtonProps {
	onClick: () => void
	visibility: boolean
}

export function StartButton({ onClick }: StartButtonProps) {
	return (
		<Button
			display="flex"
			alignItems="center"
			justifyContent="center"
			w="5rem"
			h="5rem"
			paddingLeft="1.5rem"
			bgGradient="linear(to-b, #9B33CC, #7933CC)"
			_hover={{ backgroundColor: '#7933CC' }}
			rounded={999}
			onClick={onClick}
		>
			<Image src="playIcon.png" alt="Botão de Início" title="Botão de Início" />
		</Button>
	)
}
