import { Cycle } from '@/app/cycles'
import { StatusViewer } from '@/components/StatusViewer'
import { TimeViewer } from '@/components/TimeViewer'

interface ViewerProps {
	children: Cycle[]
}

export function Viewer({ children }: ViewerProps) {
	return (
		<>
			<StatusViewer>{children[0].status}</StatusViewer>

			<TimeViewer>{children[0].time}</TimeViewer>
		</>
	)
}
