export default (count) => {
  let emails = []
  let randRange = Math.round(count/2)

  for(let i=0; i < count; i++) {
    let randomNumber = Math.floor(Math.random() * randRange) 
    emails.push(`email.${randomNumber}@email.test`) 
  }
  
  return emails
}
