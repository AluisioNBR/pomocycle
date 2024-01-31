import { CycleInfos } from '@/app/cycles'
import { StatusViewer } from '@/components/StatusViewer'
import { TimeViewer } from '@/components/TimeViewer'
import { Dispatch, useEffect } from 'react'

interface ViewerProps {
	children: CycleInfos
	cycle: number
	isRunning: boolean
	setIsRunning: Dispatch<boolean>
}

export type StatusType = 'work' | 'rest'

export function Viewer({
	children,
	cycle,
	isRunning,
	setIsRunning,
}: ViewerProps) {
	const status: StatusType = cycle % 2 == 0 ? 'work' : 'rest'
	const time = status == 'work' ? children.work : children.rest

	return (
		<>
			<StatusViewer isRunning={isRunning}>{status}</StatusViewer>

			<TimeViewer
				isRunning={children ? isRunning : false}
				setIsRunning={setIsRunning}
			>
				{time * 60}
			</TimeViewer>
		</>
	)
}
