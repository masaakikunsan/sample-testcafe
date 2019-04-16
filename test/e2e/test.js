import { Selector } from 'testcafe'

fixture('ユーザー追加').page('http://localhost:3000/create')

const customDataAttribute = name => `[data-test='${name}']`

test('必要項目を入力後、送信して遷移先を確認', async t => {
  const userName = await Selector(customDataAttribute('name'))
  const userBio = await Selector(customDataAttribute('bio'))
  const submitButton = await Selector(customDataAttribute('submit-button'))

  await t
    .setNativeDialogHandler(() => true)
    .typeText(userName, 'test')
    .typeText(userBio, 'bioだよ〜')
    .click(submitButton)

  const tableUserName = await Selector(customDataAttribute('user-name')).nth(-1)
    .innerText

  await t.expect(tableUserName).eql('test')
})
