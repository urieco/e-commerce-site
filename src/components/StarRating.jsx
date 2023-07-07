import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const StarRating = ({ id, initialRating, totalRating}) => {
  const [userRating, setUserRating] = useState(0);

  const starWidth = !userRating
    ? (initialRating / 5) * 100
    : (userRating / 5) * 100;

  useEffect(() => {
    document.querySelectorAll(`.star-rating[data-rating-id="${id}"]`).forEach((el) => {
      const mouseOverHandler = (e) =>
        setUserRating(e.currentTarget.getAttribute("data-rating"));
      const mouseLeaveHandler = () => setUserRating(0);

      el.addEventListener("mouseover", mouseOverHandler);
      el.addEventListener("mouseleave", mouseLeaveHandler);

      el.addEventListener("click", (e) => {
        mouseOverHandler(e);
        el.removeEventListener("mouseover", mouseOverHandler);
        el.removeEventListener("mouseleave", mouseLeaveHandler);
      });
    });
  });

  return (
    <div className="w-fit relative -bottom-2 left-4 flex mx-2 scale-125">
      <div className="relative">
        <div
          className="absolute flex overflow-hidden z-0"
          style={{ width: `${starWidth}%` }}
        >
          <AiFillStar className="flex-shrink-0 fill-yellow-400" />
          <AiFillStar className="flex-shrink-0 fill-yellow-400" />
          <AiFillStar className="flex-shrink-0 fill-yellow-400" />
          <AiFillStar className="flex-shrink-0 fill-yellow-400" />
          <AiFillStar className="flex-shrink-0 fill-yellow-400" />
        </div>
        <div className=" flex relative cursor-pointer">
          <AiOutlineStar data-rating="1" data-rating-id={id} className="star-rating" />
          <AiOutlineStar data-rating="2" data-rating-id={id} className="star-rating" />
          <AiOutlineStar data-rating="3" data-rating-id={id} className="star-rating" />
          <AiOutlineStar data-rating="4" data-rating-id={id} className="star-rating" />
          <AiOutlineStar data-rating="5" data-rating-id={id} className="star-rating" />
        </div>
      </div>
      <span className="font-extralight relative -top-[0.30rem] scale-75">
        {" "}
        {userRating ? (
          <span className="text-yellow-500 font-semibold">
            {userRating}
          </span>
        ) : (
          initialRating
        )}{" "}
        ({totalRating})
      </span>
    </div>
  );
};

StarRating.propTypes = {
  id: PropTypes.string,
  initialRating: PropTypes.number,
  totalRating: PropTypes.number,
};

StarRating.defaultProps = {
  initialRating: 3.47,
  totalRating: 45,
};

export { StarRating };
