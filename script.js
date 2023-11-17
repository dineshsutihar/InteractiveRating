var numbers=document.querySelectorAll("li");
var OutputRating=document.querySelector("spam");
var buttom=document.querySelector("buttom");
var content1=document.querySelector("#container1")
var content2=document.querySelector("#container2")



numbers.forEach((number, index) => {
    number.addEventListener('click', () => {
      resetNumbers();
      setActiveNumbers(index + 1);
      OutputRating.textContent = index + 1;
    });
});



buttom.addEventListener("click",function(){
    content1.style.display="none";
    // removing the display none from container 2
    content2.style.display="block";


})