import { Cycle } from '@/app/cycles'
import { StatusViewer } from '@/components/StatusViewer'
import { TimeViewer } from '@/components/TimeViewer'
import { Dispatch } from 'react'

interface ViewerProps {
	children: Cycle
	isRunning: boolean
	setIsRunning: Dispatch<boolean>
}

export function Viewer({ children, isRunning, setIsRunning }: ViewerProps) {
	return (
		<>
			<StatusViewer isRunning={isRunning}>{children.task}</StatusViewer>

			<TimeViewer isRunning={isRunning} setIsRunning={setIsRunning}>
				{children.time}
			</TimeViewer>
		</>
	)
}
