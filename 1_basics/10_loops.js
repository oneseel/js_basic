// ==============================================
// Loops
// ==============================================

/**
 * 1) for Loop
 */
console.log("===============================================");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

/**
 * 6x6 정사각형 출력
 */
console.log("===============================================");
let squarePattern = ""; // 정사각형 모양을 담을 변수
const squareSize = 6; // 정사각형 크기

for (let row = 0; row < squareSize; row++) {
  for (let col = 0; col < squareSize; col++) {
    squarePattern += "*"; // *를 정사각형 형태로 추가
  }
  squarePattern += "\n"; // 한 줄 끝내고 새로운 줄로 이동
}

console.log(squarePattern);

/**
 * 2) for...in (Object나 Array의 key 또는 index 순회)
 */
console.log("===============================================");
const user = {
  name: "안유진",
  birthYear: 2003,
  group: "아이브",
};

// 객체의 key 출력
for (let key in user) {
  console.log(key);
}

const itemList = ["item1", "item2", "item3", "item4", "item5"];

// 배열의 index 출력
for (let index in itemList) {
  console.log(index); // index 출력
  console.log(`${index}: ${itemList[index]}`); // 값과 index 함께 출력
}

/**
 * 3) for...of (배열의 값 순회)
 */
console.log("===============================================");
for (let item of itemList) {
  console.log(item); // 배열의 각 item 출력
}

/**
 * 4) while Loop
 */
console.log("===============================================");
let counter = 0; // 반복 횟수를 세는 변수

while (counter < 10) {
  counter++;
  console.log(counter);
}

/**
 * 5) break (루프 종료)
 */
console.log("===============================================");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // 5일 때 루프 종료
  }
  console.log(i);
}

/**
 * 6) continue (현재 루프 건너뛰기)
 */
console.log("===============================================");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // 5일 때 건너뛰기
  }
  console.log(i);
}
