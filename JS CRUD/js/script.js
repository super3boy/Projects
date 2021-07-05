var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productdesc = document.getElementById("productdesc");
var productsContainer =[];
var mainBtn

if ((localStorage.getItem("myProducts")) == null) {
    productsContainer = []
}
else{
    productsContainer = JSON.parse(localStorage.getItem("myProducts"));
    displayProduct();
}


function addProduct() {
    var product = {

        name: productName.value,
        price: productPrice.value,
        category: productCategory.value,
        desc: productdesc.value,
    }
    productsContainer.push(product)
    localStorage.setItem("myProducts", JSON.stringify(productsContainer));
    clearProduct();
    displayProduct();

}
function clearProduct() {
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productdesc.value = "";
}

function displayProduct() {
    var cartoona = ``;

    for (var i = 0; i < productsContainer.length; i++) {

        cartoona += `<tr>
            <td>`+ (i + 1) + `</td>
             <td>`+ productsContainer[i].name + `</td>
             <td>`+ productsContainer[i].price + `</td>
             <td>`+ productsContainer[i].category + `</td>
             <td>`+ productsContainer[i].desc + `</td>
             <td><button class="btn btn-outline-warning"onclick="editData(`+ i +`)">Update <i class="far fa-edit"></i></button></td>
             <td><button class="btn btn-outline-danger" onclick="deleteProducts(`+ i +`)">Delete <i class="far fa-trash-alt"></i></button></td>
         </tr>`
    }

    document.getElementById("tableBody").innerHTML = cartoona;

}

function deleteProducts(index) {
    productsContainer.splice(index, 1);
    localStorage.setItem("myProducts", JSON.stringify(productsContainer));
    displayProduct();
}
function searchProduct (serchInput){
    var  serchData =``;
    for(var i=1; i<productsContainer.length; i++){
        if (productsContainer[i].name.includes(serchInput) == true ){
            serchData += `<tr>
            <td>`+ (i + 1) + `</td>
             <td>`+ productsContainer[i].name + `</td>
             <td>`+ productsContainer[i].price + `</td>
             <td>`+ productsContainer[i].category + `</td>
             <td>`+ productsContainer[i].desc + `</td>
             <td><button class="btn btn-outline-warning"onclick="editData(`+ i + `)">Update</button></td>
             <td><button class="btn btn-outline-danger" onclick="deleteProducts(`+ i + `)">Delete</button></td>
         </tr>`
        }
        // else{
        //     document.getElementById("notFound").innerHTML = `<p class="m-auto w-75 text-center text-danger font-weight-bold pb-5">Sorry we couldn't find anything 😥</p>`;
        // }
    }
    document.getElementById("tableBody").innerHTML = serchData;
}
function editData(prInd)
{

    productName.value = productsContainer[prInd].name;
    productPrice.value = productsContainer[prInd].price;
    productCategory.value = productsContainer[prInd].category;
    productdesc.value = productsContainer[prInd].desc;
    document.getElementById("mainBtn").innerHTML = "Update"
}