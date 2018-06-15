import puppeteer from 'puppeteer'

const { LOGIN_USER, LOGIN_PASS } = process.env

const sel = (id, part = '') => `[data-test${part}="${id}"]`
const selActive = (id, part = '') => sel(id, part) + ':enabled'

jest.setTimeout(100000)
let page
let browser

const host = 'http://localhost:3000'
const site = (path = '') => `${host}${path}`

function generateCounter(selector) {
	return async page => (await page.$$(selector)).length
}

function generateEnable(selector) {
	return async (page, waitTime = 0) => {
		page.waitFor(waitTime)
		return await page.waitFor(selector, { timeout: 5000 })
	}
}

async function gv(selector, property) {
	const l = await page.waitFor(selector)
	return await (await l.getProperty(property)).jsonValue()
}

async function gp(selector, attribute) {
	await page.$eval(
		selector,
		(el, attribute) => el.getAttribute(attribute),
		attribute,
	)
}

const mock = {
	trigger: {
		id: '1',
		label: '気温 > 12度',
		labelr: '気温 &gt; 12度',
	},
	control: {
		id: '10',
		label: 'ミストOFF',
	},
	createEventInserted: 3,
	createEventInserted2: 3,
	createTriggerInserted: 3,
}

beforeAll(async () => {
	browser = await puppeteer.launch({ headless: true, timeout: 0 })
	page = await browser.newPage()
	await page.goto(site(), { waitUntil: 'networkidle2' })
	await page.setViewport({ width: 1280, height: 800 })
	await page.type(sel('email'), LOGIN_USER)
	await page.type(sel('password'), LOGIN_PASS)
	await page.click(sel('login-btn'))

	await page.waitFor(sel('house-2-link'))
	await page.click(sel('house-2-link'))
})

afterAll(() => {
	browser.close()
})

describe('UI', () => {
	it('コントロールの登録・削除', async () => {
		// in /houses/2

		const countControl = generateCounter(sel('control-item-', '^'))
		const controlNum1 = await countControl(page)
		const wait = generateEnable(selActive('control-submit-btn'))

		// 作成
		await wait(page)
		const controlName = '終テストコントロールOn'
		await page.type(sel('name-input'), controlName)
		await page.type(sel('activepin-input'), '11')
		await page.type(sel('negativepin-input'), '22')
		await page.click(sel('control-submit-btn'))

		// 作ったものの表示確認
		await wait(page)
		expect(await countControl(page)).toBe(controlNum1 + 1)
		expect(await gv(sel(`control-item-${controlNum1}`), 'innerHTML')).toEqual(
			expect.stringMatching(controlName),
		)

		// 削除
		await page.click(sel(`control-del-btn-${controlNum1}`))
		await wait(page)
		expect(await countControl(page)).toBe(controlNum1)

		// const l = await page.waitFor(sel(`control-item-${controlNum - 1}`))
	})

	it('シナリオの登録・削除', async () => {
		// in /houses/2

		const countScenario = generateCounter(sel('scenario-item-', '^'))
		const num = await countScenario(page)
		const wait = generateEnable(selActive('create-scenario-btn'))

		// 作成
		await wait(page)
		const scenarioName = '雪の日'
		await page.type(sel('scenario-name-input'), scenarioName)
		await page.click(sel('create-scenario-btn'))
		await wait(page)

		// 作ったものの表示確認
		const text = await gv(sel(`scenario-item-${num}`), 'innerHTML')
		expect(text).toEqual(expect.stringMatching(scenarioName))
		expect(await countScenario(page)).toBe(num + 1)

		// 削除
		await page.click(sel(`scenario-del-btn-${num}`))
		await wait(page)
		expect(await countScenario(page)).toBe(num)
	})

	it('トリガーの登録・削除', async () => {
		// in /houses/2/scenarios/2
		await page.waitFor(sel('scenario-link-0'))
		await page.click(sel('scenario-link-0'))

		const countTrigger = generateCounter(sel('trigger-item-', '^'))
		const num = await countTrigger(page)
		const wait = generateEnable(selActive('create-trigger-btn'))

		// 作成
		await wait(page)
		await page.select(sel('trigger-sensor-input'), '2')
		await page.select(sel('trigger-rule-input'), '<')
		await page.type(sel('trigger-sensor-value-input'), '30')
		await page.click(sel('create-trigger-btn'))

		// 作ったものの表示確認
		await wait(page)
		const text = await await gv(
			sel(`trigger-item-${mock.createTriggerInserted}`),
			'innerHTML',
		)
		expect(text).toEqual(expect.stringMatching('湿度 &lt; 30%'))
		expect(await countTrigger(page)).toBe(num + 1)

		// 削除
		await page.click(sel(`trigger-del-btn-${mock.createTriggerInserted}`))
		await wait(page)
		expect(await countTrigger(page)).toBe(num)
	})

	it('イベントの登録・削除', async () => {
		// in /houses/2/scenarios/2
		// await page.waitFor(sel('scenario-link-0'))
		// await page.click(sel('scenario-link-0'))

		const countEvent = generateCounter(sel('event-item-', '^'))
		const eventNum1 = await countEvent(page)
		const wait = generateEnable(selActive('create-event-btn'))

		// イベント作成
		await wait(page)
		await page.select(sel('event-trigger-id-input'), mock.trigger.id)
		await page.select(sel('event-control-id-input'), mock.control.id)
		await page.type(sel('event-start-time-input'), '09:59')
		await page.type(sel('event-end-time-input'), '12:30')
		await page.type(sel('event-active-interval-input'), '5')
		await page.type(sel('event-negative-interval-input'), '0')
		await page.click(sel('create-event-btn'))

		await wait(page)
		await page.select(sel('event-trigger-id-input'), '0')
		await page.type(sel('event-start-time-input'), '10:00')
		await page.type(sel('event-end-time-input'), '12:30')
		await page.click(sel('create-event-btn'))

		// 作ったものの表示確認
		await wait(page)
		const text2 = await gv(sel(`event-item-${eventNum1}`), 'innerHTML')
		expect(text2).toEqual(expect.stringMatching(mock.trigger.labelr))
		expect(text2).toEqual(expect.stringMatching(mock.control.label))
		expect(await countEvent(page)).toBe(eventNum1 + 2)

		// 削除
		await page.click(sel(`event-del-btn-${eventNum1}`))
		await wait(page)
		await page.click(sel(`event-del-btn-${eventNum1}`))
		await wait(page)
		expect(await countEvent(page)).toBe(eventNum1)

		// トグル
		await wait(page)

		// const selBtn = sel(`event-toggle-btn-${eventNum1 - 1}`)
		// const btnState0 = await gp(selBtn, 'data-checked')
		// console.log(btnState0)
		//
		// await page.click(selBtn)
		// await wait(page)
		// expect(await gp(selBtn, 'data-checked')).toBe(!btnState0)
		//
		// await page.click(selBtn)
		// await wait(page)
		// expect(await gp(selBtn, 'data-checked')).toBe(btnState0)
	})
})
