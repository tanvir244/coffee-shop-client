
const Banner = () => {

    const bgImg = {
        backgroundImage: `url('https://i.ibb.co/vXgxjrH/coffee-bg-8.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    return (
        <div style={bgImg} className="py-48">
            <div className="w-11/12 md:w-[60%] lg:w-[45%] mx-auto md:mr-4 lg:mr-24 space-y-4">
                <h1 className="text-5xl text-white">Would you like a Cup of Delicious Coffee?</h1>
                <p className="text-white font-raleway">Coffee is a beloved beverage known for its ability to fine-tune your focus and boost your energy levels. For most people, moderate coffee consumption can be incorporated into a healthy diet.</p>
                <button className="bg-[#E3B577] py-2 px-6 font-semibold text-xl text-[#372727]">Learn More</button>
            </div>
        </div>
    );
};

export default Banner;