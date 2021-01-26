// animation on scroll//
AOS.init({
    duration: 1200,
  });
  // form validation//
  let name= document.querySelector("#t-name");
  let email= document.querySelector("#t-email");
  let number= document.querySelector("#t-number");
  let message= document.querySelector("#t-message");
  function validation(){
    if(name.value=="" || email.value=="" || number.value=="" || number.value==""){
      alert("please fill the required details to contact us")


    }
}
function sent(){
    let name= document.querySelector("#t-name");
    let email= document.querySelector("#t-email");
    let number= document.querySelector("#t-number");
    let message= document.querySelector("#t-message");
    if(name.value|| email.value|| number.value|| number.value){
     let n=name.value;
        alert("thank you " + n + " for contacting us,we will get back to you")
        


    }
  }

