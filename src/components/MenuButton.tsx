import { Button, Image } from '@chakra-ui/react'

interface MenuButtonProps {
	status: string
}

export function MenuButton({ status }: MenuButtonProps) {
	return (
		<Button
			title="Menu"
			bg="#0000"
			w="3.5rem"
			h="3.5rem"
			pos="absolute"
			top=".5rem"
			left=".5rem"
		>
			<Image
				src={status === 'work' ? 'menuIcon.png' : 'menuIconWhite.png'}
				alt="Menu"
				w="4rem"
				h="1.25rem"
			/>
		</Button>
	)
}
