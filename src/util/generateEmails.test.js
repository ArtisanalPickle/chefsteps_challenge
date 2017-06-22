import generateEmails from './generateEmails'

it('equal the requested length', () => {
  let count  = 10
  let emails = generateEmails(count)
  expect(emails.length).toEqual(count)
})
