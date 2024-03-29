import "./WifiIcon.css";

const WifiIcon = ({ color, width = "34", height = "34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill={color}
      className="wifi-icon"
    >
      <path
        id="wifi-_1018_"
        data-name="wifi-[#1018]"
        d="M25.48,10586.645a3.413,3.413,0,0,0,6.826,0c0-5.066-6.826-5.066-6.826,0m-3.828-7.16,2.415,2.379a6.885,6.885,0,0,1,9.652,0l2.415-2.379a10.288,10.288,0,0,0-14.482,0M12,10569.922l2.413,2.4a20.644,20.644,0,0,1,28.96,0l2.413-2.4a24.058,24.058,0,0,0-33.786,0m28.96,4.781-2.413,2.383a13.759,13.759,0,0,0-19.308,0l-2.413-2.383a17.173,17.173,0,0,1,24.134,0"
        transform="translate(-12 -10562.993)"
      />
    </svg>
  );
};

export default WifiIcon;
