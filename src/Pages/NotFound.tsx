import Footer from '@/Components/Footer';
import Navigation from '@/Components/Navigation';

const NotFound = () => {
  return (
    <div className="bg-bg">
      <Navigation />
      <div className="w-full h-[60vh] lg:h-[50vh] pt-[30vh] max-w-[1100px] mx-auto grid place-content-center">
        <div className="text-3xl min-[500px]:text-5xl lg:text-7xl text-textgrey font-header font-bold flex items-center flex-col">
          <p className="text-accent">OOps...</p>
          <p>Page Not Found.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
