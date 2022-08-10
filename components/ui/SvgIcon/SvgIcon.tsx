import React from "react";

type SvgIconProps = {
  src: any | string;
  style?: React.CSSProperties;
};

const SvgIcon = ({ src, style }: SvgIconProps) => {
  const source = src.default;
  return (
    <span style={style} className="svg-icon">
      <img {...source} />
    </span>
  );
};

export default SvgIcon;
