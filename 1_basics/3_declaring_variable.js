/**
 * Variable Declaration
 *
 * 1) var - 더 이상 사용하지 않는 것이 좋습니다.
 * 2) let - 값을 변경할 수 있는 변수
 * 3) const - 한 번 값이 할당되면 변경할 수 없는 상수
 */

// var는 더 이상 사용하지 않음
var product = "Laptop";
console.log(`product (var): ${product}`);

var quantity = 50;
console.log(`quantity (var): ${quantity}`);

// let을 사용하면 값 변경 가능
let userName = "Alice";
console.log(`userName (let): ${userName}`);

// let으로 선언한 변수는 값을 변경할 수 있음
userName = "Bob";
console.log(`Updated userName (let): ${userName}`);

// const는 한 번 값을 할당하면 변경할 수 없는 상수
const country = "South Korea";
console.log(`country (const): ${country}`);

// const로 선언한 변수는 재할당 불가
// country = "Canada"; // 오류 발생: Assignment to constant variable.

console.log("\nDeclaration and Assignment:");

/**
 * Declaration and Assignment
 *
 * 1) 선언 - 변수를 메모리에 할당
 * 2) 할당 - 변수에 값을 설정
 */

let productCategory;
console.log(`productCategory (undefined): ${productCategory}`); // 선언만 했을 때 값은 undefined

// const로 선언할 때는 반드시 초기값을 할당해야 함
// const region; // 오류 발생: 'const' declarations must be initialized
