import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="bg-[#372727]">
            <div className="max-w-6xl mx-auto navbar text-white">
                <div className="flex-1">
                    <a href="/" className="btn btn-ghost text-2xl md:text-4xl pl-0">
                        <img className="h-[55px]" src="https://i.ibb.co/DRpK5H2/coffee-2.png" alt="" />
                        Coffee House</a>
                </div>
                <div className="mr-6 text-lg font-semibold lg:mr-24 lg:text-3xl">
                    <Link to='/users'>
                        <button>Users</button>
                    </Link>
                </div>
                <div className="flex-none font-raleway font-semibold">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        {user ? (
                            <div className="w-12 h-12 mr-2 md:mr-8">
                                <img className="w-full h-full rounded-full" src="https://i.ibb.co/TmsrwQs/user.png" alt="" />
                            </div>
                        ) : (
                            <Link to='/login'>
                                <li className="mr-8">Login</li>
                            </Link>
                        )}
                        {user && (
                            <button onClick={handleLogout}>Logout</button>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;