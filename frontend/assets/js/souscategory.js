


axios.get('http://localhost:3000/api/souCategory')
.then(function (response) {
    const data = response.data;
    var tbody = document.getElementById("tbody");
    var addDossier = '';
    for (let i = 0; i < data.length; i++) {
    
      console.log(data[i])
      addDossier += '<tr>';
 
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
  function addSousCatgorie() {
    var name = document.getElementById('souscatgoriename').value;
    params = {name: name}
    let res = axios.post('http://localhost:3000/api/souCategory/create', params);
    location.reload();
    }
    

///////// Delete SousCategories ///////
function RemoveSousCategorie(id) {
      axios.delete('http://localhost:3000/api/souCategory/'+id+'');
      location.reload();
    }