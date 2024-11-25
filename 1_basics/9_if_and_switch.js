console.log("------ If 문 (If Statement) ------");

/**
 * if 문은 주어진 조건을 평가하여 조건이 true일 때 실행되는 코드 블록을 정의합니다.
 * 만약 조건이 false이면 else 블록이 실행됩니다.
 */

let number = 5;

// 짝수/홀수 판단
if (number % 2 === 0) {
  console.log(number + "는 짝수입니다.");
} else {
  console.log(number + "는 홀수입니다.");
}

console.log("------ If-Else 문 (If-Else Statement) ------");

/**
 * if-else 문은 조건을 평가하여 true일 때는 if 블록을 실행하고, false일 때는 else 블록을 실행합니다.
 * else if를 추가하여 여러 가지 조건을 평가할 수 있습니다.
 */

let temperature = 30;

// 온도에 따른 날씨 평가
if (temperature > 30) {
  console.log("너무 덥습니다.");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("적당한 날씨입니다.");
} else if (temperature >= 10 && temperature < 20) {
  console.log("쌀쌀한 날씨입니다.");
} else {
  console.log("춥습니다.");
}

console.log("------ Switch 문 (Switch Statement) ------");

/**
 * switch 문은 여러 가지 값 중 하나를 비교하여 해당하는 코드 블록을 실행하는 조건문입니다.
 * 값에 맞는 case를 찾으면 실행되고, 맞는 case가 없으면 default를 실행합니다.
 */

const englishDay = "monday";
let koreanDay;

// 요일 영어 -> 한국어로 변환
switch (englishDay) {
  case "monday":
    koreanDay = "월요일";
    break;
  case "tuesday":
    koreanDay = "화요일";
    break;
  case "wednesday":
    koreanDay = "수요일";
    break;
  case "thursday":
    koreanDay = "목요일";
    break;
  case "friday":
    koreanDay = "금요일";
    break;
  default:
    koreanDay = "주말"; // 주말이 아닌 다른 요일은 모두 '주말'로 처리
    break;
}

console.log(koreanDay);

/**
 * - if 문은 하나의 조건을 평가할 때 유용하고 복잡한 조건도 처리할 수 있습니다.
 * - switch 문은 여러 값 중 하나를 비교할 때 가독성이 높고, 여러 개의 조건을 처리할 때 유리합니다.
 */
