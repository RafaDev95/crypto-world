// function kFormatter(num) {
//     switch (Math.abs(num)) {
//         case Math.abs(num):

//             break;

//         default:
//             break;
//     }
//   if (Math.abs(num) > 999)
//     return Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
//   if (Math.abs(num) > 9999)
//     return Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + 'k'

//   if (Math.abs(num) < 999) return Math.sign(num) * Math.abs(num)

//   // Math.abs(num) > 999
//   // ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
//   // : Math.sign(num) * Math.abs(num)
// }

// console.log(kFormatter(1200)) // 1.2k
// console.log(kFormatter(20000)) // 1.2k

// console.log(kFormatter(900)) //

let formatter = Intl.NumberFormat('en', { notation: 'compact' })

const price = formatter.format(9370.9993109108)
const volume = formatter.format(6818750000)
const marketCap = formatter.format(159393904304)
const allTime = formatter.format(19500.471361532)
const totalSupply = formatter.format(21000000)
const circulatingSupply = formatter.format(17009275)
// let billion = formatter.format(1e9)

console.log({
  price,
  volume,
  marketCap,
  allTime,
  totalSupply,
  circulatingSupply
})
