import { VStack, Text } from '@chakra-ui/react'

interface InformationsProps {
	cycles: number
	work: number
	rest: number
}

export function Informations({ cycles, work, rest }: InformationsProps) {
	return (
		<VStack
			alignItems="center"
			justifyContent="center"
			w="16rem"
			h="10rem"
			bg="#D9D9D9"
			rounded={25}
		>
			<InformationText fontSize={25}>{`${cycles} Ciclos`}</InformationText>

			<InformationText fontSize={15}>
				{`${work} min de Trabalho`}
			</InformationText>

			<hr className="bg-[#5F33CC]" />

			<InformationText fontSize={15}>
				{`${rest} min de Descanso`}
			</InformationText>
		</VStack>
	)
}

interface InformationTextProps {
	children: string
	fontSize: number
}

function InformationText({ children, fontSize }: InformationTextProps) {
	return (
		<Text fontSize={fontSize} color="#5F33CC" fontFamily="Jua, sans-serif">
			{children}
		</Text>
	)
}
