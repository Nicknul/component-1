const component = () => {
  let obj = {
    name: '정호연',
    age: 27,
    job: '연승이 와이푸~',
  };

  let innerFunc = () => {};

  return `
  <h1>이름:${obj.name}</h1>
  `;
};
