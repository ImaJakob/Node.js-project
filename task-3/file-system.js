const { isUtf8 } = require('buffer');
const fs = require('fs');

fs.writeFile("welcome.txt", "Hello Node", function(err){
    console.log("file created")
});


fs.readFile('welcome.txt', 'Utf8', function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});
