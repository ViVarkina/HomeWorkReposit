// import SuperButton from "./homework/homework4/common/c2-SuperButton/SuperButton.tsx";
// import './App.css'
//
// export const PrintPyramid = () => {
//
//     const func = (lines:number) => {
//         for (let i = 1; i <= lines; i++) {
//             console.log('#'.repeat(i));
//         }
//     }
//
//     function calculate(arr) {
//         let sum = 0
//         for (const arrElement of arr) {
//             if (arrElement % 2 != 0 && arrElement > 0) {
//                 sum = sum + arrElement
//             }
//         }
//         console.log(sum)
//     }
//
//     function sumDigit(num:number) {
//         const str = num.toString()
//         const numbers = []
//         for (const key in str) {
//             numbers.push(str[key])
//         }
//         let sum = 0
//         for (const numbersKey of str) {
//             sum = sum + Number(numbersKey)
//         }
//         console.log(sum)
//     }
//
//     function filter(a:number, b:number, c:number) {
//         const arr = []
//         for (let i = a; i <= b; i++) {
//             if (i % c == 0) {
//                 arr.push(i)
//             }
//         }
//         console.log(arr)
//
//     }
//
//
//     return <div className={'container'}>
//         <div>
//             <span>№1</span>
//             <SuperButton onClick={() => func(10)} className={'btnWid'}>func</SuperButton>
//         </div>
//
//         <div>
//             <span>№2</span>
//             <SuperButton onClick={() => calculate([5, 0, -5, 20, 88, 17, -32])}
//                          className={'btnWid'}>calculate</SuperButton>
//         </div>
//
//         <div>
//             <span>№3 -</span>
//         </div>
//
//         <div>
//             <span>№4</span>
//             <SuperButton onClick={() => sumDigit(9998997659929)} className={'btnWid'}>sumDigit</SuperButton>
//         </div>
//
//         <div>
//             <span>№5</span>
//             <SuperButton onClick={() => filter(5, 15, 3)} className={'btnWid'}>filter</SuperButton>
//         </div>
//
//         <div>
//             <span>№6</span>
//         </div>
//
//         <div>
//             <span>№7</span>
//             <p>?</p>
//         </div>
//
//
//     </div>
// }