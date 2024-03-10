var typed = new Typed('#typed', {
  strings: ['Sagar Rawat',],
  typeSpeed: 50,
  loop: true
});
var typed = new Typed('#typedd', {
  strings: ['eCommerce Expert'],
  typeSpeed: 50,
  loop: true
});

// document.getElementById("testing1").style.color="red";
// document.getElementsByClassName("testing0").style.color="red";
document.getElementById("right-btn").addEventListener("click",function(){
  document.querySelector(".feedback").scrollBy({
    left:100,
    behavior:"smooth"
  })
})
document.getElementById("left-btn").addEventListener("click",function(){
  document.querySelector(".feedback").scrollBy({
    left: -100,
    behavior: "smooth"
  })
})
function validateForm() {
  // console.log("submitted");
var name  = document.getElementById("name").value;
//var email = document.getElementById("email").value;
var password1 = document.getElementById("password1").value;
var passowrd2 = document.getElementById("password2").value;

  if(name.length == 0) {
  document.getElementById("name-error").innerHTML = "Name  is required";
  return false;
  }else{
    document.getElementById("name-error").innerHTML = "";
  }
  if(password1.length == 0){
  document.getElementById("password1-error").innerHTML = "Password is required";
  return false;
}else{
  document.getElementById("password1-error").innerHTML = ""
}
if(password1.length<8){
  document.getElementById("password1-error").innerHTML = "password must be at least 8 characters"
  return false;
}else{
  document.getElementById(password1-error).innerHTML = ""
}
if(passowrd2.length == 0){
  document.getElementById("password2-error").innerHTML = "Password is required"
  return false;
}else{
  document.getElementById("password2-error").innerHTML = ""
}
  if(password1 != passowrd2)
  document.getElementById("password2-error").innerHTML = "Password do not match"
return false;
}


