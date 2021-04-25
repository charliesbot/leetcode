type Func = (...args: any[]) => any;

const throttle = <T extends Func>(fn: T, delay: number) => {
  let timeout: number;
  return (...args: Parameters<T>) => {
    if (timeout !== undefined) {
      return;
    }

    timeout = setTimeout(() => {
      timeout = undefined;
    }, delay);

    return fn(...args);
  };
};

const throttled = throttle(console.log, 300);

throttled(100, 200);
throttled(200, 300);
throttled(300, 300);

setTimeout(() => {
  throttled(300, 300);
  throttled(100, 200);
  throttled(200, 300);
}, 300);
