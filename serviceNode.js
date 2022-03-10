const Service = require('node-windows').Service;

const svc = new Service({
    name : "ArchlanCuttingList",
    description : "Cuttling list web app for Archlan",
    script: "C:\\Program Files\\Archlan_Software-main\\bin\\www"
})

svc.on('install', function(){
    svc.start();   
})

svc.install();