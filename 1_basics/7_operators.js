console.log("------ 산술 연산자 (Arithmetic Operators) ------");

/**
 * 산술 연산자
 * 기본적인 산술 연산을 수행합니다.
 */
console.log(10 + 10); // 덧셈: 20
console.log(10 - 10); // 뺄셈: 0
console.log(10 * 10); // 곱셈: 100
console.log(10 / 10); // 나눗셈: 1
console.log(10 % 3); // 나머지: 1

console.log("------ 증가와 감소 (Increment and Decrement) ------");

/**
 * 증가(++)와 감소(--)
 * 변수의 값을 1씩 증가 또는 감소시킵니다.
 */
let count = 1;
count++;
console.log(count); // 2
count--;
console.log(count); // 1

console.log("------ 연산자의 위치 (Operator Position) ------");

/**
 * 연산자의 위치와 결과
 *
 * 1) 후위 연산자 (변수 뒤에 붙임): 현재 값을 반환한 후 연산 실행
 * 2) 전위 연산자 (변수 앞에 붙임): 연산을 실행한 후 값을 반환
 */
let value = 1;
console.log(value); // 1

// 후위 증가
let result = value++;
console.log(result, value); // 1, 2

// 후위 감소
result = value--;
console.log(result, value); // 2, 1

// 전위 증가
result = ++value;
console.log(result, value); // 2, 2

// 전위 감소
result = --value;
console.log(result, value); // 1, 1

console.log("------ 숫자 타입이 아닌 값에 산술 연산 ------");

/**
 * 숫자 타입이 아닌 값에 산술 연산자를 사용할 때
 *
 * + 또는 - 연산자를 사용하면 값이 숫자로 변환될 수 있습니다.
 */
let data = "99";
console.log(+data); // 99 (문자열 -> 숫자 변환)
console.log(typeof +data); // number

data = true;
console.log(+data); // 1
data = false;
console.log(+data); // 0

data = "text";
console.log(+data); // NaN
console.log(typeof +data); // number

console.log("------ 할당 연산자 (Assignment Operators) ------");

/**
 * 할당 연산자
 *
 * 값을 변수에 대입하거나, 산술 연산 후 대입합니다.
 */
let num = 100;
console.log(num); // 100
num += 10;
console.log(num); // 110

console.log("------ 비교 연산자 (Comparison Operators) ------");

/**
 * 비교 연산자 (Comparison Operators)
 *
 * 1) 값의 비교 (==, !=)
 * 2) 값과 타입의 비교 (===, !==)
 */

// 값만 비교
console.log(5 == "5"); // true
console.log(true == 1); // true

// 값과 타입 비교
console.log(5 === "5"); // false
console.log(true === 1); // false

// 부등 비교
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

console.log("------ 대소 관계 연산자 (Relational Operators) ------");

/**
 * 대소 관계 연산자
 */
console.log(100 > 50); // true
console.log(100 <= 50); // fals

console.log("------ 삼항 조건 연산자 (Ternary Operator) ------");

/**
 * 삼항 조건 연산자 (Ternary Operator)
 *
 * 조건 ? 참일 때 값 : 거짓일 때 값
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

console.log("------ 논리 연산자 (Logical Operators) ------");

/**
 * 논리 연산자
 *
 * 1) && (AND): 양쪽 모두 true일 때 true 반환
 * 2) || (OR): 하나라도 true일 때 true 반환
 */
console.log(true && false); // false
console.log(true || false); // true

console.log("------ 단축 평가 (Short-Circuit Evaluation) ------");

/**
 * 단축 평가
 * 1) AND (&&)
 *    - 왼쪽 값이 **false**라면 바로 왼쪽 값을 반환 (오른쪽은 보지 않음)
 *    - 왼쪽 값이 **true**라면 오른쪽 값을 반환
 *
 * 2) OR (||)
 *    - 왼쪽 값이 **true**라면 바로 왼쪽 값을 반환 (오른쪽은 보지 않음)
 *    - 왼쪽 값이 **false**라면 오른쪽 값을 반환
 */
console.log(true && "Value"); // Value
console.log(false && "Value"); // false
console.log(true || "Default"); // true
console.log(false || "Default"); // Default

console.log(true && true && "Value"); // Value
console.log(true && false && "Value"); // false

console.log("------ 지수 연산자 (Exponentiation Operator) ------");

/**
 * 지수 연산자 (Exponentiation Operator)
 *
 * ** 연산자를 사용하여 거듭제곱을 계산합니다.
 */
console.log(2 ** 3); // 8

console.log("------ Null 병합 연산자 (Nullish Coalescing Operator) ------");

/**
 * Null 병합 연산자 (Nullish Coalescing Operator)
 *
 * ?? 연산자는 null 또는 undefined인 경우 오른쪽 값을 반환합니다.
 */
let nickname;
console.log(nickname ?? "Unknown"); // "Unknown" (nickname이 undefined → 기본값 사용)

nickname = "Alice";
console.log(nickname ?? "Unknown"); // "Alice" (nickname이 값이 있으므로 그대로 반환)
