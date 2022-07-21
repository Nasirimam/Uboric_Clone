document.querySelector("#signupbut").addEventListener("click",adddetails);

function adddetails(){
    let personArr=[];

    let Email=document.querySelector("#Email").value ;
    let Password=document.querySelector("#password").value ;

    if (Email==""||Password==""){
        document.querySelector("#signupbut").disabled=false
        alert("Fill all Inputs")
    }else{
        document.querySelector("#signupbut").disabled=true
        alert("SignUp Complete")
    }

    let personObj={
        email:Email,
        pass:Password
    }
    personArr.push(personObj)
    localStorage.setItem("custumer",JSON.stringify(personArr));
}