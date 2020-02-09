import React from "react";
import { CircularProgressbar } from 'react-circular-progressbar';

const CustomCircularProgressbar = props => {
  const { children, ...otherProps } = props;

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <CircularProgressbar {...otherProps} />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "absolute",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CustomCircularProgressbar;
