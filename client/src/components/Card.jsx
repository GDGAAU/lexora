import React from "react";

const Card = (props) => {
  return (
    <>
      <div className={`${props.cardStyle} shadow-sm rounded-md`}>
        {props.children}
      </div>
    </>
  );
};

export default Card;
