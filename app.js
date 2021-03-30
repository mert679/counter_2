let count = 0;
// select value and buttons
const board = document.querySelector(".board");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
        board.style.color = "green";
    }
    if (count < 0) {
        board.style.color = "red";
    }
    if (count === 0) {
        board.style.color = "#222";
    }
    board.textContent = count;
  });
});
