import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/buttonReducer";
import { useState } from "react";
import avatarImage from "../images/avatars/image-maxblagun.png";

const Post = () => {
  // generate a reducer function for this 
  const [isMenu,setIsMenu]=useState(false)
  const counter = useSelector((state) => state.buttonCounter);
  const dispatch = useDispatch();

  return (
    <div className="p-4 m-4 h-40 w-3/4 rounded-lg bg-white shadow-lg flex items-center">
      <div className="bg-neutral-lightGray p-3 flex flex-col justify-between w-8 rounded-lg">
        <button onClick={() => dispatch(increment())}>
          <svg
            width="11"
            height="11"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:text-purple"
          >
            <path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF" />
          </svg>
        </button>
        <span className="py-2 text-primary-moderateBlue font-bold">{counter}</span>
        <button onClick={() => dispatch(decrement())}>
          <svg
            width="11"
            height="3"
            xmlns="http://www.w3.org/2000/svg"
            className="hover:fill-purple"
          >
            <path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF" />
          </svg>
        </button>
      </div>
      <div className="ml-6 w-full h-full flex flex-col items-start">
        <div className="flex w-11/12 justify-between ">
        {/* Box for the information */}
                <div className="flex justify-between items-start">
                {/* image wrapper */}
                    <div className="mr-2 h-8 w-8">
                        <img src={avatarImage} alt="Avatar" />
                    </div>
                    <p className="my-2 mr-2 text-xs font-bold">Kannav123</p>
                    {/* conditional rendering for the span */}
                    <span className="my-2 mr-2 w-10 rounded-lg text-center text-xs bg-primary-moderateBlue text-white">You</span>
                    <p className="my-2 text-xs font-bold text-neutral-grayishBlue">Random Time </p>
                </div>
            <div className="flex justify-between">
                <button className="font-bold w-14 h-full text-primary-moderateBlue text-sm flex justify-between items-center">
                <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg>
                Reply
                </button>
                <button onClick={()=>{setIsMenu(!isMenu)}} className="text-xs align-middle ml-2 text-neutral-grayishBlue">
                ...
                </button>
                {isMenu &&  (
                  <div className="absolute top-12 right-48 mt-2 w-24 rounded-lg shadow-lg">
                {/* Dropdown menu content */}
                <button className=" rounded-sm block w-full text-left px-4 py-2 text-sm bg-primary-moderateBlue text-white hover:text-primary-moderateBlue hover:bg-primary-lightGrayishBlue transition-colors duration-300">Edit</button>
                <button className="rounded-sm block w-full text-left px-4 py-2 text-sm bg-primary-moderateBlue text-white hover:text-primary-moderateBlue hover:bg-primary-lightGrayishBlue transition-colors duration-300">Delete</button>
              </div>

                )}
            </div>
        </div>
        <div className="">
        <p>L
freestar
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque scelerisque lacus nulla, eget dignissim ex pulvinar eget. Aenean sit amet dictum tellus. Quisque at interdum tellus, ut faucibus ligula. Suspendisse tempus ullamcorper lobortis. Vestibulum sed fermentum sapien, id posuere ex. Cras risus neque, pharetra eu aliquam sit amet, cursus sit amet neque. Duis lacinia sollicitudin vestibulum. Pellentesque tincidunt elit id imperdiet aliquam. Nullam vel odio quis velit accumsan mollis.</p>

        </div>
        </div>
    </div>
  );
};

export default Post;