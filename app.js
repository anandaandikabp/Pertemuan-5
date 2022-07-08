const contact = require('./contact');

// program
const main = async () => {
const nama = await contact.question('Nama? ');    
const mobile = await contact.question('Nomor HP? ');
const email = await contact.question('Email? ');

contact.answer(nama, mobile, email);
};

main();