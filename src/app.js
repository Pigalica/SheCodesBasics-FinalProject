function playQuiz() {
  let quantityOfDays = prompt(
    "How many days did it take to seize Kiev based on Russian expectations?"
  );
  let userName = prompt("What is your name?");
  if (
    quantityOfDays == null ||
    quantityOfDays == "" ||
    userName == null ||
    userName == ""
  ) {
    alert("Please, be so kind to answer to both questions");
  } else {
    if (quantityOfDays < 3) {
      alert(
        `${userName}, you overestimated Russian overconfidence, they believed they could do it within 3 days`
      );
    } else {
      if (quantityOfDays == 3) {
        alert(`You are absolutely right, ${userName}, congratulations!`);
      } else {
        alert(
          `${userName}, you underestimated Russian overconfidence, they believed they could do it within 3 days`
        );
      }
    }
  }
}
let findOutInformationButton = document.querySelector("button");
findOutInformationButton.addEventListener("click", playQuiz);
