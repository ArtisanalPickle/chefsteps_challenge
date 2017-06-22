import dedupeEmails from './dedupeEmails'

describe('with duplicates', () => {
  it('should dedupe', () => {
    let emails        = ['m@gilk.co', 'm@gilk.co', 'm@gilk.co']
    let dedupedEmails = dedupeEmails(emails)
    expect(dedupedEmails).toEqual(['m@gilk.co'])
  })

  it('should maintain order', () => {
    let emails        = ['matt@mealsharing.com', 'm@gilk.co', 'm@gilk.co', 'matt@mealsharing.com', 'm@gilk.co']
    let dedupedEmails = dedupeEmails(emails)
    expect(dedupedEmails).toEqual(['matt@mealsharing.com', 'm@gilk.co'])
  })
})

describe('without duplicates', () => {
  it('should not change size', () => {
    let emails = ['matt@mealsharing.com', 'm@gilk.co']
    let dedupedEmails = dedupeEmails(emails)
    expect(dedupedEmails.length).toEqual(emails.length)
  })
})
