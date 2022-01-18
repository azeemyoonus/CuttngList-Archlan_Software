var itemservices = require("../services/itemServices");
const ExcelJS = require("exceljs");

exports.getAllItems = async (_req, res) => {
    await itemservices.getAllItems().then((response) => {
        // console.log(response);
        var count= response.length;
        var slno=[];
        for(let i=1; i<=count;i++){
            slno[i-1]=i;
        }
        console.log(response);
        res.render("index", { response ,slno});
    });
};

exports.addItem = async (req, res) => {
    console.log(req.body);
    await itemservices.addItem(req.body).then((response) => {
        console.log(response);
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
            style:{ alignment : { vertical: 'middle', horizontal: 'center' }}
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

    } catch (err) {
        res.send({
            status: "error",
            message: "Something went wrong",
        });
    }
    
};
