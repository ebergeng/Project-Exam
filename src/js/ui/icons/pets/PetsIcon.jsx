import "./PetsIcon.css";

const PetsIcon = ({ color, width = "34", height = "34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill={color}
      className="pets-icon"
    >
      <path
        id="Path_45"
        data-name="Path 45"
        d="M24.428,18.122c2.2,0,3.548-3.21,3.548-5.237,0-1.689-.845-3.716-2.534-3.716-2.2,0-3.548,3.21-3.548,5.237C21.894,16.1,22.739,18.122,24.428,18.122Zm-6.419,0c1.689,0,2.534-2.027,2.534-3.716C20.543,12.21,19.191,9,17,9c-1.689,0-2.534,2.027-2.534,3.716-.169,2.2,1.183,5.406,3.548,5.406Zm12.5-1.689c-2.2,0-3.716,3.041-3.716,5.237,0,1.52.676,3.041,2.2,3.041,2.2,0,3.716-3.041,3.716-5.237C32.706,17.953,31.861,16.433,30.509,16.433Zm-14.7,5.237c0-2.2-1.689-5.237-3.716-5.237-1.52,0-2.2,1.52-2.2,3.041,0,2.2,1.689,5.237,3.716,5.237C15.137,24.71,15.813,23.19,15.813,21.67Zm5.406-.338c-3.379,0-7.94,5.406-7.94,9.122,0,1.689,1.183,2.2,2.534,2.2,2.027,0,3.548-1.351,5.406-1.351,1.689,0,3.21,1.351,5.068,1.351,1.351,0,2.872-.338,2.872-2.2C29.158,26.738,24.6,21.332,21.218,21.332Z"
        transform="translate(-9.9 -9)"
      />
    </svg>
  );
};

export default PetsIcon;
