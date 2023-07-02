import { v2 as cloudinary } from "cloudinary";
import formidable from "formidable";

cloudinary.config({
  // import from .env.local file
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const file = await new Promise((resolve, reject) => {
      const form = formidable();
      form.parse(request, (err, fields, files) => {
        if (err) return reject(err);
      });
      form.on("file", (formName, file) => {
        resolve(file);
      });
    });

    const data = await cloudinary.uploader.unsigned_upload(
      file.filepath,
      process.env.CLOUDINARY_UPLOAD_PRESET
    );

    return new Response(JSON.stringify({ fileUrl: data.secure_url }));
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }));
  }
}
