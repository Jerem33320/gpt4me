import { SiOpenaigym } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

const SidebarHeader = () => {
  return (
    <div className='flex items-center mb-4 gap-4 px-4'>
      <Link href='/'>
        <SiOpenaigym className='w-10 h-10 text-primary' />
      </Link>
      <h2 className='text-xl font-extrabold text-primary mr-auto'>GPT4Me</h2>
      <ThemeToggle />
    </div>
  );
};
export default SidebarHeader;