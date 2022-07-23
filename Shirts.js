
let mensData = [
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/07/josh-f-28th-march-201980910_jpg-400x400.jpg",},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/07/il_794xN.3044855723_fxqv_jpg-400x532.jpg"},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-15-at-11.56.11-AM-1-400x600.jpeg"},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-15-at-11.56.48-AM-400x400.jpeg"},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/07/JUNE-30182_1800x1800_jpg-400x600.jpg"},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/07/Snitch_March22_3499_1800x1800_jpg-400x600.jpg"},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/07/SNITCH-JUNE1492_1800x1800_jpg-400x600.jpg"},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/07/Snitch_March22_3462_1800x1800_jpg-400x600.jpg"},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-15-at-11.56.47-AM1-400x398.jpeg"},
    {imgurl:"https://www.uboric.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-15-at-11.56.47-AM-400x619.jpeg"},
];

let flag=localStorage.getItem("flag");

displayTable(mensData)



function displayTable(mensData){
  document.querySelector("#Shirt").innerHTML="";
mensData.forEach(function (elem,index){
  let box = document.createElement("div");
  let dis=document.createElement("div")
  let Image = document.createElement("img");
  let Name = document.createElement("p");
  let Price = document.createElement("h3");
  let btn = document.createElement("button")


  Image.src=elem.imgurl
  dis.innerText="-34%"
  Name.innerText="Men shirt magic cotton with digital..."
  Price.innerText="₹799.00"
  btn.innerText="Add to Cart"
  btn.addEventListener("click",function(){
    addtoCart(elem,index)
  });


  box.append(dis);
  box.append(Image);
  box.append(Name);
  box.append(Price)
  box.append(btn);
  document.querySelector("#Shirt").append(box);
});
}

let mensCart=JSON.parse(localStorage.getItem("mensCart"))||[];

function addtoCart(elem,index){
  event.preventDefault();
      let itemobj={
        Image:elem.imgurl,
      }
      mensCart.push(itemobj) 
      localStorage.setItem("mensCart",JSON.stringify(mensCart))
      alert("Added To Cart")
}



