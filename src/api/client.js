// @flow

import camelCaseRecursive from 'camelcase-keys-recursive'
import request from 'superagent'

import config from '../config'
// import type {} from '../types'

type Req = {
	path: string,
	params?: Object,
	token?: string,
}
// type ReqMethod = 'get' | 'post' | 'put' | 'del'

export async function get({
	path = '/',
	params = {},
	token,
}: Req): Promise<any> {
	const res = await request
		.get(config.api.url + path)
		.query(params)
		.set('Authorization', token)
	const body = camelCaseRecursive(res.body, {
		deep: true,
	})
	return body
}

export async function post({
	path = '/',
	params = {},
	token,
}: Req): Promise<any> {
	const res = await request
		.post(config.api.url + path)
		.send(params)
		.set('Authorization', token)
	const body = camelCaseRecursive(res.body, {
		deep: true,
	})
	return body
}

export async function put({
	path = '/',
	params = {},
	token,
}: Req): Promise<any> {
	const res = await request
		.put(config.api.url + path)
		.send(params)
		.set('Authorization', token)
	const body = camelCaseRecursive(res.body, {
		deep: true,
	})
	return body
}

export async function del({
	path = '/',
	params = {},
	token,
}: Req): Promise<any> {
	const res = await request
		.del(config.api.url + path)
		.send(params)
		.set('Authorization', token)
	const body = camelCaseRecursive(res.body, {
		deep: true,
	})
	return body
}
