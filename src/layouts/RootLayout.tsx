import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-darkBackground">
      <Navbar />
      <main className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
