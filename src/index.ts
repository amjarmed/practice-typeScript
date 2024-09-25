const myFun = async () => {
  return "hello world";
}
const myFun2 =  () => {
  return new Promise<string>((resolve, reject) => {
    resolve("hello world");
  })
}

const x = myFun();
const y = myFun2();
