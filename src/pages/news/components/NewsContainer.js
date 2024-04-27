import Button from "../../../atoms/buttons";

const NewsContainer = ({index, image, title, postDate, description, onClick}) => {
    return (
        <div key={index} className="break-inside-avoid" >
            <img src={image} className="h-full max-h-96 w-[100%] object-cover" alt={"Random"}  />
            <h2 className="text-xs pt-2 font-semibold text-gray-500">{postDate}</h2>
            <h1 className="text-xl py-4 font-semibold">{title}</h1>
            <p className="text-base line-clamp-6 mb-4">{description}</p>
            <Button
                intent={"primary"}
                size={"large"}
                corner={"rectangle"}
                onClick={ () => onClick(index) }
                className="bg-opacity-70 pt-2 pb-2"
            >
                View All
            </Button>
        </div>
    );
};

export default NewsContainer;