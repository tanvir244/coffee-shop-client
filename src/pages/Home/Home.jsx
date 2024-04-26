import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Follow from "../Follow/Follow";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Products from "../Products/Products";

const Home = () => {
    const allCoffee = useLoaderData();
    console.log(allCoffee);
    console.log(allCoffee);
    console.log(allCoffee);

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category></Category>
            <Products
                allCoffee={allCoffee}
            ></Products>
            <Follow></Follow>
            <Footer></Footer>
        </div>
    );
};

export default Home;