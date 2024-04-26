import { FaFacebook } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {

    const bgImg = {
        backgroundImage: `url('https://i.ibb.co/XXXJ9Bq/footer-1.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // backgroundPosition: 'center'
    }

    return (
        <div style={bgImg} className="py-20">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
                <div className="space-y-4 px-4">
                    <img src="https://i.ibb.co/DRpK5H2/coffee-2.png" alt="" />
                    <h1 className="text-5xl font-bold text-[#331A15]">Coffee House</h1>
                    <p className="font-raleway font-medium">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex gap-4">
                        <span className="text-4xl text-[#331A15] rounded-full"><FaFacebook /></span>
                        <span className="text-4xl text-[#331A15] rounded-full"><SiInstagram /></span>
                        <span className="text-4xl text-[#331A15] rounded-full"><FaLinkedinIn /></span>
                        <span className="text-4xl text-[#331A15] rounded-full"><FaTwitter /></span>
                    </div>
                    <div className="text-[#331A15] font-medium pt-4 space-y-2 text-xl">
                        <h2 className="text-4xl font-bold">Get In Touch</h2>
                        <p className="flex items-center gap-4"><span><FaPhoneAlt /> </span>+8542240-454125</p>
                        <p className="flex items-center gap-4"><span><MdEmail /></span>info@gmail.com</p>
                        <p className="flex items-center gap-4"><span><FaLocationDot /></span>37, Wall Street, Zurich, Switzerland</p>
                    </div>
                </div>
                <div className="flex items-center flex-col">
                    <h1 className="text-4xl font-bold text-[#331A15] mb-4">Contact With Us</h1>
                    <form className="w-[80%] space-y-4">
                        <input className="w-full p-3" type="text" placeholder="Your Name"/>
                        <br />
                        <input className="w-full p-3" type="email" placeholder="Your Email" />
                        <br />
                        <textarea className="w-full p-3" name="" id="" cols="10" rows="10" placeholder="Message"></textarea>
                        <button className="py-2 px-4 border-2 border-[#331A15] text-[#331A15] rounded-full text-xl font-semibold">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;