const date = require('./date.js');
// console.log(date);

const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

const container = () => {
  // return todayDate;

  const checkDate = (today) => {
    if (today === date) {
      return `${tagComponent('div', `정답! 오늘은 6월 ${date}일 입니다.`)}
  ${tagComponent('div', `TIM : 6월 12일은 호연이의 탄생일!`)}
      `;
    } else {
      return `${tagComponent('div', `땡! 오늘은 6월 ${date}일 입니다.`)}`;
    }
  };

  return `
  ${tagComponent('div', '오늘은 6월 ?일 일까요?')}
  ${checkDate(13)}
  `;
};

console.log(container());
//todo-1 날짜 함수 구하기 _ 완료
//todo-2 함수에 적용 _ 완료
//todo-3 12일(오늘)이 아니라면 A방식 _ 완료
//todo-4 12일(오늘)이 맞다면 B방식 _ 완료
