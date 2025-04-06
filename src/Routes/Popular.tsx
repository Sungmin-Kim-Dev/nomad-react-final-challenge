import {useQuery} from "@tanstack/react-query";
import MovieCard from "../Components/MovieCard";
import {getPopular, IGetData} from "../api";
import {motion} from "motion/react";

const boxVariants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delay: 0.5,
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  initial: {
    scale: 0.7,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
    },
  },
};

const Popular = () => {
  const {data, isLoading} = useQuery<IGetData>({queryKey: ["popular"], queryFn: getPopular});
  const movieData = data?.results;
  return (
    <>
      {isLoading ? (
        <div className="text-center text-3xl font-bold">Loading...</div>
      ) : (
        <motion.div variants={boxVariants} initial="initial" animate="animate" className="mx-auto flex flex-wrap gap-14 max-w-4xl">
          {movieData?.map((movieData) => (
            <motion.div variants={cardVariants} key={movieData.id} className="">
              <MovieCard id={movieData.id} title={movieData.title} poster={movieData.poster_path} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Popular;
