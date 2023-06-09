import { config } from 'dotenv';
import nodemailer from 'nodemailer';

config();
const { MAIL_SERVICE, MAIL_HOST, MAIL_USER, MAIL_PASSWORD, CLIENT_URL, } = process.env

const transporter = nodemailer.createTransport({
    service: MAIL_SERVICE,
    pool: true,
    host: MAIL_HOST,
    port: 465,
    secure: false,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD
    }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

const sendOrderReceivedEmail = async ({ order }) => {
    try {
        const info = transporter.sendMail({
            from: MAIL_USER,
            to: order.user.email,
            subject: "Prime Picks Order Details",
            html:
                `
            <!DOCTYPE html>
                <html>
                <body>
                    <h2>Dear ${order.user.fullname}, </h2>
                    <h2> You request to purchase the product "${order.product.name}" is currently pending.</h2>
                    <span>Your order is being reviewed you will receive granted/denied email soon from the admin. Good Day!!!</span>
                    <span>Review the product using the link below</span>
                    <a href="${CLIENT_URL}/product/${order.product._id}" style="color:#4200FE;letter-spacing: 2px;">Click here</a>
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
const sendOrderGrantedEmail = ({ order }) => {
    try {
        const info = transporter.sendMail({
            from: MAIL_USER,
            to: order.user.email,
            subject: "Hurray! you requested product is on its way!!!",
            html:
                `
            <!DOCTYPE html>
                <html>
                <body>
                    <h2>Dear ${order.user.fullname}, </h2>
                    <h2> You request to purchase the product "${order.product.name}" has been granted!!!</h2>
                    <span>It is on its way to your location. Call 0782307144 for any inquries.</span>
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
}

const sendOrderDeclinedEmail = ({ order }) => {
    try {
        const info = transporter.sendMail({
            from: MAIL_USER,
            to: order.user.email,
            subject: "Oops! you product order has been denied!!!",
            html:
                `
            <!DOCTYPE html>
                <html>
                <body>
                    <h2>Dear ${order.user.fullname}, </h2>
                    <h2> You request to purchase the product "${order.product.name}" has been denied!!! We are really sorry for this.</h2>
                    <span>Check some other products of you choice here</span>
                    <a href="${CLIENT_URL}/products" style="color:#4200FE;letter-spacing: 2px;">Click here</a>
                    <span>Call 0782307144 for any inquries.</span>
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
}

const sendThanksForSigningUpEmail = ({ user }) => {
    try {
        const info = transporter.sendMail({
            from: MAIL_USER,
            to: user.email,
            subject: "Welcome onboard. Thanks for signing up for Prime Picks",
            html:
                `
            <!DOCTYPE html>
                <html>
                <body>
                    <h2>Dear ${user.fullname}, </h2>
                    <h2> Hope you are doing well. We are very delighted to welcome you onboard.</h2>
                    <span>Check the trending products  here</span>
                    <a href="${CLIENT_URL}/products" style="color:#4200FE;letter-spacing: 2px;">Click here</a>
                    <span>Call 0782307144 for any inquries.</span>
                    <span>And Thanks again for signing up.</span>
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
}

const sendContactReceivedEmail = ({ contact }) => {
    try {
        const info = transporter.sendMail({
            from: MAIL_USER,
            to: contact.email,
            subject: "Your message to prime picks has been recevied",
            html:
                `
            <!DOCTYPE html>
                <html>
                <body>
                    <h2>Dear ${contact.fullname}, </h2>
                    <h2> We have received your message. And we are trying hard to process it. You'll receive a response soon. (:</h2>
                    <span>Don't hesitate to check our products here</span>
                    <a href="${CLIENT_URL}/products" style="color:#4200FE;letter-spacing: 2px;">Click here</a>
                    <span>Call 0782307144 for any inquries.</span>
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
}

export { sendOrderReceivedEmail, sendOrderGrantedEmail, sendOrderDeclinedEmail, sendThanksForSigningUpEmail, sendContactReceivedEmail };
