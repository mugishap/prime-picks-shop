import cloudinary from 'cloudinary'
import { config } from "dotenv"
config()

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_UPLOAD_PRESET } = process.env

cloudinary.v2.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
})

export const uploadFile = async (fileString) => {
    try {
        const response = await cloudinary.v2.uploader.upload(fileString, {
            upload_preset: CLOUDINARY_UPLOAD_PRESET
        })
        const avatar = response.secure_url
        return avatar
    } catch (error) {
        console.log(error);
        return null;
    }
}