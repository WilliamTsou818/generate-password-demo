// sample a password from collection
function sample(collection) {
  let randomIndex = Math.floor(Math.random() * collection.length)
  return collection[randomIndex]
}

function generatePassword(options) {
  console.log(options)
  // set data for creating password
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toLocaleUpperCase()
  const numbers = '0123456789'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things user picked up
  let collection = []
    
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove data user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(str => !options.excludeCharacters.split('').includes(str))
  }

  // generate password
  let password = ''
  for (let i = 0; i < options.length; i ++) {
    password += sample(collection)
  }

  // return password
  return password
} 

// export generate password function for other files
module.exports = generatePassword