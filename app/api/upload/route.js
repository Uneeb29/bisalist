export async function POST(request) {
  try {
    // getting the image fro the request
    const image = await request.json();

    console.log("Uploading Image");

    const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;
    const body = new FormData();
    body.append("file", image);
    body.append("upload_preset", process.env.CLOUDINARY_UPLOAD_PRESET);
    const res = await fetch(url, {
      method: "POST",
      body,
    });
    const data = await res.json();

    console.log("Image Uploaded");

    return new Response(
      JSON.stringify({
        url: data.secure_url,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify("Error Uploading"), { status: 500 });
  }
}
