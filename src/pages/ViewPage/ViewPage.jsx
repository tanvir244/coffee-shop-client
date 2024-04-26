import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ViewPage = () => {
    const id = useParams();
    const allCoffee = useLoaderData();
    const coffee = allCoffee.find(coffee => coffee._id == id.id);
    console.log(coffee);
    const {name, chef, price, taste, category, details, photoURL} = coffee;

    return (
        <div>
            <Navbar></Navbar>
            <Link to="/">
                <h2 className="w-[90%] lg:w-[70%] mx-auto text-2xl text-[#374151] font-semibold flex items-center gap-4 mt-6"><FaLongArrowAltLeft /> Back to home</h2>
            </Link>
            <div className="w-[90%] lg:w-[55%] mx-auto my-12 p-4 md:p-12 bg-[#F4F3F0] space-y-6 rounded-lg flex flex-col md:flex-row items-center gap-4 md:gap-10">
                <img src={photoURL} alt="" />
                <div className="text-2xl">
                    <h2 className="text-4xl font-bold mb-2">Niceties</h2>
                    <h4><span className="font-semibold">Name :</span> {name}</h4>
                    <h4><span className="font-semibold">Chef :</span> {chef}</h4>
                    <h4><span className="font-semibold">Price :</span> {price} Taka</h4>
                    <h4><span className="font-semibold">Taste :</span> {taste}</h4>
                    <h4><span className="font-semibold">Category :</span> {category}</h4>
                    <h4><span className="font-semibold">Details :</span> {details}</h4>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ViewPage;