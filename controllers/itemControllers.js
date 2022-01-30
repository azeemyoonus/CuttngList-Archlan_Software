var itemservices = require("../services/itemServices");
var generalServices = require('../services/generalService');
const ExcelJS = require("exceljs");
const router = require("../routes");

exports.getAllItems = async (req, res) => {
    await itemservices.getAllItems().then((response) => {
        res.render("alljobcards", { response });
    });
};

exports.addItem = async (req, res) => {
    console.log(req.body);
    data = req.body;
    Item = { data };
    console.log(Item.data);
    await itemservices.addItem(Item.data, req.params.no).then(async (response) => {
        return await itemservices.getTotalAmount(req.params.no).then((response2) => {
            res.redirect('/viewjobcard/' + req.params.no);
        })
    });
};

exports.downloadExcel = async (req, res) => {
    console.log("here router");
    console.log(req.params.no);
    const workbook = new ExcelJS.Workbook();
    workbook.creator = "Admin";
    workbook.lastModifiedBy = "Admin";
    workbook.modified = new Date();

    const worksheet = workbook.addWorksheet("Items", {
        pageSetup: { paperSize: 9, orientation: 'landscape' }
    });

    worksheet.getCell('B1').value = 'Job Card NO:';
    worksheet.getCell('B2').value = 'Date:';
    worksheet.getCell('B3').value = 'Site Name:';

    worksheet.getRow(5).values = ['Sl.no.', 'Item', 'Thickness',
        'Width', 'Height', 'QTY', 'Total SQ.FT.', 'REMARKS',
        'Finsih', 'Rate-SQFT', 'Amount'];
    worksheet.columns = [
        {
            key: "s_no", width: 6,
            style: { alignment: { vertical: 'middle', horizontal: 'center' } }
        },
        { key: 'ItemName', width: 15, style: { alignment: { horizontal: 'center' } } },
        { key: 'Thickness', width: 10, style: { alignment: { horizontal: 'center' } } },
        { key: 'Width', width: 10, outlineLevel: 1, style: { alignment: { horizontal: 'center' } } },
        { key: 'Height', width: 10, outlineLevel: 1, style: { alignment: { horizontal: 'center' } } },
        { key: 'QTY', width: 10, outlineLevel: 1, style: { alignment: { horizontal: 'center' } } },
        { key: 'TotalSQFT', width: 15, outlineLevel: 1, style: { alignment: { horizontal: 'center' } } },
        { key: 'Remarks', width: 20, outlineLevel: 1, style: { alignment: { horizontal: 'center' } } },
        { key: 'Finish', width: 10, outlineLevel: 1, style: { alignment: { horizontal: 'center' } } },
        { key: 'RateSQFT', width: 15, outlineLevel: 1, style: { alignment: { horizontal: 'center' } } },
        { key: 'Amount', width: 15, outlineLevel: 1, style: { alignment: { horizontal: 'center' } } }
    ];

    worksheet.getCell('A5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('B5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('C5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('D5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('E5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('F5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('G5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('H5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('I5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('J5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }
    worksheet.getCell('K5').border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }

    const path = "./public/datas";

    var details = await itemservices.getJobCardDetails(req.params.no);
    itemDetails = details[0].Items;
    var count = 1;

    itemDetails.forEach(element => {
        rowForBor = count + 5;
        element.s_no = count;
        worksheet.addRow(element);
        worksheet.getCell('A' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('B' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('C' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('D' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('E' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('F' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('G' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('H' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('I' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('J' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }
        worksheet.getCell('K' + rowForBor).border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        }

        count++;
    });

    rowForAmt = count + 5;
    rowForWord = count + 6;
    worksheet.mergeCells('A' + rowForAmt, 'K' + rowForAmt);
    worksheet.getCell('K' + rowForAmt).value = 'Total amount:' + details[0].TotalAmount;
    worksheet.getCell('K' + rowForAmt).alignment = { horizontal: 'right' };
    worksheet.getCell('K' + rowForAmt).border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        right: { style: 'thin' }
    }

    worksheet.mergeCells('A' + rowForWord, 'K' + rowForWord);
    worksheet.getCell('K' + rowForWord).value = 'Total amount in Words:' + await generalServices.rupeesToWords(details[0].TotalAmount);
    worksheet.getCell('K' + rowForWord).alignment = { horizontal: 'right' };
    worksheet.getCell('K' + rowForWord).border = {
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
    }

    worksheet.getCell('C1').value = details[0]._id;
    worksheet.getCell('C2').value = details[0].Date;
    worksheet.getCell('C2').numFmt = 'dd/mm/yyyy';
    worksheet.getCell('C3').value = details[0].SiteName;

    worksheet.getCell('C1').alignment = { horizontal: 'right' }
    worksheet.getCell('C2').alignment = { horizontal: 'right' }
    worksheet.getCell('C3').alignment = { horizontal: 'right' }

    worksheet.getCell('B1').font = {
        bold: true
    };

    worksheet.getCell('B2').font = {
        bold: true
    };
    worksheet.getCell('B3').font = {
        bold: true
    };

    worksheet.getRow(5).eachCell((cell, border) => {
        cell.font = { bold: true };
        border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
        }

    });

    try {
        const data = await workbook.xlsx.writeFile(`${path}/Job Card ` + details[0]._id + `.xlsx`)
            .then(async () => {
                res.download(`${path}/Job Card ` + details[0]._id + `.xlsx`);
            })

    } catch (message) {
        res.render("error", { message });
    }

};


exports.editItem = async (req, res) => {
    await itemservices.getAnItem(req.params.cardNo, req.params.no).then((response) => {
        JobCardNO = req.params.cardNo;
        res.render("editItem", { response, JobCardNO });
    })

}

exports.updateItem = async (req, res) => {
    console.log(req.params);
    await itemservices.updateItem(req.params.id, req.params.cardNo, req.body).then((response) => {
        console.log(response);
        res.redirect('/viewjobcard/' + req.params.cardNo);
    })
}
exports.deleteItem = async (req, res) => {
    console.log(req.params);
    await itemservices.deleteItem(req.params.no, req.params.id).then((response) => {       
        res.json({ status: true });
    })
}

exports.newJobCard = (req, res) => {
    res.render('addJobCard');
}

exports.addNewJobCard = async (req, res) => {

    await itemservices.addJobCard(req.body).then((response) => {
        res.redirect('/');
    }).catch((err) => {
        res.render('addJobCard', { message: "Cant Create Job Card, because you already created !" })
    })

}



exports.viewJobCard = async (req, res) => {
    TotalAmount = await itemservices.getTotalAmount(req.params.no);
    const TotalamountInWords = await generalServices.rupeesToWords(TotalAmount);
    await itemservices.getJobCardDetails(req.params.no).then((response) => {
        response = response[0];
        res.render('jobcard', { response, TotalamountInWords });
    }).catch((err) => {


        // res.render('jobcard',{err, response, TotalamountInWords})
    })
}
