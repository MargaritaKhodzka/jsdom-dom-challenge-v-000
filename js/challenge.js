document.addEventListener("DOMContentLoaded", () => {

  let minusButton = document.getElementById('minus');
  let plusButton = document.getElementById('plus');
  let timer = document.getElementById('counter');

  minusButton.addEventListener('click', function () {
    console.log('minus button is clicked');
    timer.innerText = parseInt(timer.innerText) - 1;
  });

  plusButton.addEventListener('click', function () {
    console.log('plus button is clicked');
    timer.innerText = parseInt(timer.innerText) + 1;
  });
});
