import { StatusViewer } from '@/components/StatusViewer'
import { TimeViewer } from '@/components/TimeViewer'
import { Dispatch } from 'react'

interface ViewerProps {
	children: string
	min: number
	sec: number
	isRunning: boolean
}

export type StatusType = 'work' | 'rest'

export function Viewer({ children, min, sec, isRunning }: ViewerProps) {
	return (
		<>
			<StatusViewer isRunning={isRunning}>{children}</StatusViewer>

			<TimeViewer min={min} sec={sec} />
		</>
	)
}
