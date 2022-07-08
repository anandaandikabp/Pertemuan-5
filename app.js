const validator = require('validator');
const readline = require("readline");
const { resolve } = require('path');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// fungsi input with validator
// const askNama = () => {
//     return new Promise((resolve) => {
//         rl.question('Nama? ', (nama) => {
//             resolve(nama);
//         });
//     });
// };

// const askNomor = () => {
//     return new Promise((resolve) => {
//         rl.question('Nomor HP? ', (nomor) => {
//             if (!validator.isMobilePhone(`${nomor}`,'id-ID')) {
//                 askNama();
//             } else {
//                 askEmail();
//             }
//             resolve(nomor);
//         });
//     });
// };

// const askEmail = () => {
//     return new Promise((resolve) => {
//         rl.question('Email? ', (email) => {
//             if (!validator.isEmail(`${email}`)) {
//                 askNama();
//             } 
//             resolve(email);
//         });
//     });
// };

// const askUser = async () => {
//     const nama = await askNama();    
//     const nomor = await askNomor();
//     const email = await askEmail();

//     console.log(`Nama diriku ${nama}, bernomor hp ${nomor},  emailnya ${email}`);
//     rl.close();
// };

    rl.question('Nama? ', (nama) => {
        rl.question('mobile? ', (mobile) => {
            const contact ={nama,mobile};
            const file = fs.readFileSync('data/contacts.json','utf-8');
            const contacts = JSON.parse(file);
            contacts.push(contact);
            fs.writeFileSync('data/contacts.json',JSON.stringify(contacts));
            // console.log('Thankyou');
            console.log(`Nama diriku ${nama}, bernomor hp ${mobile}`);
            rl.close();
        });
    });


// askUser();
