var itemservices = require("../services/itemServices");
var generalServices = require('../services/generalService');
const ExcelJS = require("exceljs");
const router = require("../routes");

exports.getAllItems = async (_req, res) => {
    totalAmount = await itemservices.getTotalAmount();
    totalAmountInWord = await generalServices.rupeesToWords(totalAmount);
    totalSQFT = await itemservices.getTottalSQFT();
    await itemservices.getAllItems().then((response) => {
        // console.log(response);
        needed= response[0].Items;
        // console.log(needed)
        res.render("index", { response,needed, totalAmount, totalSQFT, totalAmountInWord });
    });
};

exports.addItem = async (req, res) => {
    console.log(req.body);
    data= req.body;
    Item= {data};
    console.log(Item.data);
    await itemservices.addItem(Item.data).then((response) => {
        // console.log(response);
        res.redirect("/");
    });
};

exports.downloadExcel = async (_req, res) => {
    console.log("here router");
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Azeem";
    workbook.lastModifiedBy = "Azeem";
    workbook.modified = new Date();

    const worksheet = workbook.addWorksheet("Items"); // New Worksheet

    worksheet.columns = [
        {
            header: "Sl.no.", key: "s_no", width: 6,
            style: { alignment: { vertical: 'middle', horizontal: 'center' } }
        },
        { header: 'Item', key: 'Item', width: 28 },
        { header: 'Thickness', key: 'Thickness', width: 10 },
        { header: 'Width', key: 'Width', width: 10, outlineLevel: 1 },
        { header: 'Height', key: 'Height', width: 10, outlineLevel: 1 },
        { header: 'QTY', key: 'QTY', width: 10, outlineLevel: 1 },
        { header: 'Total SQ.FT.', key: 'TotalSQFT', width: 15, outlineLevel: 1 },
        { header: 'REMARKS', key: 'Remarks', width: 20, outlineLevel: 1 },
        { header: 'Finsih', key: 'Finish', width: 10, outlineLevel: 1 },
        { header: 'Rate-SQFT', key: 'RateSQFT', width: 15, outlineLevel: 1 },
        { header: 'Amount', key: 'Amount', width: 15, outlineLevel: 1 }
    ];


    // worksheet.getCell('A1').alignment = { vertical: 'top', horizontal: 'left' };
    const path = "./public/datas";

    var details = await itemservices.getAllItems();

    var count = 1;
    details.forEach(element => {
        element.s_no = count;
        worksheet.addRow(element);
        count++;
    });

    // Making first line in excel bold
    worksheet.getRow(1).eachCell((cell) => {
        cell.font = { bold: true };
    });

    try {
        const data = await workbook.xlsx.writeFile(`${path}/Items.xlsx`)
            .then(async () => {
                res.download(`${path}/Items.xlsx`);
            })

    } catch (message) {
        res.render("error", { message });
    }

};


exports.editItem = async (req, res) => {
    console.log(req.params.id);
    await itemservices.getAnItem(req.params.id).then((response) => {
        console.log("hello what happend", response);
        res.render("editItem", { response });
    })

}

exports.updateItem = async (req, res) => {
    console.log(req.body);
    console.log(req.params.id);
    await itemservices.updateItem(req.params.id, req.body).then((response) => {
        console.log(response);
        res.redirect('/');
    })
}
exports.deleteItem = async (req, res) => {
    console.log("hello");
    await itemservices.deleteItem(req.params.id).then((response) => {
        console.log(response);
        res.json({ status: true });
    })
}

exports.newJobCard = (req, res) => {
    res.render('addJobCard');
}

exports.addNewJobCard = async (req, res) => {
    console.log(req.body);

    await itemservices.addJobCard(req.body).then(() => {
      res.redirect('/');
    })

}

exports.getJobCard= async(req, res)=>{

    res.redirect('/viewjobcard/'+req.body.jobCardNo);
}

exports.viewJobCard=async(req, res)=>{
    console.log("hello");
    console.log(req.params.no);
    await itemservices.getJobCardDetails(req.params.no).then((response)=>{
        console.log(response);
        res.render('jobcard',{response});
    })

   
}
