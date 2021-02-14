const url3 = "http://localhost:3000/api/product";

async function getdata() {
  await axios
    .get(url3)
    .then(function (response) {
      
      for (let i = 0; i < response.data.products.length; i++) {

        var option = `
        <tr>
        <td style="width : 87px;"><img src="http://localhost:3000/api/product/photo/${response.data.products[i]._id}" class="card-img-top" alt="..."></td>
        <td>${response.data.products[i].name}</td>
        <td>${response.data.products[i].description}</td>
       <td> ${response.data.products[i].price}</td>
       <td> ${response.data.products[i].category.name}</td>
      <td> <button  id="btndel" style=" background:green; color:#fff;"  type="button" class="btn btn"onclick="Print('${response.data.products[i].name}', '${response.data.products[i].description}' ,'${response.data.products[i].price}')" > Print </button></td>
      </tr>
              `;
        document.getElementById("tbodyPrint").innerHTML += option;

      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
getdata();


function Print(name , price ,description) {
    const doc = new jsPDF();
    doc.text( "information" + "\n" + name + "\n" + price +"\n" + description  , 9, 9);
    doc.save("impréssion du ticket.pdf");
}


