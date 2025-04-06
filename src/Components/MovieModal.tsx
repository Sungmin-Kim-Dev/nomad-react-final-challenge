import {useQuery} from "@tanstack/react-query";
import {getMovie, IMovieDetail, makeBgPath} from "../api";
import {motion} from "motion/react";

interface MovieModalProps {
  id: number;
}

const MovieModal = ({id}: MovieModalProps) => {
  const {data} = useQuery<IMovieDetail>({queryKey: ["detail"], queryFn: () => getMovie(id)});

  return (
    <motion.div layoutId={id.toString()} className="w-3xl bg-zinc-900 mx-auto rounded-3xl mt-10 overflow-hidden">
      <div
        className="bg-cover bg-center w-full aspect-5/3"
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${makeBgPath(data?.backdrop_path || "")})`}}></div>
      <div className="px-8 pb-8">
        <h2 className="text-5xl font-extrabold mb-4">{data?.title}</h2>
        <p className="text-xl mb-6">{data?.overview}</p>
        <div className="text-xl">
          <p>Release Date: {data?.release_date}</p>
          <p>Budget: ${data?.budget.toLocaleString()}</p>
          <p>Revenue: ${data?.revenue.toLocaleString()}</p>
          <p>Runtime: {data?.runtime} minutes</p>
          <p>Rating: {data?.vote_average}</p>
          <p>Homepage: {data?.homepage}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieModal;
