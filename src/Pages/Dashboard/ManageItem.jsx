import React from "react";
import SectionTitle from "../../Component/SectionTitle";
import useMenu from "../../Hook/UseMenu";
import { FaTrash } from "react-icons/fa";

const ManageItem = () => {
  const [menu] = useMenu();
  console.log(menu)

  return (
    <div>
      <SectionTitle
        heading={"Manage All Item"}
        subHeading={"Hurry Up"}
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full ">
                 {/* head */}
                 <thead>
                   <tr>
                     <th>Sl No</th>
                     <th>Item Image</th>
                     <th>Item Name</th>
                     <th>Price</th>
                     <th>Update</th>
                     <th>Delete</th>
                   </tr>
                 </thead>
                 <tbody>
                   {/* row 1 */}
                   {menu.map((item, idx) => (
                     <tr>
                       <td>{idx + 1}</td>
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
                       <td>
                         <button
                        //    onClick={() => handleDelete(item._id)}
                           className="btn btn-ghost btn-lg"
                         >
                           <FaTrash className="text-red-500" />
                         </button>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
