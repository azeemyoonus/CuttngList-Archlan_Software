findTotalSqft = () => {
  var height = document.getElementsByClassName("heightInput")[0].value;
  var width = document.getElementsByClassName("widthInput")[0].value;
  var qty = document.getElementsByClassName("qtyInput")[0].value;
  var totalSQFT = height * width * 0.0000107639104 * qty;
  totalSQFT = totalSQFT.toFixed(3);
  var totalSQFTInputField = document.getElementsByClassName("totalSqftInput")[0];
  totalSQFTInputField.value = totalSQFT;
};

findTotalAmount = () => {
  var totalSQFT = document.getElementsByClassName("totalSqftInput")[0].value;
  var rate = document.getElementsByClassName("rateInput")[0].value;
  var amount = totalSQFT * rate;
  amount = amount.toFixed(3);
  var amountInputField = document.getElementsByClassName("amountInput")[0];
  amountInputField.value = amount;
};
$(".qtyInput").on("change paste keyup cut select", function () { findTotalSqft() });
$(".widthInput").on("change paste keyup cut select", function () { findTotalSqft() });
$(".heightInput").on("change paste keyup cut select", function () { findTotalSqft() });

$(".rateInput").on("change paste keyup cut select", function () { findTotalAmount() });
$(".totalSqftInput").on("change paste keyup cut select", function () { findTotalAmount() });

$(".qtyInput").on("change paste keyup cut select", function () { findTotalAmount() });
$(".widthInput").on("change paste keyup cut select", function () { findTotalAmount() });
$(".heightInput").on("change paste keyup cut select", function () { findTotalAmount() });


function downloadExcel(jobcardNO) {
  window.location.href = "downloadExcel/" + jobcardNO;
};

function deleteItem(
  id,
  Item,
  Thick,
  Width,
  Height,
  QTY,
  totalSQFT,
  RateSQFT,
  Amount,
  jobCardNO
) {
  if (
    confirm(
      "Are You sure to delete the Item: " +
      Item +
      ",with  Thickness:" +
      Thick +
      ", Width: " +
      Width +
      ", Height: " +
      Height +
      ", Quantity: " +
      QTY +
      ", TotalSQFT: " +
      totalSQFT +
      ", Rate-SQFT: " +
      RateSQFT +
      " and Amount: " +
      Amount
    )
  )
   {
    $.ajax({
      url: "/viewjobcard/" + jobCardNO + "/deleteItem/" + id,
      method: "delete",
      success: (response) => {
        if (response.status == true) {
          location.reload();
        } else {
          location.href = "";
        }
      },
    });
  }
}


$("#jobcardForm").submit((e) => {
  e.preventDefault();
  data = $("#jobNoInput").val();

  location.href = "/viewjobcard/" + data;

})

// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }



var stas_addItBtn = true;
// addItem = () => {

  
  
//   if (stas_addItBtn) {
//     $("#addItemDiv").removeAttr('hidden');
//     var position = $('#addItemDiv').position();
//     position.top = position.top - 90;
//     window.scrollTo(position);
//     stas_addItBtn = false;
//   }
//   else {
//     $("#addItemDiv").attr("hidden", true);
//     stas_addItBtn = true;
//   }
// }

var stas_editItBtn = true;
editItem = () => {

  if (stas_editItBtn) {
    $("#editItemDiv").removeAttr('hidden');
    var position = $('#editItemDiv').position();
    position.top = position.top - 90;
    window.scrollTo(position);
    stas_editItBtn = false;
  }
  else {
    $("#editItemDiv").attr("hidden", true);
    stas_editItBtn = true;
  }

}

function cancelAddItem(){

  $("#itemInput").val('');
  $("#thicknessInput").val('');
  $("#widthInput").val('');
  $("#thickInput").val('');
  $("#heightInput").val('');
  $("#qtyInput").val('');
  $("#totalSqftInput").val('');
  $("#remarksInput").val('');
  $("#finishInput").val('');
  $("#rateInput").val('');
  $("#amountInput").val('');

}

