import { TrailerModalBox } from "_Playground/StyledComponents/home.styled";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import ErrorAPI from "Components/ErrorAPI/ErrorAPI";

type Props = {
  children?: React.ReactNode;
  trailer?: string;
  image?: string;
  onClose?: any;
};

const TrailerModal = ({ trailer, image, onClose }: Props) => {
  return (
    <TrailerModalBox>
      {trailer && trailer.includes("http") ? (
        <iframe
          width="100%"
          height="100%"
          src={trailer}
          title="YouTube video player"
          style={{ border: "none", display: "block" }}
        ></iframe>
      ) : image ? (
        <div style={{ width: "100%", height: "100%", display: "block" }}>
          <CloseIcon
            sx={{
              position: "absolute",
              right: 0,
              color: "secondary.light",
              fontSize: "2.5rem",
              cursor: "pointer",
            }}
            onClick={() => onClose()}
          />
          <img
            width="100%"
            height="100%"
            src={image}
            alt={image}
            style={{ border: "none", display: "block" }}
          />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            backgroundColor: "#ccc",
          }}
        >
          <ErrorAPI />
        </div>
      )}
    </TrailerModalBox>
  );
};

export default TrailerModal;
