import { jua } from '@/app/fonts'
import { Button, Image, Text } from '@chakra-ui/react'

interface StartButtonProps {
	onClick: () => void
	isActive: boolean
	isFinished?: boolean
}

export function StartButton({
	onClick,
	isActive,
	isFinished,
}: StartButtonProps) {
	if (isActive)
		return (
			<Button
				display="flex"
				alignItems="center"
				justifyContent="center"
				w={isFinished ? '10rem' : '5rem'}
				h={isFinished ? '4rem' : '5rem'}
				paddingLeft="1.5rem"
				bgGradient="linear(to-b, #9B33CC, #7933CC)"
				_hover={{ backgroundColor: '#7933CC' }}
				rounded={isFinished ? 50 : 999}
				onClick={onClick}
			>
				{isFinished ? (
					<Text color="white" fontSize={30} className={jua.className}>
						Reiniciar
					</Text>
				) : (
					<Image
						src="playIcon.png"
						alt="Botão de Início"
						title="Botão de Início"
					/>
				)}
			</Button>
		)
}
