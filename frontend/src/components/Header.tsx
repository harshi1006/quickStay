import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-brown py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-golden font-bold tracking-tight">
          <Link to="/">QuickStay.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-golden px-3 font-bold hover:bg-brown"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-golden px-3 font-bold hover:bg-brown"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center text-golden px-3 font-bold hover:bg-lightBrown hover:text-brown rounded-md"

            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
