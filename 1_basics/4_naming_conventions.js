/**
 * Naming Conventions
 *
 * 1) 일반적으로 영어(라틴문자)를 사용하며 문자와 숫자를 모두 사용 할 수 있다.
 * 2) 특수기호는 언더스코어(_)와 달러($)만 사용할 수 있다.
 * 3) 숫자로 이름을 시작 할 수 없다.
 *    예: 1Name, 2Hello 등은 허용되지 않는다.
 * 4) 키워드는 변수명으로 사용 할 수 없다.
 *    예: var, let, const, function 등은 변수명으로 사용할 수 없다.
 */

console.log("----Naming Conventions Example----");

let productName = "Smartphone"; // camelCase
let product_price = 299; // snake_case
let ProductCategory = "Electronics"; // PascalCase

console.log(`productName (camelCase): ${productName}`);
console.log(`product_price (snake_case): ${product_price}`);
console.log(`ProductCategory (PascalCase): ${ProductCategory}`);

/**
 * Naming Conventions 2
 *
 * 1) camelCase -> 대부분의 언어에서 많이 사용
 * 2) snake_case -> 파이썬 같은 언어에서 사용
 * 3) PascalCase -> C# 마이크로소프트 계열의 언어에서 사용
 */

console.log("\n----Naming Conventions 2----");
console.log("1) camelCase: productName, userAge, totalAmount");
console.log("2) snake_case: product_price, user_name, order_id");
console.log("3) PascalCase: ProductCategory, UserAccount, OrderDetails");
