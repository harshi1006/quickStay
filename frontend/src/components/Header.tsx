import {Link} from 'react-router-dom';
import image from "../assets/logo.png"

const Header  = () =>
{
    return(
    <div className="bg-brown py-6">
        <div className="container mx-auto flex justify-between " >
            <span className="text-3xl text-golden font-bold tracking-tight">
                <Link to="/"><img src={image} alt="" />QuickStay.com</Link>
            </span>
            <span className="flex space-x-2">
                <Link to="/sign-in" className="flex items-center bg-antiquewhite text-brown px-3 font-bold hover:bg-gray-100">
                    Sign In
                </Link>
            </span>
        </div>
    </div>
    );
}

export default Header;