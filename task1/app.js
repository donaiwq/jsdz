//The first task (1)

const userName = prompt('Type your name')
const surname = prompt('Type your Surname')
const lastName = prompt('Type your Lastname')
const password = Number(prompt('Type your password'))

if (password === 777) {
  alert('your accout now is awailable', password);
} else if (password === 'geektech') {
  alert('successfully', password)
}
else {
  alert('Error', password)
}


//The second task (2)

let getMonth = prompt('Enter month of your birthday').toLowerCase()
let getNumber = Number(prompt('Enter date'))

// if (getMonth.toLowerCase) {
//   console.log(getMonth[0].toUpperCase() + getMonth.slice(1, getMonth.length) )
// }

  if ( getNumber  >= 21 && getMonth === 'march' || getNumber <= 20 && getMonth === 'april' ) {
  alert('Your Zodiac sign is OVEN', getMonth + getNumber)
 }
 else if( getNumber >= 32 || getNumber <= 0) {
  alert('check your data!!!', getNumber + getMonth)
}
else if ( getNumber  >= 21 && getMonth === 'april' || getNumber <= 21 && getMonth === 'may' ) {
  alert('Your Zodiac sign is TAURUS', getMonth + getNumber)
}
else if ( getNumber  >= 22 && getMonth === 'may' || getNumber <= 21 && getMonth === 'june' ) {
  alert('Your Zodiac sign is GEMINI', getMonth + getNumber)
}
else if ( getNumber  >= 22 && getMonth === 'june' || getNumber <= 23 && getMonth === 'july' ) {
  alert('Your Zodiac sign is Cancer', getMonth + getNumber)
}
else if ( getNumber  >= 24 && getMonth === 'july' || getNumber <= 23 && getMonth === 'august' ) {
  alert('Your Zodiac sign is Leo', getMonth + getNumber)
}
else if ( getNumber  >= 24 && getMonth === 'august' || getNumber <= 21 && getMonth === 'september' ) {
  alert('Your Zodiac sign is Virgo', getMonth + getNumber)
}
else if ( getNumber  >= 21 && getMonth === 'september' || getNumber <= 20 && getMonth === 'october' ) {
  alert('Your Zodiac sign is Libra', getMonth + getNumber)
}
else if ( getNumber  >= 21 && getMonth === 'october' || getNumber <= 20 && getMonth === 'november' ) {
  alert('Your Zodiac sign is Scorpion', getMonth + getNumber)
}
else if ( getNumber  >= 21 && getMonth === 'november' || getNumber <= 20 && getMonth === 'december' ) {
  alert('Your Zodiac sign is Sagittarius', getMonth + getNumber)
}
else if ( getNumber  >= 22 && getMonth === 'december' || getNumber <= 20 && getMonth === 'january' ) {
  alert('Your Zodiac sign is Capricorn', getMonth + getNumber)
}
else if ( getNumber  >= 21 && getMonth === 'january' || getNumber <= 19 && getMonth === 'february' ) {
    alert('Your Zodiac sign is Aquarius', getMonth + getNumber)
} 
else if ( getNumber  >= 20 && getMonth === 'february' || getNumber <= 20 && getMonth === 'march' ) {
  alert('Your Zodiac sign is Pisces', getMonth + getNumber)
}

else {
    alert('check your data!!!', getNumber)
}

