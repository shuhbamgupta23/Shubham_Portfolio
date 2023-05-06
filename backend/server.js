import { app } from "./app.js";
// import dotenv from "dotenv";
import mongoose from "mongoose";
import cloudinary from "cloudinary";

// dotenv.config();

PORT = 4000

MONGO_URL = "mongodb+srv://chrollo:chrollo@cluster0.kdcjqla.mongodb.net/test?retryWrites=true"


JWT_SECRET = "asdasdasdasdaweqxs"

SMTP_HOST = "sandbox.smtp.mailtrap.io"

SMTP_PORT = 2525

SMTP_USER = "f2f29728d5c375"

SMTP_PASSWORD = "ef75240ac8366e"

MY_MAIL = "mrjanuaryx@gmail.com"

CLOUDINARY_NAME = "dqdetczii"
CLOUDINARY_API_KEY = "349423197337996"
CLOUDINARY_API_KEY_SECRET = "FkENuiWWfG0bLmvHQIfG9vAe6Uc"

mongoose
  .connect(MONGO_URL)
  .then((c) => {
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

cloudinary.v2.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_KEY_SECRET,
});
