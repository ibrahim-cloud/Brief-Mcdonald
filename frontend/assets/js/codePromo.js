


async function getProduct() {
    try {
        const response = await axios.get('http://localhost:3000/api/code');
        console.log(response.data.codepromo);
        console.log(response.data);

        var row = "";
        //<div class="col-12 col-md-4 col-lg-4 col-xl-3 mb-2" data-category="${response.data.products[i].category.name}" data-souCategory="${response.data.products[i].souCategory.name}">
        for (let i = 0; i < response.data.length; i++) {
            row = 
    `  
  <tr> <td>  '<img style="width : 70px;" src="./assets/mc-codepromo-logo.svg" alt="">'</td>
    <td>${response.data[i].code}</td>
    <td>${response.data[i].gift}</td>
    
  

    

  <td> <button  id="btndel"  type="button" class="btn btn-danger" onclick= "RemoveProduct('${response.data[i]._id}')" > Delete </button></td>
  </tr>
    `
            
            document.getElementById("tbodycode").innerHTML += row;
        }



    } catch (error) {
        console.error(error);
    }
}
getProduct();

// /////// Add code ////////
  function addcode() {
    var name = document.getElementById('Numbercode').value;
    var gifts = document.getElementById('giftcode').value;
    params = {code: name , gift:gifts}
    let res = axios.post('http://localhost:3000/api/code/create', params);
    location.reload();
    }
    

// ///////// Delete code ///////
function Removecode(id) {
      axios.delete('http://localhost:3000/api/table/'+id+'');
      location.reload();
    }