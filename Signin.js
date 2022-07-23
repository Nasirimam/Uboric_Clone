
document.querySelector("#loginbutton").addEventListener("click",userlogin);

let SEmail;
let Spassword;

let x=localStorage.getItem("flag")

let flag=x||false
localStorage.setItem("flag",flag)

function userlogin(){
    let personArr=JSON.parse(localStorage.getItem("custumer"));

    let LEmail=document.querySelector("#EmailID").value 
    let Lpassword=document.querySelector("#pass").value 

    personArr.forEach(function(elem){
        SEmail=elem.email
        Spassword=elem.pass
    });

    console.log(LEmail)
    if (SEmail==LEmail && Spassword==Lpassword){
        alert("Login Successful")
        flag=true
        localStorage.setItem("flag",flag)
    }else{
        alert("Incorrect Login or Password")
        flag=false
        localStorage.setItem("flag",flag)
    }
    
}