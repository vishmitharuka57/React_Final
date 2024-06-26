import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-900 py-6">
      <div className="container  mx-auto flex justify-between items-center py-4">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">HotelHub.com</Link>
        </span>
        <span className="flex space-x-4">
          {isLoggedIn ? (
            <>
              <Link
                className="flex item-center text-white px-3 font-bold hover:bg-white hover:text-blue-800"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex item-center text-white px-3 font-bold hover:bg-white hover:text-blue-800"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex  items-center text-white px-3 ring-2 ring-blue-100 font-bold hover:bg-white hover:text-blue-800"
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
