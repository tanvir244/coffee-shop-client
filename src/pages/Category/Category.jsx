
const Category = () => {
    return (
        <div className="py-8 bg-[#ECEAE3]">
            <div className="w-[60%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                    <img src="https://i.ibb.co/897sPtM/coffee-icon-1.png" alt="" />
                    <h3 className="text-[#331A15] text-2xl font-semibold">Awesome Aroma</h3>
                    <p className="font-raleway font-medium">You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className="space-y-2">
                    <img src="https://i.ibb.co/k6QbhwL/coffee-icon-4.png" alt="" />
                    <h3 className="text-[#331A15] text-2xl font-semibold">High Quality</h3>
                    <p className="font-raleway font-medium">We served the coffee to you maintaining the best quality</p>
                </div>
                <div className="space-y-2">
                    <img src="https://i.ibb.co/C0hX629/coffee-icon-3.png" alt="" />
                    <h3 className="text-[#331A15] text-2xl font-semibold">Pure Grades</h3>
                    <p className="font-raleway font-medium">The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className="space-y-2">
                    <img src="https://i.ibb.co/s10TPkC/coffee-icon-2.png" alt="" />
                    <h3 className="text-[#331A15] text-2xl font-semibold">Proper Roasting</h3>
                    <p className="font-raleway font-medium">Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default Category;