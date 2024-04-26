import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const User = () => {
    const loadedUsers = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <div className="py-16">
                <h1 className="text-center text-4xl mb-8">Total Users: {loadedUsers.length}</h1>
                <div className="overflow-x-auto w-[50%] mx-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-xl">
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                            </tr>
                        </thead>
                        <tbody className="text-xl">
                            {
                                loadedUsers.map(user => <tr
                                key={user._id}
                                >
                                <th></th>
                                <td>{user.email}</td>
                                <td>Quality Control Specialist</td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default User;