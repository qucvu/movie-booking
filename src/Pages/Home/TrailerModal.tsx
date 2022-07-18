import { TrailerModalBox } from "_Playground/StyledComponents/home.styled";
import CloseIcon from "@mui/icons-material/Close";

type Props = {
  children?: React.ReactNode;
  trailer?: string;
  image?: string;
};

const TrailerModal = ({ trailer, image }: Props) => {
  return (
    <TrailerModalBox>
      {trailer ? (
        <iframe
          width="100%"
          height="100%"
          src={trailer}
          title="YouTube video player"
          style={{ border: "none", display: "block" }}
        ></iframe>
      ) : (
        <div></div>
      )}

      {image ? (
        <div style={{ width: "100%", height: "100%", display: "block" }}>
          <CloseIcon
            sx={{
              position: "absolute",
              right: 0,
              color: "secondary.light",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
          />
          <img
            width="100%"
            height="100%"
            src={image}
            alt={image}
            style={{ border: "none", display: "block" }}
          ></img>
        </div>
      ) : (
        <div></div>
      )}
    </TrailerModalBox>
  );
};

export default TrailerModal;
