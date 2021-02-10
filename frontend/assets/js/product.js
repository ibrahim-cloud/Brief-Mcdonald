// axios.get('http://localhost:3000/api/product')
// .then(function (response) {
//     const data = response.data;
//     var tbody = document.getElementById("tbodyproduct");
//     var addDossier = '';
//     for (let i = 0; i < data.products.length; i++) {
    
//       console.log(data.products[i]._id)
//       addDossier += '<tr>';
 
//       addDossier += '<td>';
//       addDossier += "<p style='font-size:15px'>  " +data.products[i].name +"</p>";
//       addDossier += "</td>";
//       addDossier += '<td>';
//      addDossier +=  `  <button  id="btndel"  type="button" class="btn btn-danger" onclick= "RemoveSousCategorie('${data.products[i]._id}')" > Delete </button>`
//       addDossier += "</td>"; 
     
//       addDossier += '<td>';
//       addDossier +=  `   <img src="http://localhost:3000/api/product/photo/$%7Bresponse.data.products[i]._id" class="card-img-top" alt="..."></img> `
//        addDossier += "</td>"; 
// }
//     tbody.innerHTML = addDossier;
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

async function getProduct() {
    try {
        const response = await axios.get('http://localhost:3000/api/product');
        console.log(response.data.products[0].name);
        console.log(response.data);

        var row = "";
        //<div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-2" data-category="${response.data.products[i].category.name}" data-souCategory="${response.data.products[i].souCategory.name}">
        for (let i = 0; i < response.data.products.length; i++) {
            row = 
    `  
  <tr>
    <td style="width : 87px;"><img src="http://localhost:3000/api/product/photo/${response.data.products[i]._id}" class="card-img-top" alt="..."></td>
    <td>${response.data.products[i].name}</td>
    <td>${response.data.products[i].description}</td>
   <td> ${response.data.products[i].price}</td>
   <td> ${response.data.products[i].category.name}</td>
  <td> <button  id="btndel"  type="button" class="btn btn-danger" onclick= "RemoveProduct('${response.data.products[i]._id}')" > Delete </button></td>
  </tr>
    `
            
            document.getElementById("tbodyproduct").innerHTML += row;
        }



    } catch (error) {
        console.error(error);
    }
}
getProduct();
///// Add Product ////////
function addProduct() {
    var name = document.getElementById('productname').value;
    var des = document.getElementById('productdes').value;
    var price = document.getElementById('productprice').value;
    // var cateId = document.getElementById('productcateId').value;
    var img  = document.getElementById('productImg').value;
    // var soucateId  = document.getElementById('soucateId').value;
    
    params =  {products:[{    name: name,
        description: des ,
        price : price,
        category : cateId,
        photo:img ,
        souCategory:soucateId}]} 
    let res = axios.post('http://localhost:3000/api/product/create', params);
    console.log(cateId  +soucateId)
   
    }

///////// Delete Product ///////
function RemoveProduct(id) {
    axios.delete('http://localhost:3000/api/product/'+id+'');
    location.reload();
  }
