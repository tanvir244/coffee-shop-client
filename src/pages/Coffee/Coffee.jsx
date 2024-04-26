import { IoEye } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, chef, price, photoURL } = coffee;

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-shop-server-nu-one.vercel.app/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = coffees.filter(cof => cof._id !== id);
                            setCoffees(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div className="w-full h-[210px] flex items-center bg-[#F5F4F1] p-4 gap-4 shadow-xl">
            <div className="w-[30%] h-full">
                <img className="h-full w-full object-cover" src={photoURL} alt="" />
            </div>
            <div className="w-[60%] space-y-2 lg:space-y-4 font-raleway">
                <p><span className="font-bold">Name:</span> {name}</p>
                <p><span className="font-bold">Chef:</span> {chef}</p>
                <p><span className="font-bold">Price:</span> {price} Taka</p>
            </div>
            <div className="w-[10%]">
                <Link className="" to={`/viewPage/${_id}`}>
                    <button className="py-1 px-2 lg:py-2 lg:px-4 bg-[#D2B48C] text-white text-lg mb-2"><IoEye />
                    </button>
                </Link>
                <Link to={`/updateCoffee/${_id}`}>
                    <button className="py-1 px-2 lg:py-2 lg:px-4 bg-[#3C393B] text-white text-lg mb-2"><MdEdit />
                    </button>
                </Link>
                <button onClick={() => handleDelete(_id)} className="py-1 px-2 lg:py-2 lg:px-4 bg-[#EA4744] text-white text-lg"><MdDelete />
                </button>
            </div>
        </div>
    );
};

export default Coffee;

Coffee.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.array.isRequired,
    setCoffees: PropTypes.func.isRequired
}