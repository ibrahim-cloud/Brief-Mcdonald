


axios.get('http://localhost:3000/api/souCategory')
.then(function (response) {
    const data = response.data;
    var tbody = document.getElementById("tbody");
    var addDossier = '';
    for (let i = 0; i < data.length; i++) {
    
      console.log(data[i])
      addDossier += '<tr>';
      addDossier += '<td>';
      addDossier += '<img style="width :  45px;" src="assets/img/A.jfif">';
      addDossier += "</td>";
      
      addDossier += '<td>';
      addDossier += "<p style='font-size:15px'>  " +data[i].name +"</p>";
      addDossier += "</td>";
      addDossier += '<td>';
     addDossier +=  `  <button  id="btndel"  type="button" class="btn btn-danger" onclick= "RemoveSousCategorie('${data[i]._id}')" > Delete </button>`
      addDossier += "</td>";  
}
    tbody.innerHTML = addDossier;
  })
  .catch(function (err) {
    console.log(err);
  });

/////// Add SousCategories ////////
 async function addSousCatgorie() {
    var name = document.getElementById('souscatgoriename').value;
    var cateId = document.getElementById('pet-select231').value;
    params = {name: name ,category : cateId   } 
    let res = await axios.post('http://localhost:3000/api/souCategory/create', params);
    location.reload();
    }
    

///////// Delete SousCategories ///////
async function RemoveSousCategorie(id) {
     await axios.delete('http://localhost:3000/api/souCategory/'+id+'');
      location.reload();
    }
    async function getScate() {
      //////// get value cate //////
    
      try {
        const response2 = await   axios.get('http://localhost:3000/api/category');
       
       
        var addDossier = '';
       
        
          
        
         for (let i = 0; i < response2.data.categories.length; i++) {console.log(response2.data.categories[i].name)
          var addDossier=  `<option id="productcateId" value="` +response2.data.categories[i]._id +`">` +response2.data.categories[i].name +`</option>`
           
         
         document.getElementById("pet-select231").innerHTML += addDossier;
        }
       
         
    
        
    }
    catch (error) {
      console.error(error);
    }
    }
    getScate();

    