var itemservices = require("../services/itemServices");
var generalServices = require('../services/generalService');
const ExcelJS = require("exceljs");
// var pdf = require("pdf-creator-node");

var pdf = require('dynamic-html-pdf');
var fs = require("fs");
var path = require('path');

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

    var response = await itemservices.getJobCardDetails(req.params.no)
    response = response[0].toJSON()

    var html1 = fs.readFileSync("./views/forPdf.hbs", "utf8");
    const path_pdf = "./public/datas/Job Card" + req.params.no + ".pdf";
    const url = `http://archlan.herokuapp.com`;


    var options = {
        format: "A4",
        orientation: "portrait",
        border: "3mm",        
    };
   
    pdf.registerHelper('eval', function (...e) {
        e.pop();
        const args = e.join('');
        return eval(args);
    });

    var document = {
        type: 'file',
        template: html1,
        context: {
            needed: response,          
            url
        },
        path: path_pdf,   
    };

    pdf.create(document, options)
        .then((response) => {
            res.download(`${path_pdf}`);

        })
        .catch((error) => {
            console.error(error);
        });

};


exports.editItem = async (req, res) => {
    await itemservices.getAnItem(req.params.cardNo, req.params.no).then((response) => {
        JobCardNO = req.params.cardNo;
        res.render("editItem", { response, JobCardNO });
    })

}

exports.updateItem = async (req, res) => {
    console.log(req.params);
    console.log(req.body);
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
    // res.redirect('/')
    res.render('addJobCard', { response: true });
    // res.render('jobcard');
}

exports.addNewJobCard = async (req, res) => {
    // console.log(req);
    await itemservices.addJobCard(req.body).then((response) => {
        res.redirect('/viewjobcard/' + req.body._id);
    }).catch((err) => {
        res.redirect('/viewjobcard/' + req.body._id)
    })

}



exports.viewJobCard = async (req, res) => {
    TotalAmount = await itemservices.getTotalAmount(req.params.no);
    TotalSqft = await itemservices.getTotalSQFT(req.params.no);
    const TotalamountInWords = await generalServices.rupeesToWords(TotalAmount);
    await itemservices.getJobCardDetails(req.params.no).then((response) => {
        response = response[0];

        res.render('jobcard', { response, TotalamountInWords });
    }).catch((err) => {
        res.render('addJobCard', { response: true });
    })
}

exports.updateJobCard = async (req, res) => {
    console.log("reached for updating jobcard");
    await itemservices.updateJobCard(req.params.id, req.body).then((response) => {
        res.json({ status: true })
    })
}
exports.searchJobCard = async (req, res) => {
    console.log("searching");
    await itemservices.findJobCard(req.query.jobCardNo).then((response) => {
        console.log(response);
        if(response!=null)
        res.render("jobcard", { response });
        else {
           res.redirect('/');
        }
    }).catch((err) => {
        // res.render("alljobcards")
    })

}

exports.deleteJobCard = async (req, res)=>{
    console.log(req.params.id);
    await itemservices.deleteJobCard(req.params.id).then((resp)=>{
        res.json({status:true});
    })
}