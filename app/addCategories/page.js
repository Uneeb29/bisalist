"use client";
import { useForm } from "react-hook-form";

export default function AddCategories() {
  const { register, handleSubmit, errors } = useForm();

  // creating a simple form that takes a category name and image

  const onSubmit = (data) => {
    // use FileReader to convert the image to base64 and send to backend endpoint

    const reader = new FileReader();

    reader.onload = async function () {
      const img = reader.result;
      const dataToSend = {
        action: "add",
        category: data.name,
        image: img,
      };

      const response = await fetch("/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      console.log("Status Code : ", response.status);

      const res = await response.json();

      console.log("Response : ", res);
    };

    reader.readAsDataURL(data.image[0]);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Category Name"
          {...register("name", { required: true })}
        />
        <input
          type="file"
          placeholder="Category Image"
          {...register("image", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
