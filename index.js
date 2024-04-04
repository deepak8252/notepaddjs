const createbtn=document.getElementById("create");
const container=document.querySelector(".container");
let username=document.getElementById("username");
const uservalue=prompt("enter your name");
username.innerHTML=uservalue
createbtn.addEventListener("click",()=>{
    let newele=document.createElement("div");
    newele.classList.add("content");
  container.appendChild(newele);
  const para=document.createElement("p");
  para.contentEditable="true";
  newele.appendChild(para);
  newele.style.color="white";
  para.style.padding="10px"
  const closebtn=document.createElement("button");
  closebtn.innerHTML="close";
  closebtn.classList.add("abs")
  newele.appendChild(closebtn);
  closebtn.addEventListener("click",()=>{
    closebtn.parentElement.remove();

  })
  
})