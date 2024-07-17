import { HoverEffect } from './ui/Card-hover-effect';
import { services } from '@/Data/Data';

const ServicesCard = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={services} />
    </div>
  );
};

export default ServicesCard;
