import { useContext } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

// react icons
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-16">
                <h1 className="text-4xl font-raleway font-semibold mb-4 text-center">Please Login</h1>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered text-xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered text-xl" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#372727] text-white font-bold font-raleway">Login</button>
                        </div>

                        <div className="space-y-4 mt-2">
                            <h3 className="text-center border-b-2 pb-1 text-gray-700 font-semibold">Continue with</h3>
                            <ul className="flex gap-6 justify-center">
                                <li className="text-4xl"><button><FaGoogle /></button></li>
                                <li className="text-4xl"><button><FaGithub /></button></li>
                                <li className="text-4xl"><button><FaFacebook /></button></li>
                                <li className="text-4xl"><button><FaXTwitter /></button></li>
                            </ul>
                        </div>
                        <p className="mt-6 text-xl">Dont have an account? <Link className="text-red-500 font-bold" to='/register'>Register</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;