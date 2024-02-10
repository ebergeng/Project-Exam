const HamburgerIcon = ({ color = "#f4f4f4", width = "34", height = "34" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 43"
      fill={color}
      className="hamburger-icon"
    >
      <g
        id="Group_30"
        data-name="Group 30"
        transform="translate(-3730.077 1706.923)"
      >
        <g
          id="Rectangle_210"
          data-name="Rectangle 210"
          transform="translate(3730.077 -1706.923)"
          fill="none"
          stroke={color}
          strokeWidth="4"
        >
          <rect width="43" height="43" rx="10" stroke="none" />
          <rect x="2" y="2" width="39" height="39" rx="8" fill="none" />
        </g>
        <line
          id="Line_41"
          data-name="Line 41"
          x2="26.487"
          transform="translate(3738.333 -1691.423)"
          fill="none"
          stroke={color}
          strokeWidth="4"
        />
        <line
          id="Line_44"
          data-name="Line 44"
          x2="26.487"
          transform="translate(3738.333 -1679.423)"
          fill="none"
          stroke={color}
          strokeWidth="4"
        />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
