import React from "react";

const GrayParagraph = ({ paragraph, width, margintop, marginleft }) => (
  <div
    className="desc"
    style={{ width: width, marginTop: margintop, marginLeft: marginleft }}
  >
    <p>{paragraph}</p>
  </div>
);

export default GrayParagraph;
