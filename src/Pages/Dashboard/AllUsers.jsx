import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = () => {};
  return (
    <div className="w-full px-5">
      <div className="flex justify-between ">
        <h2 className="text-3xl">All users </h2>
        <h2 className="text-3xl">Total users {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={users._id}>
                <th>{index + 1}</th>
                <td>{user.name} </td>
                <td>{user.email}</td>
                <td>
                  <button
                    
                    className="btn  btn-lg bg-orange-400 text-white text-2xl"
                  >
                    <FaUsers  />
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrash className="text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
