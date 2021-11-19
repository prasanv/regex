// validation script here
const inputs = document.querySelectorAll('input');

const patterns = {
  username: /^[a-z\d]{5,12}$/i,
  email: /^([a-zA-Z\d.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]+)(\.[a-zA-Z]+)?[^.]$/,
  password: /^[\w@-]{8,20}$/,
  telephone: /^\d{10}$/,
  slug: /^[a-z0-9-]{8,20}$/,
}

const regExpValidator = (regExp, field) => {
  if(regExp.test(field.value)){
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach(input => {
  input.addEventListener('keyup', (e) => {
    regExpValidator(patterns[e.target.name], e.target)
  })
})


/*

username
/^\w{5,12}$/

email
/^([a-zA-Z\d.-]+)@([a-zA-Z0-9-]+)\.([a-zA-Z]+)(\.[a-zA-Z]+)?[^.]$/

password
/^[a-zA-Z0-9_@-]{8,20}$/

phone number
/^\d{10}$/

slug
/^[a-z0-9-]{8,20}$/i

*/