export interface Cycle {
	task: 'work' | 'rest'
	status: 'stopped' | 'in progress' | 'done'
	time: number
}

export const standartCycles: Cycle[] = [
	{ task: 'work', status: 'stopped', time: 1500 },
	{ task: 'rest', status: 'stopped', time: 300 },
	{ task: 'work', status: 'stopped', time: 1500 },
	{ task: 'rest', status: 'stopped', time: 300 },
]
