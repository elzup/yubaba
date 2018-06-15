// @flow

import moment from 'moment'

export function sleep(msec: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, msec))
}

export function makeDayLabel(daystring?: string): string {
	return moment(daystring).format('YYYY-MM-DD')
}
