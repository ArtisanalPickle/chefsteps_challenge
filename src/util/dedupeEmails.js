import _ from 'lodash'

export default (emails) => {
  let dedupedEmails = []
  let emailsSeen    = {}

  _.each(emails, (email) => {
    if(!_.has(emailsSeen, email)) {
      dedupedEmails.push(email)
    }
    emailsSeen[email] = true
  })

  return dedupedEmails
}
