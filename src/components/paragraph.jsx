import React from "react";
import "./styles.css";
export default function paragraph(props) {
  const { para } = props;
  return (
    <div className="paragraph">
      <p>{para}</p>
    </div>
  );
}
