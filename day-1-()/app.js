// order could follow only with form you to after show such have could mean 
//  here are some thing to know about event in js  event are action that happen 
// the older we get the more we realised that kmaturity hit diffrently and we get matured we make sure that teaching is also a very good profeesion 
// 


// get attribute 
// let h1= document.querySelector('h1')
// console.log(h1)

// get hamesha 1 argument accept karta ha 
// console.log(h1.getAttribute('id'))

// let achor= document.querySelectorAll('a')
// console.log(achor)
// console.log(achor[0])
// console.log(achor[1])
// console.log(achor[2])

// console.log(achor[0].getAttribute('href'))
// console.log(achor[1].getAttribute('href'))
// console.log(achor[2].getAttribute('href'))


// // getter or ek setter
// achor[0].setAttribute('href','https://www.instagram.com')
// achor[1].setAttribute('href','https://www.twitter.com')
// achor[2].setAttribute('href','https://www.zomato.com')


// classlist
// let button= document.querySelector('button')
// console.log(button)

// button.classList.add('border')
// button.classList.add('background')
// button.classList.add('font-size')

// button.classList.add('background','border','font-size')
// // button.classList.remove('font-size')
// button.classList.toggle('font-size')
// button.classList.contains('backgroundd')

let ul= document.querySelector('ul')
console.log(ul)

let createEL = document.createElement('li')
console.log(createEL)

createEL.innerText="list 5"
ul.append(createEL)

let createEL1 = document.createElement('li')
console.log(createEL1)

createEL1.innerText="list 0"
ul.prepend(createEL1)
