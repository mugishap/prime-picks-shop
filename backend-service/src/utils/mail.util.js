import { config } from 'dotenv';
import nodemailer from 'nodemailer'

config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: process.env.MAIL_HOST,
    port: 465,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

const sendOrderReceivedEmail = async (email, names, product) => {
    try {
        const info = transporter.sendMail({
            from: process.env.MAIL_USER,
            to: email,
            subject: "Prime Picks Order Details",
            html:
                `
            <!DOCTYPE html>
                <html>
                <body>
                    <h2>Dear ${names}, </h2>
                    <h2> You request to purchase the product "${product.name}" is currently pending.</h2>
                    <span>Your order is being reviewed you will receive granted/denied email soon from the admin. Good Day!!!</span>
                    <span>Review the product using the link below</span>
                    <a href="${process.env.CLIENT_URL}/product/${product._id}" style="color:#4200FE;letter-spacing: 2px;">Click here</a>
                    <p>Best regards,<br>Prime Picks</p>
                </body>
            </html>
            `

        });

        return {
            message: "Email sent successfully",
            emailId: info.messageId,
            status: true
        };
    } catch (error) {
        console.log(error);
        return { message: "Unable to send email", status: false };
    }
};
export const sendOrderApprovedEmail = () => { }

export const sendOrderDeclinedEmail = () => { }

export { sendOrderReceivedEmail, sendOrderApprovedEmail, sendOrderDeclinedEmail };