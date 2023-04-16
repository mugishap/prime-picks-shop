import { CreateContactSchema } from './../validations/app.validation.js'
import { ApiResponse } from './../responses/api.response.js'
import Contact from './../models/contact.js'
import { sendContactReceivedEmail } from "./../utils/mail.util.js"

const createContact = async (req, res) => {
    try {
        const { error } = CreateContactSchema.validate(req.body, { allowUnknown: true })
        if (error) return res.status(400).json(new ApiResponse(false, error.details[0].message, null))
        const { fullname, email, mobile, message } = req.body
        const contact = await new Contact({
            fullname, email, mobile, message
        })
        await contact.save()
        sendContactReceivedEmail({ contact })
        return res.status(200).json(new ApiResponse(true, "Your message has been receieved", null))
    } catch (error) {
        console.log(error)
        return res.status(500).json(new ApiResponse(false, "Internal Server Error", null))
    }
}

const contactController = {
    createContact
}

export default contactController