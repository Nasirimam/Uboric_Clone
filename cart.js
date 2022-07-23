
mensCart=JSON.parse(localStorage.getItem("mensCart"))||[];

let count=0;

displayTable(mensCart)

function displayTable(mensCart){
    document.querySelector("tbody").innerHTML=""
    mensCart.forEach(function(elem,index){
        let row=document.createElement("tr")
        let col1=document.createElement("td")
        let img1=document.createElement("img")
        img1.src="https://toppng.com/uploads/preview/cross-false-x-red-round-icon-11642064105eaixa6s5j1.png"
        img1.addEventListener("click",function(){
            Deletefromcart(elem,index)
        });
        let img2=document.createElement("img")
        img2.src=elem.Image
        let Name=document.createElement("span")
        Name.innerText="Men shirt magic cotton with digital print in multi color in black"
        let col2=document.createElement("td")
        col2.innerText="799.00"
        let col3=document.createElement("td")
        let input=document.createElement("input")
        input.setAttribute('type', 'number');
        input.setAttribute('placeholder','1')
        let col4=document.createElement("td")
        col4.innerText="799"
    
    
        document.querySelector("tbody").append(row)
        row.append(col1,col2,col3,col4)
        col1.append(img1,img2,Name)
        col3.append(input)
        count=index+1
    });
}


function Deletefromcart(elem,index){
    mensCart.splice(index,1)
    displayTable(mensCart)
    localStorage.setItem("mensCart",JSON.stringify(mensCart));
    window.location.reload();
}



document.getElementById("count").innerText=count
document.getElementById("totalprice").innerText=count*799||0

