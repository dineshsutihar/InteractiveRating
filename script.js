document.addEventListener('DOMContentLoaded', function () {
    var numbers = document.querySelectorAll("li");
    var OutputRating = document.querySelector("#outputRating");
    var button = document.querySelector("button");
    var content1 = document.querySelector("#container1");
    var content2 = document.querySelector("#container2");

  
    numbers.forEach((li, index) => {
      li.addEventListener('click', () => {
        resetNumbers();
        OutputRating.textContent = index + 1;
        li.classList.add('clicked');
      });
    });
    function resetNumbers() {
        numbers.forEach(li => li.classList.remove('clicked'));
      }


  
    button.addEventListener("click", function () {
      content1.style.display = "none";
      // removing the display none from container 2
      content2.style.display = "block";
    });
  });
  