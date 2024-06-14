var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var demo = document.getElementById("demo");
console.log(localStorage.getItem("productList"));
let productList = [];

if (localStorage.getItem("productList") !== null) {
  productList = JSON.parse(localStorage.getItem("productList"));
  displayProducts(productList);
}

function addProduct() {
  console.log(productList);

  var product = {
    name: productName.value,
    price: productPrice.value,
    desc: productDesc.value,
    category: productDesc.value,
  };

  productList.push(product);
  displayProducts(productList);
  localStorage.setItem("productList", JSON.stringify(productList));
  clear();
  console.log(productList);
}

function displayProducts(list) {
  let productRows = ``;
  for (let i = 0; i < list.length; i++) {
    productRows += `<tr>
        <td>${i + 1}</td>
        <td>${list[i].newName?list[i].newName:list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].desc}</td>
        <td><button class="btn btn-warning btn-sm">Update</button></td>
        <td><button  onclick="deleteProduct(${i})" class="btn btn-danger btn-sm">Delete</button></td>
      </tr>`;
  }

  demo.innerHTML = productRows;
}

function clear() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDesc.value = "";
}

//------------- delete product ----------//
function deleteProduct(index) {
  productList.splice(index, 1);
  console.log(productList);
  displayProducts(productList);
  localStorage.setItem("productList", JSON.stringify(productList));
}

//------------- search ----------//
function searchByName(value) {
  let foundedProduct = [];
  for (let i = 0; i < productList.length; i++) {
    if (productList[i].name.toLowerCase().includes(value.toLowerCase())) {
      productList[i].newName=productList[i].name;
      productList[i].newName.replace(value,`<span class="text-danger">${value}</span>`)
      foundedProduct.push(productList[i]);
    }
  }
  displayProducts(foundedProduct);
}

console.log(productList[0].name.includes(""));