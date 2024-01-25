import { HStack, Text } from '@chakra-ui/react'

interface InformationsProps {
	cycles: number
	work: number
	rest: number
}

export function Informations({ cycles, work, rest }: InformationsProps) {
	return (
		<HStack>
			<Text>{cycles} Ciclos</Text>

			<Text>{work}min de Trabalho</Text>

			<hr />

			<Text>{rest}min de Descanso</Text>
		</HStack>
	)
}
