import { memo } from "react";
import "./BackMoveObject.css";

const BackMoveObject = memo(() => {
  return (
    <div className="bg">
      <div id="object1" className="object"></div>
      <div id="object2" className="object"></div>
      <div id="object3" className="object"></div>
    </div>
  );
});

export default BackMoveObject;
