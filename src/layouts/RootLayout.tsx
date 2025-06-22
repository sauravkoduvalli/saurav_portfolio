import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className="flex flex-col md:min-h-screen bg-[#EEEEEE] dark:bg-[#222831]">
      <Navbar />
      <main className="flex-1 pt-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
