import { Movie } from "Interfaces/movieInterfaces";
import { TrailerModalBox } from "_Playground/StyledComponents/home.styled";

type Props = {
  movie?: Movie | null;
  children?: React.ReactNode;
};

const TrailerModal = (props: Props) => {
  const { movie } = props;
  return (
    <TrailerModalBox>
      {movie?.trailer ? (
        <iframe
          width="100%"
          height="400"
          src={movie.trailer}
          title="YouTube video player"
          // frameborder="0"
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          // allowfullscreen
          style={{ border: "none", display: "block" }}
        ></iframe>
      ) : (
        <div></div>
      )}
    </TrailerModalBox>
  );
};

export default TrailerModal;
