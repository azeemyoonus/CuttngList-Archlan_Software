function addNewItem(row) {
   

}


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

downloadExcel=()=>{
 alert("working")   
 
}


function editItem(srow) {   

}
