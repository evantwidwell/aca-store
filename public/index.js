//stuff
//more stuff
'use strict'
let arrayOfBreweries 
let arrayOfPosts
console.log("working!")

const getProducts = ()  =>{
  fetch('https://my-json-server.typicode.com/jubs16/Products/Products')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
    console.log(arrayOfPosts)
}
const button = document.getElementById("clickButton")
clickButton.addEventListener('click', function(){
  console.log("Clicked")
  getProducts()
  console.log(arrayOfPosts)
  for(let i =0; i < arrayOfPosts.length; i++){
    console.log(arrayOfPosts[i].name)
      let li = document.createElement("li")
      let img = document.createElement("img")
      img.src = arrayOfPosts[i].imgUrl
      img.height = '200'
      console.log(arrayOfPosts[i].imgURL)
      li.innerHTML = `${arrayOfPosts[i].name} costs $${arrayOfPosts[i].price} and looks like : `
      let ul = document.getElementById("productList")
      li.appendChild(img)
      ul.appendChild(li)
  }
})


