/**
 * JavaScript Data Types
 *
 * 6 Primitive Types and 1 Object Type.
 */

/**
 * Number
 * 숫자를 나타내며, 정수와 실수를 모두 포함
 * 특별한 값: Infinity (무한대), -Infinity (음의 무한대), NaN (Not-a-Number)
 */
console.log("----Number----");
const num1 = 10;
const num2 = -5;
const pi = 3.14;
const inf = Infinity;
const negInf = -Infinity;

console.log(`num1: ${num1} (type: ${typeof num1})`);
console.log(`num2: ${num2} (type: ${typeof num2})`);
console.log(`pi: ${pi} (type: ${typeof pi})`);
console.log(`Infinity: ${inf} (type: ${typeof inf})`);
console.log(`-Infinity: ${negInf} (type: ${typeof negInf})`);

/**
 * String
 * 문자나 텍스트를 나타내는 타입
 * 작은 따옴표, 큰 따옴표, 템플릿 리터럴 사용 가능
 */
console.log("\n----String----");

const singleQuote = "'Hello'";
const doubleQuote = '"World"';
const lineBreak = "Hello\nWorld"; // \n : 줄바꿈
const tabSpace = "Hello\tWorld"; // \t : 탭
const filePath = "C:\\Folder\\File"; // \\ : 백슬래시 이스케이프
const templateExample = `This is a 
template with 'single quotes' and "double quotes"`;
const name = "John";

console.log(`singleQuote: ${singleQuote}`);
console.log(`doubleQuote: ${doubleQuote}`);
console.log(`lineBreak:\n${lineBreak}`);
console.log(`tabSpace: ${tabSpace}`);
console.log(`filePath: ${filePath}`);
console.log(`templateExample: ${templateExample}`);
console.log(`name + " Doe": ${name + " Doe"}`);
console.log(`\`\${name} Doe\`: ${`${name} Doe`}`);

/**
 * Boolean
 * 참(true) 또는 거짓(false)을 나타내는 타입
 */
console.log("\n----Boolean----");

const isOn = true;
const isOff = false;

console.log(`isOn: ${isOn} (type: ${typeof isOn})`);
console.log(`isOff: ${isOff} (type: ${typeof isOff})`);

/**
 * undefined
 * 변수 선언 후 값이 초기화되지 않으면 자동으로 할당
 * 직접 undefined로 초기화하는 것은 지양해야 함
 */
console.log("\n----undefined----");

let unknown;
console.log(`unknown: ${unknown} (type: ${typeof unknown})`);

/**
 * null
 * 명시적으로 '값 없음'을 나타내는 객체 타입
 */
console.log("\n----null----");

let empty = null;
console.log(`empty: ${empty} (type: ${typeof empty})`); // object (버그)

/**
 * Symbol
 * 고유한 값을 생성하는 타입
 */
console.log("\n----Symbol----");

const str1 = "1";
const str2 = "1";
const sym1 = Symbol("1");
const sym2 = Symbol("1");

console.log(`str1 === str2: ${str1 === str2}`); // true (같은 값)
console.log(`sym1 === sym2: ${sym1 === sym2}`); // false (각각 고유한 값)

/**
 * Object
 * key:value 형식으로 데이터를 저장하는 타입
 */
console.log("\n----Object----");

const colors = {
  red: "Red",
  green: "Green",
  blue: "Blue",
};

console.log(`colors: ${JSON.stringify(colors)}`);
console.log(`colors["red"]: ${colors["red"]}`);
console.log(`colors["green"]: ${colors["green"]}`);
console.log(`colors["blue"]: ${colors["blue"]}`);

/**
 * Array
 * 순서가 있는 값들의 리스트로 데이터를 저장하는 타입
 */
console.log("\n----Array----");

const items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];

console.log(`items: ${JSON.stringify(items)}`);
console.log(`items[0]: ${items[0]}`);
console.log(`items[5]: ${items[5]}`);

items[0] = "NewItem1"; // 배열 값 변경
console.log(`Updated items: ${JSON.stringify(items)}`);

/**
 * Static Typing vs Dynamic Typing
 * Static Typing: 변수 타입을 명시적으로 선언 (예: C언어)
 * Dynamic Typing: 변수 타입을 명시적으로 선언하지 않고, 값에 의해 타입이 추론됨 (예: JavaScript)
 */
