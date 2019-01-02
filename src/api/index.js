export function getUser() {
  return new Promise((res, rej) => {
    console.log('我被调用了');
    setTimeout(() => {
      res({
        data: [1, 2, 3]
      });
    }, 2000);
  });
}
