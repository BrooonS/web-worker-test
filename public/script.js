if (window.Worker) {
  const primeNumberWorker = new Worker("prime-number-worker.js");
  const button = document.querySelector('.j-button');
  const buttonRestart = document.querySelector('.j-button-restart');
  const result = document.querySelector('.j-result');

  button.addEventListener('click', () => {
    primeNumberWorker.postMessage(Number(result.innerHTML));
  });
  buttonRestart.addEventListener('click', () => {
    result.innerHTML = 0;
  });

  primeNumberWorker.onmessage = ({ data }) => {
    result.innerHTML = data;
  };
} else {
  console.log('Your browser doesn\'t support web workers.');
}
