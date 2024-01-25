import { Button, Image } from '@chakra-ui/react'

export function MenuButton() {
	return (
		<Button
			title="Menu"
			bg="#fff"
			w="3.5rem"
			h="3.5rem"
			pos="absolute"
			top=".5rem"
			left=".5rem"
		>
			<Image src="menuIcon.png" alt="Menu" w="4rem" h="1.25rem" />
		</Button>
	)
}
