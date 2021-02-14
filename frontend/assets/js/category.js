async function getcate() {
    try {
        const response = await axios.get('http://localhost:3000/api/category');
       

        var row = "";
        //<div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-2" data-category="${response.data.products[i].category.name}" data-souCategory="${response.data.products[i].souCategory.name}">
        for (let i = 0; i < response.data.categories.length; i++) {
            row = 
    `  
  <tr>
 <td>
 <img style="width :  45px;" src="assets/img/A.jfif">
 </td>
    
    <td>${response.data.categories[i].name}</td>
    
  
  <td> <button  id="btndel"  type="button" class="btn btn-danger" onclick= "RemoveCategorie('${response.data.categories[i]._id}')" > Delete </button></td>
  </tr>
    `
            
            document.getElementById("tbodycate").innerHTML += row;
        }

{/* <td>{response.data.categories[6].souCategory.name}</td> */}

    } catch (error) {
        console.error(error);
    }
}
getcate();

/////// Add SousCategories ////////
async function addCate() {
    var name = document.getElementById('catename').value;
   
    params =   {name: name}
    let res =  await axios.post('http://localhost:3000/api/category/create', params);
    location.reload();
    }
///////// Delete SousCategories ///////
 async function RemoveCategorie(id) {
  await  axios.delete('http://localhost:3000/api/category/'+id+'');
    location.reload();
  }
  