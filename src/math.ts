// // namespace

// namespace MathFunctions {
//   export function addition(x: number, y: number){
//     return x + y;
//   }
//   export function soustraction(x: number, y: number){
//     return x - y;
//   }
//   export function multiplication(x: number, y: number){
//     return x * y;
//   }
//   export function division(x: number, y: number){
//     return x / y;
//   }
// }

// les modules

function addition(x: number, y: number) {
  return x + y;
}
function soustraction(x: number, y: number) {
  return x - y;
}
function multiplication(x: number, y: number) {
  return x * y;
}
function division(x: number, y: number) {
  return x / y;
}

export { addition as add, soustraction, multiplication, division };
