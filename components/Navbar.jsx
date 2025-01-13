import Link from "next/link";
import { SiOpenaigym } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="navbar h-48 relative t-0 bg-base-100 display-flex flex-col justify-center items-center">
        <h2 className='text-xl font-extrabold text-primary'>GPT4Me</h2>
        <Link href='/'>
            <SiOpenaigym className='w-10 h-10 text-primary' />
        </Link>
    </div>
  );
};
export default Navbar;

