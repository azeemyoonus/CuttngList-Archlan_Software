function addNewItem(row) {
    // alert("Calling"); 

    var tableBody = document.getElementById("itemTableBody");
    // console.log(tableBody.rows[-1].cols[2].innerHTML);
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = tableBody.insertRow(-1);

    
    var sl = row.insertCell(0);
    sl.innerHTML = "NEW CELL1";

    var itemCell = row.insertCell(1);  
    itemCell.innerHTML = "Item";

    var thickCell = row.insertCell(2);  
    thickCell.innerHTML = "thickness";

    var thickCell = row.insertCell(2);  
    thickCell.innerHTML = "thickness";

    var thickCell = row.insertCell(2);  
    thickCell.innerHTML = "thickness";

    var thickCell = row.insertCell(2);  
    thickCell.innerHTML = "thickness";

    var thickCell = row.insertCell(2);  
    thickCell.innerHTML = "thickness";


    // $("#itemTable").each(function () {
    //     var tds = '<tr>';
    //     jQuery.each($('tr:last td', this), function () {
    //         tds += '<td>' + $(this).html() + '</td>';
    //     });
    //     tds += '</tr>';
    //     if ($('tbody', this).length > 0) {
    //         $('tbody', this).append(tds);
    //     } else {
    //         $(this).append(tds);
    //     }
    // });

}

function editItem(srow) {
    alert('edit this?' + srow.length);
    console.log(srow.tr);
    // var row = document.getElementById(srow);
    // row.insertRow(-1);
    // var cell1 = row.insertCell(0);
    // var cell2 = row.insertCell(1);
    // cell1.innerHTML = "NEW CELL1";
    // cell2.innerHTML = "NEW CELL2";

}