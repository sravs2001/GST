const name=document.getElementById("name");
const number=document.getElementById("num");
const email=document.getElementById("email");
const fish=document.getElementById("fish")
const ice=document.getElementById("ice")
const cheese=document.getElementById("cheese")
const chicken=document.getElementById("chicken")
const gst=document.getElementById("gst")
const btn=document.getElementById("btn")

btn.addEventListener("click",(e)=>{
    const userVal=name.value;
    const numVal=number.value;
    const emailVal=email.value;
   const gstVal=gst.value;
    e.preventDefault();
    if(userVal==""){
        alert("Please provide the name")
        name.focus();
        return false;
    }
    if(!isNaN(userVal)==true){
        alert("please provide the valid details")
        name.focus();
        return false;
    }
    if(emailVal==""){
      alert("please provide the email")
      email.focus();
      return false
    }
   
    if(numVal==""){
        alert("Please provide the name")
        number.focus();
        return false;
    }
    if(isNaN(numVal)==true || numVal.length>10||numVal<10){
        alert("please provide the valid details")
        number.focus();
        return false;
    }

    const fishVal=fish.value;
    const cheeseVal=cheese.value;
    const chickenVal=chicken.value;

    let total=parseInt(fishVal)+parseInt(cheeseVal)+parseInt(chickenVal)

    let gst1=total*(gstVal/100)     
    let sum=total+gst1;
    let tip=0;
   if(sum<18000){
      tip=sum+1000
   }
   else{
    tip=sum+500
   }
   let container=document.getElementById("container");

  container.classList.add("add");
  container.innerHTML=`Name:${userVal}<br>Phone Number:${numVal}<br>Email:${emailVal}<br>Total:${total}<br>Total including gst ${sum}`
  let cont=document.getElementById("cont");
  cont.classList.add("remove");

  cont.innerHTML=`with  tip:${tip} <br>Note:If total bill less than 18000 the tip 1000 will included`
})

function navSlide(){
    const nav=document.querySelector(".Navabar")
    const menu=document.querySelector(".Nav-links")
    const burger=document.querySelector(".burger")

    burger.addEventListener("click",()=>{
        menu.classList.toggle("nav-active")
    })
}
navSlide()