// indexOf

const paragraph = "hello my name is elysia and elysia is elysia"
const indexOfName = paragraph.indexOf('elysia')
console.log(indexOfName)

// lastIndexOf - same as indexOf but from the end

// Split

const str = "Hello my naMe is ElysIA and eLYsia is elySia"
const words = str.split(' ')
console.log(words[3])
const chars = str.split('')
console.log(chars[3])
const elysia = str.split('elysia')
console.log(elysia)
console.log(elysia.join('elysia'))
// array.join
console.log(['elysia', 'is', 'cool'].join(' '))

// Slice
console.log(str.slice(12, 31));

// toLowerCase

console.log(str.toLowerCase())
console.log("ELYSIA".toLowerCase())

// toUpperCase

console.log(str.toUpperCase())
console.log("elysia".toUpperCase())

// Trim

const greeting = '      Hello everyone!         '
console.log('      Hello everyone!         '.trim())


