import "./CloseButton.css";
import { Link } from "react-router-dom";
import { memo } from "react";

type Props = {
  path: string;
};

const CloseButton = memo<Props>(({ path }) => {
  return (
    <Link to={path}>
      <div className="close">
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          height="48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </Link>
  );
});

export default CloseButton;
