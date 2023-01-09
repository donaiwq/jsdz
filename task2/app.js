// var movieInfo = {
//   name: 'Peaky Blinders',
//   releaseDate: "13.12.21",
//   mainActor: {
//     generalRole: 'Cillian Murphy as Thomas Shelby,Paul Anderson as Arthur Shelby,Sophie Rundle as Ada Thorne (née Shelby)',
//     secondRole:'Kate Phillips as Linda Shelby,Finn Cole as Michael Gray,Anya Taylor-Joy as Gina Gray'
//   },
//   episodeAmount: {
//     total: {
//       totalAmount:3
//     },
//     first: {

//   amount:"12 episods"
//     },
//     second: {
//       amount:'10 episods'
//     },
//     third: {
//       amount:'8 eposids'
//     }
//   }

  
// }
// console.log(movieInfo);

let weekName = 'friday'.toLowerCase()

switch (weekName) {
  case "monday":
    console.log("Понедельник");
    break;
  case 'tuesday':
    console.log('Вторник');
    break;
  case 'wednesday':
    console.log('Среда');
    break;
  case 'thursday':
    console.log('Четверг');
    break;
  case 'friday':
    console.log('Пятница');
    break;

  case 'saturday':
    console.log('Суббота');
    break;
  case 'sunday':
    console.log('Воскресенье');
    break;
  default:
    console.log('Review typed data again!');
    break;
}
