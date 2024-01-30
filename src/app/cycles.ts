export interface Cycle {
	task: 'work' | 'rest'
	time: number
}

export const standartCycles: Cycle[] = [
	{ task: 'work', time: 1500 },
	{ task: 'rest', time: 300 },
	{ task: 'work', time: 1500 },
	{ task: 'rest', time: 300 },
]
