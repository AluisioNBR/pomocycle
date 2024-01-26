import { Informations } from '@/components/Informations'
import { MenuButton } from '@/components/MenuButton'
import { StartButton } from '@/components/StartButton'
import { StatusViewer } from '@/components/StatusViewer'
import { TimeViewer } from '@/components/TimeViewer'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<MenuButton />

			<StatusViewer>STATUS</StatusViewer>

			<TimeViewer>{1500}</TimeViewer>

			<StartButton />

			<Informations cycles={4} work={25} rest={5} />
		</main>
	)
}
