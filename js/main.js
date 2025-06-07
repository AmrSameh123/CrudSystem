var productName= document.getElementById('productName');
var productPrice= document.getElementById('productPrice');
var productType= document.getElementById('productType');
var productDes= document.getElementById('productDes');
var addProduct= document.getElementById('addProduct');
var deleteProduct=document.getElementById('deleteProduct');
var editProduct= document.getElementById('editProduct');
var tableBody= document.getElementById('tableBody');
var search= document.getElementById('search');

var productList=[]
var productList = JSON.parse(localStorage.getItem('products'));
if(localStorage.getItem('products')!=null){
  productList=JSON.parse(localStorage.getItem('products'))
  display()
}
var mood="create"
var change;




function add(){
if(validationName() && validationPrice() && validationType() && validationDes()){
var product={
    name : productName.value,
    price: productPrice.value,
    type:productType.value,
    des:productDes.value
}
}

if(mood==="create"){
productList.push(product);
display()
}
else{
    productList[change]=product;
    mood="create"
    addProduct.innerHTML="Add Product"
}
localStorage.setItem('products', JSON.stringify(productList));
}




function display(){
    var cartona=''

    for(var i=0;i<productList.length;i++){
        cartona+=` <tr>
            <td>${i+1}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].type}</td>
            <td>${productList[i].des}</td>
            <td>
                <button class="btn btn-danger" onclick="drop(${i})" id="deleteProduct">Delete</button>
                <button class="btn btn-warning" onclick="edit(${i})"  id="editProduct">Edit</button>
            </td>
        </tr>`
    }
tableBody.innerHTML=cartona;
}


function drop(i){
productList.splice(i,1);
localStorage.setItem("products", JSON.stringify(productList));
display()
}



function edit(index){
 productName.value=productList[index].name
 productPrice.value=productList[index].price
 productType.value=productList[index].type
 productDes.value=productList[index].des
 display()
 addProduct.innerHTML="Update"
 mood="update"
 change=index;
}

function productSearch(){
    var text=search.value.toLowerCase();
    cartona=''
    for(var i=0;i<productList.length;i++){
        if(productList[i].name.toLowerCase().includes(text)){
cartona+=`<tr>
            <td>${i+1}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].type}</td>
            <td>${productList[i].des}</td>
            <td>
                <button class="btn btn-danger" onclick="drop(${i})" id="deleteProduct">Delete</button>
                <button class="btn btn-warning" onclick="edit(${i})"  id="editProduct">Edit</button>
            </td>
        </tr>`
        }
    }
    tableBody.innerHTML=cartona;
}

function validationName(){
    var regex= /^[A-Z][a-z]{3,8}$/
    var text=productName.value
    var result=regex.test(text);
    if(result){
        nameError.classList.add('d-none');
        productName.classList.add('is-valid');
        productName.classList.remove('is-invalid');
        return true;
    }
    else{
         nameError.classList.remove('d-none');
        productName.classList.add('is-invalid');
        productName.classList.remove('is-valid');
        return false;
    }
}


function validationPrice(){
    var regex= /^(10000|[1-9][0-9]{3})$/
    var number=productPrice.value
    var result=regex.test(number);
    if(result){
        priceError.classList.add('d-none');
        productPrice.classList.add('is-valid');
        productPrice.classList.remove('is-invalid');
        return true;
    }
    else{
         priceError.classList.remove('d-none');
        productPrice.classList.add('is-invalid');
        productPrice.classList.remove('is-valid');
        return false;
    }
}

function validationType(){
    var regex= /(Mobile|Screen|Watch)/
    var category=productType.value
    var result=regex.test(category);
    if(result){
        typeError.classList.add('d-none');
        productType.classList.add('is-valid');
        productType.classList.remove('is-invalid');
        return true;
    }
    else{
         typeError.classList.remove('d-none');
        productType.classList.add('is-invalid');
        productType.classList.remove('is-valid');
        return false;
    }
}
function validationDes(){
    var regex= /^.{3,500}$/
    var des=productDes.value
    var result=regex.test(des);
    if(result){
        desError.classList.add('d-none');
        productDes.classList.add('is-valid');
        productDes.classList.remove('is-invalid');
        return true;
    }
    else{
        desError.classList.remove('d-none');
        productDes.classList.add('is-invalid');
        productDes.classList.remove('is-valid');
        return false;
    }
}















