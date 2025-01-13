import Navbar from '@/components/Navbar';
import ScrollToTopBtn from '@/components/ScrollToTopBtn';
import ThemeToggle from '@/components/ThemeToggle';

const layout = ({ children }) => {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />
      <ScrollToTopBtn />
      <ThemeToggle />
      <div className='bg-base-200 h-full'>{children}</div>
    </div>
  );
};
export default layout;