function sellProduct() {
  let productName = document.getElementById("productName").value;
  let quantity = Number(document.getElementById("quantity").value);
  let unitPrice = Number(document.getElementById("unitPrice").value);
  let discount = Number(document.getElementById("discount").value);

  if (productName === "" || quantity <= 0 || unitPrice <= 0) {
    alert("Please enter valid product information!");
    return;
  }

  let subtotal = quantity * unitPrice * (1 - discount / 100);

  let table = document.getElementById("productTable");

  let id = table.rows.length + 1;

  let row = table.insertRow();

  row.insertCell(0).innerHTML = id;
  row.insertCell(1).innerHTML = productName;
  row.insertCell(2).innerHTML = quantity;
  row.insertCell(3).innerHTML = "$" + unitPrice;
  row.insertCell(4).innerHTML = discount;
  row.insertCell(5).innerHTML = "$" + subtotal;

  cancelForm();
}

function cancelForm() {
  document.getElementById("productName").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("unitPrice").value = "";
  document.getElementById("discount").value = "";
}
