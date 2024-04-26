import { GiCoffeeCup } from "react-icons/gi";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Coffee from "../Coffee/Coffee";
import { useState } from "react";

const Products = ({ allCoffee }) => {
    const [coffees, setCoffees] = useState(allCoffee);

    const bgImg = {
        backgroundImage: `url('https://i.ibb.co/k1XVXSf/coffee-bg-1.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }

    return (
        <div style={bgImg} className="py-8">
            <div className="w-[94%] md:max-w-5xl mx-auto">
                <h1 className="text-[#331A15] text-center text-6xl md:text-4xl font-bold mb-4">Our Popular Products</h1>
                <Link to="/addCoffee">
                    <p className="w-40 mx-auto flex gap-2 text-center text-xl font-bold py-4 px-6 bg-[#E3B577] border-2 border-[#331A15]">Add Coffee <span className="text-2xl text-[#331A15]"><GiCoffeeCup /></span></p>
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    {
                        Array.isArray(coffees) ? (
                            coffees.map(coffee => <Coffee
                                key={coffee._id}
                                coffee={coffee}
                                coffees={coffees}
                                setCoffees={setCoffees}
                            ></Coffee>
                            )
                        ) : (
                            <p>No coffees available.</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;

Products.propTypes = {
    allCoffee: PropTypes.array.isRequired
}