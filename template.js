const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

const container = () => {
  return `
  ${tagComponent('header', '헤더부분')}
  ${tagComponent('main', '메인부분')}
  ${tagComponent('footer', '푸터부분')}
  `;
};

//todo-1 날짜 함수 구하기
//todo-2 함수에 적용
//todo-3 12일(오늘)이 아니라면 A방식
//todo-4 12일(오늘)이 맞다면 B방식
