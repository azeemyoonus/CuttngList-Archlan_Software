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

$(function () {
  $(this).find('.dropdown-toggle').dropdown();

  $('.rowlink').on('click', function (e) {
    $(this).find('.dropdown').toggleClass('open');
    e.stopPropagation();
  });
});

function update(){
  data = $("#jobcardForm1").serialize();
  id= $("#jobcardInput").val();
  console.log(data);
  $.ajax({
        url: '/viewjobcard/updateJobCard/'+id,
        method: 'post',
        data: data,
        success: (response) => {
          alert("done:)")
          // $("#id").load(location.href + " #iddiv");
          // window.location.href='/viewjobcard/'+data._id;
        }
      })
}


$("#dateInput").on("change", function () {
  update();
})
// $("#dateInput").on("change", function () {
//   update();
// })
// $("#dateInput").on("change", function () {
//   update();
// })
// $("#dateInput").on("change", function () {
//   update();
// })



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
    alert(value);
    // window.location.href="/viewjobcard/" + value;


    // $.ajax({
    //   url: '/viewjobcard/' + value,
    //   method: 'get',
    //   success: (response) => {
    //     // console.log(response);
    //     // $("#jobcardInput").val(response._id);
    //     // $("#clientNameInput").val(response.SiteName);
    //     // dateformated = response.Date.substr(0, 10);       
    //     // $("#dateInput").val(dateformated);
    //     // $("#jobcardInput").value(response._id);
    //     // if (response.status == true) {          
    //     $("#mainCardDiv").load(location.href + " #cardBodyDiv");

    //     // }
    //   }
    // })
    // $("#clientNameInput").focus();
  }
})

// //clientNameinput to site name
// $("#clientNameInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#siteNameInput").focus();
//   }
// })

// //sitenameInput to date input
// $("#siteNameInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#dateInput").focus();
//   }
// })

// //dateinput  to clientphone input
// $("#dateInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#clentPhoneInput").focus();
//   }
// })


// // client phone input to delivery date input
// $("#clentPhoneInput").keypress(function (event) {
//   //press enter button
//   if (event.which == 13) {
//     $("#deliveryDateInput").focus();
//   }
// })

$("#deliveryDateInput").keypress(function (event) {
  //press enter button
  if (event.which == 13) {

    alert("are yo sure you want create");
    $("#deliveryDateInput").focus();


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

// $("#addItemForm").submit((e)=>{
//   e.preventDefault();

//   alert("button now clicked");
// })


// $("#createJobcardForm").submit((e) => {
//   e.preventDefault();
//   alert("finally");
//   $.ajax({
//     url: '/addJobCard',
//     method: 'post',
//     data: $("#createJobcardForm").serialize(),
//     success: (response) => {
//       window.location.href='/viewjobcard/'+data._id;
//     }
//   })



// })
// {{!-- action='addItem/{{_id}} --}}
// $("#addItemForm").submit((e) => {
//   e.preventDefault();
//   data = $("#addItemForm").serialize();

//   id = $("#jobcardInput").val();
//   $.ajax({
//     url: 'addItem/'+id,
//     method: 'post',
//     data: $("#addItemForm").serialize(),
//     success: (response) => {
//       $("#mainitemsDiv").load(location.href + " #itemsDiv");
//     }
//   })
// })



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


