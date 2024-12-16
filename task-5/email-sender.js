const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'myemail@gmail.com',
        pass: 'mypassword'
    }
});

const mailOptions = {
    from: 'imaobongjacob@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending email using node.js',
    text: 'This is a test email sent using Node.js'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log(`Email sent successfully:`, info.response)
    }

})