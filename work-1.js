const component = () => {
  let obj = {
    name: '정호연',
    age: 27,
    job: '연승이 와이푸~',
  };

  let innerFunc = () => {
    if (obj.age > 20) {
      return '역시 치킨에 맥주!';
    } else {
      return '치킨에 무나 먹어라';
    }
  };

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}<h2>
  `;
};
