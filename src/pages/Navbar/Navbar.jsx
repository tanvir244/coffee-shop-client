
const Navbar = () => {
    return (
        <div className="bg-[#372727]">
            <div className="max-w-6xl mx-auto navbar text-white">
                <div className="flex-1">
                    <a className="btn btn-ghost text-4xl">
                        <img className="h-[55px]" src="https://i.ibb.co/DRpK5H2/coffee-2.png" alt="" />
                        Coffee House</a>
                </div>
                <div className="flex-none font-raleway font-semibold">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Sign In</a></li>
                        <li><a>Sign Up</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;