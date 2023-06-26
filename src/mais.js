const yure = document.querySelector(".yure");
const bruna = document.querySelector(".bruna");
const prev = document.querySelectorAll(".prev__button");
const next = document.querySelectorAll(".next__button");

yure.classList.add("hide");

const slideChange = function() {
  if(yure.classList.contains("hide")){
    yure.classList.remove("hide");
    bruna.classList.add("hide");
  }else if(bruna.classList.contains("hide")){
    bruna.classList.remove("hide");
    yure.classList.add("hide");
  } else{
    yure.classList.add("hide");
  }
}

prev.forEach((item) => item.addEventListener("click", slideChange));
next.forEach((item) => item.addEventListener("click", slideChange));