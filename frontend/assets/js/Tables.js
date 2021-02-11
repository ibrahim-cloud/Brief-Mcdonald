


axios.get('http://localhost:3000/api/table')
.then(function (response) {
    const data = response.data;
    var tbody = document.getElementById("tbodytables");
    var addDossier = '';
    for (let i = 0; i < data.length; i++) {
    
      console.log(data[i])
      addDossier += '<tr>';
      addDossier += '<td>';
      addDossier +=  '<img style="width : 70px;" src="./assets/téléchargé.jfif" alt="">'

      addDossier += "</td>";
      addDossier += '<td>';
      addDossier += data[i].tablenumber 
      addDossier += "</td>";
      addDossier += '<td>';
      addDossier +=  data[i].disponible ;
      addDossier += "</td>";
      addDossier += '<td>';
     addDossier +=  `  <button  id="btndel"  type="button" class="btn btn-danger" onclick= "RemoveTable('${data[i]._id}')" > Delete </button>`
      addDossier += "</td>";  
}
    tbody.innerHTML = addDossier;
  })
  .catch(function (err) {
    console.log(err);
  });

// /////// Add Tables ////////
  function addTables() {
    var name = document.getElementById('NumberTables').value;
    params = {tablenumber: name}
    let res = axios.post('http://localhost:3000/api/table/create', params);
    location.reload();
    }
    

// ///////// Delete SousCategories ///////
function RemoveTable(id) {
      axios.delete('http://localhost:3000/api/table/'+id+'');
      location.reload();
    }