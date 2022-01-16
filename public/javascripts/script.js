function addNewItem(row) {
    // alert("Calling"); 

    // var tableBody = document.getElementById("itemTableBody");
    // // console.log(tableBody.rows[-1].cols[2].innerHTML);
    // // Create an empty <tr> element and add it to the 1st position of the table:
    // var row = tableBody.insertRow(-1);


    // var sl = row.insertCell(0);
    // sl.innerHTML = "NEW CELL1";

    // var itemCell = row.insertCell(1);  
    // itemCell.innerHTML = "Item";

    // var thickCell = row.insertCell(2);  
    // thickCell.innerHTML = "thickness";

    // var thickCell = row.insertCell(2);  
    // thickCell.innerHTML = "thickness";

    // var thickCell = row.insertCell(2);  
    // thickCell.innerHTML = "thickness";

    // var thickCell = row.insertCell(2);  
    // thickCell.innerHTML = "thickness";

    // var thickCell = row.insertCell(2);  
    // thickCell.innerHTML = "thickness";



}

// $(document).ready(function () {
//     $("#qtyInput").change(function () {
//         // $("#confirmCash").attr("hidden", true);
//         // $('input[id="onlinePayment"]').prop('checked', true);
//         // $("#confirmOnline").removeAttr('hidden');
//         var height = document.getElementById("heightInput").value;
//         var width = document.getElementById("widthInput").value;
//         // var height = document.getElementById("heightInput").value;
//         alert(height);
//     })

// });
// $("#qtyInput").click(function () {
//     // alert("hello");
//     var height = document.getElementById("heightInput").value;
//     var width = document.getElementById("widthInput").value;
//     var totalSQFT = height * width * 0.0000107639104;
//     var totalSQFTInputField = document.getElementById("totalSqftInput");
//     totalSQFTInputField.value = totalSQFT;
//     alert('hello');
//     console.log("here iam ");
// });

$("#qtyInput").on("change paste keyup cut select", function () {  
  
    var height = document.getElementById("heightInput").value;
    var width = document.getElementById("widthInput").value;
    var qty = document.getElementById("qtyInput").value;
    var totalSQFT = height * width * 0.0000107639104*qty;
    totalSQFT = totalSQFT.toFixed(3);
    var totalSQFTInputField = document.getElementById("totalSqftInput");
    totalSQFTInputField.value = totalSQFT;
  
})
$("#widthInput").on("change paste keyup cut select", function () {  
  
    var height = document.getElementById("heightInput").value;
    var width = document.getElementById("widthInput").value;
    var qty = document.getElementById("qtyInput").value;
    var totalSQFT = height * width * 0.0000107639104*qty;
    totalSQFT = totalSQFT.toFixed(2);
    var totalSQFTInputField = document.getElementById("totalSqftInput");
    totalSQFTInputField.value = totalSQFT;
  
})
$("#heightInput").on("change paste keyup cut select", function () {  
  
    var height = document.getElementById("heightInput").value;
    var width = document.getElementById("widthInput").value;
    var qty = document.getElementById("qtyInput").value;
    var totalSQFT = height * width * 0.0000107639104*qty;
    totalSQFT = totalSQFT.toFixed(2);
    var totalSQFTInputField = document.getElementById("totalSqftInput");
    totalSQFTInputField.value = totalSQFT;
  
})

$("#rateInput").on("change paste keyup cut select", function () {  
      
    var totalSQFT =document.getElementById("totalSqftInput").value;
    var rate = document.getElementById("rateInput").value;
    var amount = totalSQFT*rate;
    amount= amount.toFixed(3);
    var amountInputField = document.getElementById("amountInput");
    amountInputField.value = amount;
  
})

$("#totalSqftInput").on("change paste keyup cut select", function () {  
      
    var totalSQFT =document.getElementById("totalSqftInput").value;
    var rate = document.getElementById("rateInput").value;
    var amount = totalSQFT*rate;
    amount= amount.toFixed(3);
    var amountInputField = document.getElementById("amountInput");
    amountInputField.value = amount;
  
})



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
