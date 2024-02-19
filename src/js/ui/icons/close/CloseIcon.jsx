import "./CloseIcon.css";

const CloseIcon = ({
  color = "var(--color-text)",
  width = "34",
  height = "34",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 200 200"
      className="close-icon"
      fill={color}
    >
      <path
        fillRule="evenodd"
        id="close-bold-svgrepo-com_1_"
        data-name="close-bold-svgrepo-com (1)"
        d="M33.449,33.449a10.967,10.967,0,0,1,15.507,0L87.736,72.229l38.779-38.779a10.966,10.966,0,1,1,15.509,15.509L103.243,87.736l38.779,38.779a10.966,10.966,0,1,1-15.508,15.509l-38.778-38.78L48.957,142.023a10.966,10.966,0,1,1-15.509-15.509l38.78-38.778L33.449,48.957a10.967,10.967,0,0,1,0-15.507Z"
      />
    </svg>
  );
};

export default CloseIcon;
