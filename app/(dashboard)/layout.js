import Navbar from '@/components/Navbar';

const layout = ({ children }) => {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />
      <div className='bg-base-200 px-6'>{children}</div>
    </div>
  );
};
export default layout;