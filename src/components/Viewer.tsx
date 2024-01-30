import { Cycle } from '@/app/cycles'
import { StatusViewer } from '@/components/StatusViewer'
import { TimeViewer } from '@/components/TimeViewer'
import { Dispatch, useEffect } from 'react'

interface ViewerProps {
	children: Cycle
	isRunning: boolean
	setIsRunning: Dispatch<boolean>
}

export function Viewer({ children, isRunning, setIsRunning }: ViewerProps) {
	return (
		<>
			<StatusViewer isRunning={children ? isRunning : false}>
				{children ? children.task : 'rest'}
			</StatusViewer>

			<TimeViewer
				isRunning={children ? isRunning : false}
				setIsRunning={setIsRunning}
			>
				{children ? children.time : 0}
			</TimeViewer>
		</>
	)
}
