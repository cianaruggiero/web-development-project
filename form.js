const express = require ('express');
const nodemailer = require ('nodemailer');
const bodyParser = require ('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.post('/send-email', async (req, res) => {
    const{name, email, message} = req.body;
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth: {
            user:"email@gmail.com",
            pass:"password123"
        }
    });
    const mailOptions = {
        from:email,
        to:"cianaruggiero@gmail.com",
        subject:"contact form submission",
        text:message
    };
    try {
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