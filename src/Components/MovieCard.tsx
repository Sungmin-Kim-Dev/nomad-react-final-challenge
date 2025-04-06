import {AnimatePresence, motion} from "motion/react";
import {makeImagePath} from "../api";
import {useState} from "react";
import MovieModal from "./MovieModal";

interface MovieCardProps {
  id: number;
  title: string;
  poster: string;
}

const MovieCard = ({id, title, poster}: MovieCardProps) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <motion.div
        onClick={() => setIsClicked(true)}
        whileHover={{scale: 1.1, y: -20}}
        className="cursor-pointer flex flex-col w-3xs"
        layoutId={id.toString()}>
        <div className="aspect-[2/3] rounded-xl overflow-hidden">
          <img src={makeImagePath(poster)} alt={title} className="size-full object-cover block" />
        </div>
        <p className="text-center text-xl mt-2">{title}</p>
      </motion.div>
      {isClicked && (
        <AnimatePresence>
          <motion.div className="fixed size-full bg-zinc-800/50 top-0 left-0" onClick={() => setIsClicked(false)}>
            <MovieModal id={id} />
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default MovieCard;
