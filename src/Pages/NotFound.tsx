import Footer from '@/Components/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-bg h-screen overflow-hidden flex flex-col justify-between">
      {/* <Navigation /> */}
      <div className="relative top-[10vh] mt-[10vh] max-w-[1100px] mx-auto grid place-content-center space-y-6">
        <div className="text-2xl min-[500px]:text-3xl lg:text-5xl text-textgrey font-header font-bold flex items-center flex-col">
          <p className="text-accent">OOps...</p>
          <p>Page Not Found.</p>
        </div>
        <div className="px-4 py-2 text-3xl text-text font-body font-bold border border-accent rounded-sm w-max mx-auto cursor-pointer hover:text-accent hover:border-text">
          <Link to={'/'}>Get Back</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
