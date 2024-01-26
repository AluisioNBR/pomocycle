import { VStack, Text } from '@chakra-ui/react'

interface InformationsProps {
	cycles: number
	work: number
	rest: number
}

export function Informations({ cycles, work, rest }: InformationsProps) {
	return (
		<VStack>
			<Text>{cycles} Ciclos</Text>

			<Text>{work}min de Trabalho</Text>

			<hr />

			<Text>{rest}min de Descanso</Text>
		</VStack>
	)
}
