import React from "react";
import SectionTitle from "../../Component/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
const image_hosting_key = import.meta.env.VITE_image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset()
        Swal.fire({
          position: "top",
          icon: "success",
          title: `${data.name} added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };

  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"what's new"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
            <div className="label"></div>
          </label>
          <div className="flex gap-6">
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">Select a Category</span>
              </div>
              <select
                defaultValue={"value"}
                className="select select-bordered w-full "
                {...register("category")}
              >
                <option disabled value="value">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drink">Drink</option>
              </select>
              <div className="label"></div>
            </label>
            <label className="form-control w-full my-6">
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                {...register("price")}
                type="text"
                placeholder="Price"
                className="input input-bordered w-full"
              />
              <div className="label"></div>
            </label>
          </div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <div className="form-control w-full my-6">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn ">
            Add Item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
