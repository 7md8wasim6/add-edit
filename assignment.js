function addHTMLtableRow() {
  var table = document.getElementById("table"),
    newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    cell5 = newRow.insertCell(4),
    fname = document.getElementById("fname").value,
    price = document.getElementById("price").value,
    origin = document.getElementById("origin").value,
    quantity = document.getElementById("quantity").value,
    Totalprice = document.getElementById("Totalprice").value;

  cell1.innerHTML = fname;
  cell2.innerHTML = price;
  cell3.innerHTML = origin;
  cell4.innerHTML = quantity;
  cell5.innerHTML = Totalprice;
}

function selectedRowToInput() {
  var table = document.getElementById("table"),
    rIndex;

  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      rIndex = this.rowIndex;
      console.log(rIndex);
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("price").value = this.cells[1].innerHTML;
      document.getElementById("origin").value = this.cells[2].innerHTML;
      document.getElementById("quantity").value = this.cells[3].innerHTML;
      document.getElementById("Totalprice").value = this.cells[4].innerHTML;
    };
  }
}

function editHTMLTableselectedRow() {
  table.rows[rIndex].cells[0].innerHTML =
    document.getElementById("fname").value;
  table.rows[rIndex].cells[1].innerHTML =
    document.getElementById("price").value;
  table.rows[rIndex].cells[2].innerHTML =
    document.getElementById("origin").value;
  table.rows[rIndex].cells[3].innerHTML =
    document.getElementById("quantity").value;
  table.rows[rIndex].cells[4].innerHTML =
    document.getElementById("Totalprice").value;
}
