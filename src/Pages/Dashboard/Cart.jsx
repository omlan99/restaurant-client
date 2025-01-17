import React, { useState } from "react";
import useCart from "../../Hook/useCart";
import { key } from "localforage";
import { PiFlagCheckeredLight } from "react-icons/pi";
import { FaFlagCheckered, FaTrash } from "react-icons/fa";
import { TbEdit, TbEditCircle } from "react-icons/tb";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  // const [serial , setSerial] = useState(0)
  // console.log(serial)
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
       
          axiosSecure.delete(`/delete/${id}`)
          .then(res =>{
            console.log(res.data)
            if(res.data.deletedCount > 0){
                         swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            refetch()
            }
          })
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className=" w-full p-12">
      <div className="flex justify-between items-center">
        <h2>Total Items : {cart.length}</h2>
        <h1>Total Price : {totalPrice}</h1>
        <button className="btn">Pay</button>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-500" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
