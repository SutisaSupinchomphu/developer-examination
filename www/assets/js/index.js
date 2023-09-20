$("#tableID").on('click', '.button_edit', function () {
    
    // get the current row
    const currentRow = $(this).closest("tr");

    //  var id=currentRow.find("td:eq(0)").text(); // get current row 1st TD value
    const id = this.id;
    const name = currentRow.find("td:eq(1)").text().trim(); // get current row 2nd TD
    const price = currentRow.find("td:eq(2)").text().trim(); // get current row 3rd TD
    const quantity = currentRow.find("td:eq(3)").text().trim(); // get current row 3rd TD
    const description = currentRow.find("td:eq(4)").text().trim(); // get current row 3rd TD        

    console.log(price);

    $('#form_edit_item').modal('show');

    document.getElementById('product-id').value = id;
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-price').value = price;
    document.getElementById('edit-quantity').value = quantity;
    document.getElementById('edit-description').value = description;
});


