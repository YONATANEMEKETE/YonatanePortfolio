import DotPattern from '../magicui/dot-pattern';
import { cn } from '@/libs/utils';

const BgPattern = () => {
  return (
    <>
      <DotPattern
        className={cn(
          '[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] -z-10 h-screen'
        )}
      />
    </>
  );
};

export default BgPattern;
