const findNextPrimeNumber = (num = 2) => {
  if (num < 1) {
    return 2;
  }

  for (let i = num + 1;; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      return i;
    }
  }
};

onmessage = ({ data }) => {
  postMessage(findNextPrimeNumber(data));
};
