import React from "react";
import './CallBackButton.scss';
import Icon from "../../Icon/Icon";

const CallBackButton = (props) => {
  const {color, FaUser, position, borderRadius} = props;
  console.log(position)
  return (
    <div className="CallBackButton" style={{backgroundColor: color, ...position, borderRadius: borderRadius }}>
      <div className="CallBackButton-animate CallBackButton-animate-background" style={{backgroundColor: color, borderRadius: borderRadius}}></div>
      <div className="CallBackButton-animate CallBackButton-animate-border" style={{borderColor: color, borderRadius: borderRadius}}></div>
      <FaUser />
    </div>
  )
}

export default CallBackButton;