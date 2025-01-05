import Link from 'next/link';
import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <div className="navbar relative t-0 bg-base-100 display-flex justify-between">
        <Link href='/'>
            <SiOpenaigym className='w-10 h-10 text-primary' />
        </Link>
        <h2 className='text-xl font-extrabold text-primary'>GPT4Me</h2>
        <ThemeToggle />
    </div>
  );
};
export default Navbar;

