import {Link, useMatch} from "react-router";
import {motion} from "motion/react";

const Circle = () => {
  return <motion.div layoutId="circle" className="mx-auto mt-2 size-1.5 rounded-full bg-red-400"></motion.div>;
};

const Header = () => {
  const homeMatch = useMatch("/");
  const comingMatch = useMatch("/coming-soon");
  const nowMatch = useMatch("/now-playing");
  return (
    <div className="fixed top-0 w-full bg-zinc-800">
      <ul className="flex justify-center gap-7 font-bold text-xl p-6">
        <li>
          <Link to="/">Popular {homeMatch && <Circle />}</Link>
        </li>
        <li>
          <Link to="coming-soon">Coming Soon {comingMatch && <Circle />}</Link>
        </li>
        <li>
          <Link to="now-playing">Now Playing {nowMatch && <Circle />}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
