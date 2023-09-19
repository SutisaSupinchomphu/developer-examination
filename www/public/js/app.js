// api url
let endpoint = 'http://128.199.80.110:3000';

// Defining async function
async function getData() {

    const api_url = endpoint + '/get_item';
    // const api_url  = endpoint;

    //Storing response
    const response = await fetch(api_url);

    // console.log(response); 

    if (response.ok || response.status == 200) {

        // Storing data in form of JSON
        var results = await response.json();
        // console.log(results);

        renderTable(results);

    } else {
        throw new Error("HTTP status " + response.status);
    }
}


// Calling that async function
getData();

// Function to define innerHTML for HTML table
const renderTable = (results) => {

    var list_data = results.data;

    console.log(list_data);

    $("#tbody").empty();

    for (var i = 0; i < list_data.length; i++) {
        var data = list_data[i];


        var html = "<tr id='" + data._id + "' style='cursor: pointer;'>"
            + "<td class='text-center'>" + (i + 1) + "</td>"
            + "<td class='text-center'>" + data.name + "</td>"
            + "<td class='text-center'>" + data.price + "</td>"
            + "<td class='text-center'>" + data.quantity + "</td>"
            + "<td class='text-center'>" + data.description + "</td>"
            + "</tr>";

        $("#tbody").append(html);
    }
}



