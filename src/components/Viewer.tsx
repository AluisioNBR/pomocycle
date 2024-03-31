import { StatusViewer } from '@/components/StatusViewer'
import { TimeViewer } from '@/components/TimeViewer'

interface ViewerProps {
	status: string
	children: string
	min: number
	sec: number
	isActive: boolean
}

export type StatusType = 'work' | 'rest'

export function Viewer({ status, children, min, sec, isActive }: ViewerProps) {
	return (
		<>
			<StatusViewer status={status} isActive={isActive}>
				{children}
			</StatusViewer>

			<TimeViewer status={status} min={min} sec={sec} />
		</>
	)
}
