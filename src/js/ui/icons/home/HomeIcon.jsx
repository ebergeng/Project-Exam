import "./HomeIcon.css";

const HomeIcon = ({ color = "#fff", width = "34", height = "34" }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 60 60" fill={color}>
      <path
        fill={color}
        id="home-3-svgrepo-com"
        d="M6.5,31.663A3,3,0,0,1,7.338,27.5l27-18a3,3,0,0,1,3.33,0l27,18A3,3,0,0,1,63,33H57V60a3,3,0,0,1-3,3H18a3,3,0,0,1-3-3V33H9l.057-.057A2.943,2.943,0,0,1,6.5,31.663Z"
        transform="translate(-6 -8.999)"
      />
    </svg>
  );
};

export default HomeIcon;
