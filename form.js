//const lines define the plugins needed for this code
const express = require ('express');
const nodemailer = require ('nodemailer');
const bodyParser = require ('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/send-email', async (req, res) => { //this section initiates the action of sending the email
    const{name, email, message} = req.body;
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user:"email@gmail.com",
            pass:"password123"
        }
    });
    const mailOptions = { //this section defines the content of the email
        from:email,
        to:"cianaruggiero@gmail.com",
        subject:"Contact Form Submission",
        text:message
    };
    try { //this line checks for errors and reports them back to the user
        await transporter.sendMail(mailOptions);
        res.status(200).send("Message Sent");
    }   catch (error) {
        res.status(500).send("Failed to Send");
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});