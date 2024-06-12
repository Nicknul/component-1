const component = (age, job) => {
  let obj = {
    name: '정호연',
    age: age,
    job: job,
  };

  let innerFunc = () => {
    if (obj.age > 20) {
      return '역시 치킨에 맥주!';
    } else {
      return '치킨에 무나 먹어라';
    }
  };

  let anotherFunc = () => {
    if (obj.job === '미남') {
      return '제대로 작성해라';
    } else {
      return '잘 작성했네';
    }
  };
  return `
  <div>${obj.name}</div>
  <div>${innerFunc()}</div>
  <div>${anotherFunc()}</div> 
  `;
};

console.log(component());
