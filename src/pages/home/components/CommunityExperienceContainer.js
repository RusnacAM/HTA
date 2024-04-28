const CommunityExperienceContainer = ({itemInfo}) => {
    return (
        <div className="h-[30rem] border-2 border-gray-300 rounded-xl p-4 shadow-md flex flex-col bg-white justify-start p-4 gap-5">
            <div>
                <h1 className="text-xl font-semibold w-[22rem]">{itemInfo.title}</h1>
                <h2 className="text-base font-normal">Posted By: {itemInfo.author}</h2>
            </div>

            <p className="text-ellipsis line-clamp-16 overflow-y-auto">{itemInfo.story.repeat(3)}</p>
        </div>
    )
}

export default CommunityExperienceContainer;