const EmailSvg = ({ fill, width, height, viewBox }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <path
        fill={fill}
        d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"
      />
    </svg>
  );
};

EmailSvg.defaultProps = {
  fill: "currentColor",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
};

export default EmailSvg;
