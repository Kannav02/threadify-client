import avatarImage from "../images/avatars/image-maxblagun.png";
const PostEditor=() => {
  return(
    <div className="p-4 m-4 h-40 w-3/4 rounded-lg bg-white shadow-lg flex items-start">
        <div className="mr-2 h-8 w-8">
            <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="mx-4 w-4/5 h-full">
            <textarea
            className="mx-3 h-full p-2 w-4/5 resize-none focus:outline-none"
            placeholder="Add a comment"/>
        </div>
        <div>
            <button className="bg-primary-moderateBlue text-white hover:text-primary-moderateBlue hover:bg-primary-lightGrayishBlue 
            transition-colors duration-300 w-24 p-3 rounded-md">
                Send
            </button>
        </div>

    </div>
  )
}
export default PostEditor