import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const price = form.price.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        const newCoffee = { name, chef, price, taste, category, details, photoURL };

        console.log(newCoffee);

        fetch('http://localhost:5000/addCoffee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <Link to="/">
                <h2 className="w-[90%] lg:w-[70%] mx-auto text-2xl text-[#374151] font-semibold flex items-center gap-4 mt-6"><FaLongArrowAltLeft /> Back to home</h2>
            </Link>
            <div className="w-[90%] lg:w-[70%] mx-auto text-center my-12 p-4 md:p-12 bg-[#F4F3F0] space-y-6 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-[#374151] mt-8 md:mt-0">Add New Coffee</h2>
                <p className="font-raleway font-medium">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                <form onSubmit={handleAddCoffee} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control md:mb-4">
                            <label className="label">
                                <span className="label-text text-[#331A15] font-bold text-xl">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered text-xl" required />
                        </div>
                        <div className="form-control md:mb-4">
                            <label className="label">
                                <span className="label-text text-[#331A15] font-bold text-xl">Chef</span>
                            </label>
                            <input type="text" name="chef" placeholder="Enter chef name" className="input input-bordered text-xl" required />
                        </div>
                        <div className="form-control md:mb-4">
                            <label className="label">
                                <span className="label-text text-[#331A15] font-bold text-xl">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered text-xl" required />
                        </div>
                        <div className="form-control md:mb-4">
                            <label className="label">
                                <span className="label-text text-[#331A15] font-bold text-xl">Taste</span>
                            </label>
                            <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered text-xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#331A15] font-bold text-xl">Category</span>
                            </label>
                            <input type="text" name="category" placeholder="Enter coffee categroy" className="input input-bordered text-xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#331A15] font-bold text-xl">Details</span>
                            </label>
                            <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered text-xl" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#331A15] font-bold text-xl">Photo</span>
                        </label>
                        <input type="text" name="photoURL" placeholder="Enter photo URL" className="input input-bordered text-xl" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#D2B48C] border-[#331A15] text-[#331A15] text-xl">Add Coffee</button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddCoffee;