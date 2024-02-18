import "./TrashIcon.css";

const TrashIcon = ({ color = "gray", width = "34", height = "34" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 100 102"
      className="trash-icon"
    >
      <path
        d="M18.8,28.2H94m-18.8,0-1.272-3.816c-1.233-3.7-1.849-5.547-2.992-6.914a9.4,9.4,0,0,0-3.77-2.718c-1.659-.652-3.607-.652-7.505-.652H53.14c-3.9,0-5.847,0-7.505.652a9.4,9.4,0,0,0-3.77,2.718c-1.143,1.367-1.76,3.216-2.992,6.914L37.6,28.2m47,0V76.14c0,7.9,0,11.845-1.537,14.861A14.1,14.1,0,0,1,76.9,97.163C73.885,98.7,69.937,98.7,62.04,98.7H50.76c-7.9,0-11.845,0-14.861-1.537A14.1,14.1,0,0,1,29.737,91C28.2,87.985,28.2,84.037,28.2,76.14V28.2M65.8,47V79.9M47,47V79.9"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="9.4"
        className="trash-icon"
      />
    </svg>
  );
};

export default TrashIcon;
