const generatePassword = require('generate-password');

function createPassword(){
    const password = generatePassword.generate({
        length: 8,
        numbers: true,
        Symbols: true,
        uppercase: true,
        lowercase: true
    });
    console.log(`Generate Password: ${password}`);
}
createPassword();