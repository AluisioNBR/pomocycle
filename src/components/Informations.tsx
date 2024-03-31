import { jua } from '@/app/fonts'
import { VStack, Text } from '@chakra-ui/react'
import { useMemo } from 'react'

interface CycleInfos {
	cycles: number
	counter: number
	work: number
	rest: number
	isActive: boolean
	isFinished: boolean
}

export function Informations({
	cycles,
	counter,
	work,
	rest,
	isActive,
	isFinished,
}: CycleInfos) {
	const workTime = useMemo(() => work * cycles, [work, cycles])
	const restTime = useMemo(() => rest * (cycles - 1), [rest, cycles])

	return (
		<VStack
			alignItems="center"
			justifyContent="center"
			w="18rem"
			py="1rem"
			bg="#D9D9D9"
			rounded={25}
		>
			<InformationText fontSize={25}>
				{isFinished
					? `${cycles} Ciclos: ${Math.floor((workTime + restTime) / 60)}`
					: isActive
					? `${cycles} Ciclos`
					: `Ciclo: ${counter + 1}`}
			</InformationText>

			{isFinished ? (
				<>
					<InformationText fontSize={15}>
						{`Você trabalhou por:\n\n${Math.floor(workTime / 60)} HORAS ${
							`${workTime / 60}`.split('.')[1]
						} E MINUTOS!`}
					</InformationText>

					<hr className="bg-[#5F33CC]" />

					<InformationText fontSize={15}>
						{`${rest} min de Descanso`}
					</InformationText>
				</>
			) : isActive ? (
				<>
					<InformationText fontSize={15}>
						{`${work} min de Trabalho`}
					</InformationText>

					<hr className="bg-[#5F33CC]" />

					<InformationText fontSize={15}>
						{`${rest} min de Descanso`}
					</InformationText>
				</>
			) : null}
		</VStack>
	)
}

interface InformationTextProps {
	children: string
	fontSize: number
}

function InformationText({ children, fontSize }: InformationTextProps) {
	return (
		<Text fontSize={fontSize} color="#5F33CC" className={jua.className}>
			{children}
		</Text>
	)
}
