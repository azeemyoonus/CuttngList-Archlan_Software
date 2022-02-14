

findTotalSqft1 = () => {
  var height = document.getElementsByClassName("heightInput1")[0].value;
  var width = document.getElementsByClassName("widthInput1")[0].value;
  var qty = document.getElementsByClassName("qtyInput1")[0].value;
  var totalSQFT = height * width * 0.0000107639104 * qty;
  totalSQFT = totalSQFT.toFixed(3);
  var totalSQFTInputField = document.getElementsByClassName("totalSqftInput1")[0];
  totalSQFTInputField.value = totalSQFT;
};

findTotalAmount1 = () => {
  var totalSQFT = document.getElementsByClassName("totalSqftInput1")[0].value;
  var rate = document.getElementsByClassName("rateInput1")[0].value;
  var amount = totalSQFT * rate;
  amount = amount.toFixed(3);
  var amountInputField = document.getElementsByClassName("amountInput1")[0];
  amountInputField.value = amount;
}

$(".qtyInput1").on("change paste keyup cut select", function () { findTotalSqft1() });
$(".widthInput1").on("change paste keyup cut select", function () { findTotalSqft1() });
$(".heightInput1").on("change paste keyup cut select", function () { findTotalSqft1() });

$(".rateInput1").on("change paste keyup cut select", function () { findTotalAmount1() });
$(".totalSqftInput1").on("change paste keyup cut select", function () { findTotalAmount1() });

$(".qtyInput1").on("change paste keyup cut select", function () { findTotalAmount1() });
$(".widthInput1").on("change paste keyup cut select", function () { findTotalAmount1() });
$(".heightInput1").on("change paste keyup cut select", function () { findTotalAmount1() });


$("#clientNameInput").focus();


findTotalSqft2 = (id) => {

  var height = document.getElementById("heightInput" + id).value;
  var width = document.getElementById("widthInput" + id).value;
  var qty = document.getElementById("qtyInput" + id).value;
  var totalSQFT = height * width * 0.0000107639104 * qty;
  totalSQFT = totalSQFT.toFixed(3);
  var totalSQFTInputField = document.getElementById("totalSqftInput" + id);
  totalSQFTInputField.value = totalSQFT;
  findTotalAmount2(id);
};

findTotalAmount2 = (id) => {

  totalId = "totalSqftInput" + id;
  var totalSQFT = $("#" + totalId).val();

  rateId = "rateInput" + id;
  var rate = $("#" + rateId).val();

  var amount = totalSQFT * rate;
  amount = amount.toFixed(3);
  amtId = "amountInput" + id;
  var amountInputField = document.getElementById(amtId);
  amountInputField.value = amount;
  findTotalSqft2(id);
};



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
  ) {
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

// var stas_editItBtn = true;
// editItem = () => {

//   if (stas_editItBtn) {
//     $("#editItemDiv").removeAttr('hidden');
//     var position = $('#editItemDiv').position();
//     position.top = position.top - 90;
//     window.scrollTo(position);
//     stas_editItBtn = false;
//   }
//   else {
//     $("#editItemDiv").attr("hidden", true);
//     stas_editItBtn = true;
//   }

// }

function cancelAddItem() {

  $("#itemInput1").val('');
  $("#thicknessInput1").val('');
  $(".widthInput1").val('');
  $(".thickInput1").val('');
  $(".heightInput1").val('');
  $(".qtyInput1").val('');
  $(".totalSqftInput1").val('');
  $("#remarksInput1").val('');
  $("#finishInput1").val('');
  $(".rateInput1").val('');
  $(".amountInput1").val('');

}

//jobcardInput to clientInput
$("#jobcardInput").keypress(function (event) {
  //checks for 'enter' key
  if (event.which == 13) {
    value = $("#jobcardInput").val();
    $("#clientNameInput").focus();
  }
})

//clientNameinput to site name
$("#clientNameInput").keypress(function (event) {
  //press enter button
  if (event.which == 13) {
    $("#siteNameInput").focus();
  }
})

//sitenameInput to date input
$("#siteNameInput").keypress(function (event) {
  //press enter button
  if (event.which == 13) {
    $("#dateInput").focus();
  }
})

//dateinput  to clientphone input
$("#dateInput").keypress(function (event) {
  //press enter button
  if (event.which == 13) {
    $("#clentPhoneInput").focus();
  }
})


// client phone input to delivery date input
$("#clentPhoneInput").keypress(function (event) {
  //press enter button
  if (event.which == 13) {
    $("#deliveryDateInput").focus();
  }
})

$("#deliveryDateInput").keypress(function (event) {
  //press enter button
  if (event.which == 13) {
    $("#itemInput1").focus();   
    window.scrollTo(0,document.body.scrollHeight);
   
  }
})

// //itemname input to thickness input
// $("#itemInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#thickInput").focus();
//   }
// })

// //thickness input to width input
// $("#thickInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#widthInput").focus();
//   }
// })

// //width input to height input
// $("#widthInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#heightInput").focus();
//   }
// })

// //height input to qtyinput
// $("#heightInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#qtyInput").focus();
//   }
// })

// //qty input to remarks
// $("#qtyInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#remarksInput").focus();
//   }
// })

// //remarks input to finish input
// $("#remarksInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#finishInput").focus();
//   }
// })

// //finish input to rate input 
// $("#finishInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#rateInput").focus();
//   }
// })

// //rate input to add item btn
// $("#rateInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#addItemBtn").focus();
//   }
// })


var stas_cnclItmBtn = true;
function editItem(id) {

  if (stas_cnclItmBtn) {
    $("#editFormRow" + id).removeAttr('hidden');
    stas_cnclItmBtn = false;
  }
  else {
    $("#editFormRow" + id).attr("hidden", true);
    stas_cnclItmBtn = true;
  }

}


$("#clientNameInput").on("blur", function () { updateJobCard() });
$("#siteNameInput").on("blur", function () { updateJobCard() });
$("#dateInput").on("blur", function () { updateJobCard() });
$("#clentPhoneInput").on("blur", function () { updateJobCard() });
$("#deliveryDateInput").on("blur", function () { updateJobCard() });


function updateJobCard() {
  data = $("#jobcardForm1").serialize();
  id = $("#jobcardInput").val();
  $.ajax({
    url: '/viewjobcard/updateJobCard/' + id,
    method: 'post',
    data: data,
    success: (response) => {

    }
  })
}




