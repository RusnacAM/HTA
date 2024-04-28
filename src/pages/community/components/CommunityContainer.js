import Button from "../../../atoms/buttons";
import {AiFillHeart} from "react-icons/ai";
import {useState} from "react";

const CommunityContainer = ({ itemInfo, onReadMore }) => {
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
    };

    return (
        <div key={itemInfo.index} className="break-inside-avoid border-2 border-gray-300 rounded-xl p-4 shadow-md">
            <h1 className="text-xl font-semibold">{itemInfo.title}</h1>
            <h2 className="text-xs pt-2 font-semibold text-gray-500">Posted By: {itemInfo.author}</h2>
            <p className="text-base pt-2 line-clamp-16 mb-4">{itemInfo.story.repeat(4)}</p>
            <div className="flex flex-row justify-between items-center">
                <Button
                    intent={"primary"}
                    size={"large"}
                    corner={"rectangle"}
                    onClick={() => { onReadMore() }}
                    className="bg-opacity-70 pt-2 pb-2"
                >
                    Read More
                </Button>
                <div className="flex flex-row gap-2">
                    <AiFillHeart
                        size={24}
                        onClick={() => { handleClick() }}
                        color={liked && "red"}
                        className="text-gray-400 cursor-pointer"
                    />
                    <p className="text-base font-semibold text-gray-400">{liked ? (itemInfo.likes + 1) : itemInfo.likes} likes</p>
                </div>
            </div>
        </div>
    );
};

export default CommunityContainer;