import "./EditIcon.css";

const EditIcon = ({ color = "white", width = "34", height = "34" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 79 79"
      fill={color}
      className="edit-icon"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_262"
            data-name="Rectangle 262"
            width="79"
            height="79"
            transform="translate(3935 -1793)"
            fill="#e70000"
            stroke="#a10a0a"
            strokeWidth="1"
          />
        </clipPath>
      </defs>
      <g
        id="Mask_Group_66"
        data-name="Mask Group 66"
        transform="translate(-3935 1793)"
        clipPath="url(#clip-path)"
      >
        <path
          id="edit-svgrepo-com"
          d="M82.719,10.6a11.749,11.749,0,0,0-16.616,0l-6.579,6.579L28.562,48.143a3.918,3.918,0,0,0-1.03,1.82L23.615,65.629a3.917,3.917,0,0,0,4.749,4.749L44.03,66.462a3.917,3.917,0,0,0,1.82-1.03L76.587,34.694l6.8-6.8a11.749,11.749,0,0,0,0-16.616ZM71.642,16.14a3.916,3.916,0,0,1,5.539,0l.672.672a3.917,3.917,0,0,1,0,5.539l-3.981,3.981L67.78,20Zm-9.4,9.4,6.092,6.33L41.078,59.126,32.8,61.2l2.07-8.281ZM15.666,31.331a3.916,3.916,0,0,1,3.916-3.916H39.164a3.916,3.916,0,0,0,0-7.833H19.582A11.749,11.749,0,0,0,7.833,31.331v43.08A11.749,11.749,0,0,0,19.582,86.16h43.08A11.749,11.749,0,0,0,74.412,74.411V54.829a3.916,3.916,0,0,0-7.833,0V74.411a3.916,3.916,0,0,1-3.916,3.916H19.582a3.916,3.916,0,0,1-3.916-3.916Z"
          transform="translate(3927.167 -1800.161)"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default EditIcon;
