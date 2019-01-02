// 定时器实现，缺点：当停止后最后还会调用一次，不好
function throttle(method, wait) {
  let timeout = null;
  return function() {
    if (!timeout) {
      timeout = setTimeout(() => {
        method.apply(this, arguments);
        timeout = null;
      }, wait);
    }
  };
}
// 时间戳实现
function throttle1(method, wait) {
  let prev = new Date().getTime();
  return function() {
    const now = new Date().getTime();
    if (now - prev >= wait) {
      method.apply(this, arguments);
      prev = new Date().getTime();
    }
  };
}
