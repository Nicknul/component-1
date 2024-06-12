class BasicData {
  constructor() {
    this.name = '';
    this.age = 0;
    this.job = '';
  }
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }
  set age(value) {
    this._age = value;
  }
  get age() {
    return this._age;
  }
  set job(value) {
    this._job = value;
  }
  get job() {
    return this._job;
  }
}
// * 일반 함수와의 차이:틀을 만들어 호출만 하면 여러개를 찍을 수 있음
const component = (name, age, job) => {
  let obj = new BasicData();
  obj.name = name;
  obj.age = age;
  obj.job = job;
  const decision = () => {
    let check = obj instanceof BasicData;
    if (check === true) {
      return `<html>
  <div>이름:${name}</div>
  <div>나이:${age}</div>
  <div>직업:${job}</div>
<html>`;
    } else {
      throw Error;
    }
  };
  return decision();
};
console.log(component('정호연', 27, '백수'));
