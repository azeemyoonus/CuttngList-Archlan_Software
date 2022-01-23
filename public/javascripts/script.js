findTotalSqft = () => {
  var height = document.getElementById("heightInput").value;
  var width = document.getElementById("widthInput").value;
  var qty = document.getElementById("qtyInput").value;
  var totalSQFT = height * width * 0.0000107639104 * qty;
  totalSQFT = totalSQFT.toFixed(3);
  var totalSQFTInputField = document.getElementById("totalSqftInput");
  totalSQFTInputField.value = totalSQFT;
};

findTotalAmount = () => {
  var totalSQFT = document.getElementById("totalSqftInput").value;
  var rate = document.getElementById("rateInput").value;
  var amount = totalSQFT * rate;
  amount = amount.toFixed(3);
  var amountInputField = document.getElementById("amountInput");
  amountInputField.value = amount;
};
$("#qtyInput").on("change paste keyup cut select", function () { findTotalSqft() });
$("#widthInput").on("change paste keyup cut select", function () { findTotalSqft() });
$("#heightInput").on("change paste keyup cut select", function () { findTotalSqft() });

$("#rateInput").on("change paste keyup cut select", function () { findTotalAmount() });
$("#totalSqftInput").on("change paste keyup cut select", function () { findTotalAmount() });

downloadExcel = () => {
  window.location.href = "/downloadExcel";
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
  Amount
) {
  if (
    confirm(
      "Are You sure to delete the Item " +
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
      url: "/deleteItem/" + id,
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


// $("#jobcardForm").submit((e)=>{
//   e.preventDefault();
//   data= $("#jobNoInput").val();
//   $.ajax({
//     url:"/jobcardView/"+data,
//     method:"post",
//     success:(response)=>{
//       if(response.staus==true){
//         alert("all done");
//       }
//     }
//   })
// })

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


// const elem = document.querySelector('input[id="dateInput"]');
// const datepicker = new Datepicker(elem, {
//   // ...options
//   format: 'dd/mm/yyyy',
//   nextArrow: `<i class="bi bi-caret-right-fill"></i>`,
//   prevArrow: `<i class="bi bi-caret-left-fill"></i>`,
//   // maxDate: Date.now(),
//   todayHighlight: 'true'
// });