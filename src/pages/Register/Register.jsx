import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            // new user has been created
            const user = {email};
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        })
        .catch(error => {
            console.error(error);
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-16">
                <h1 className="text-4xl font-raleway font-semibold mb-4 text-center">Register Now !</h1>
                <div className="card shrink-0 w-[30%] shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleRegister} className="card-body">
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered text-xl" required />
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered text-xl" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered text-xl" required />
                        </div> */}
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
                            <button className="btn bg-[#372727] text-white font-bold font-raleway">Register</button>
                        </div>
                        <p className="mt-6 text-xl">Already have an account? <Link className="text-[#372727] font-bold" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;