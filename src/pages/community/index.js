import {NavLink} from "react-router-dom";
import CommunityContainer from "./components/CommunityContainer";
import {communityPosts} from "./community.data";
import {useEffect, useState} from "react";
import CommunityPagePopup from "./components/CommunityPagePopup";

const CommunityPage = () => {
    const [isPopupOpen, setOpen] = useState(false)
    const [clickedIndex, setClickedIndex] = useState(0)

    const handleOpenPopup = (index) => {
        setOpen(true)
        setClickedIndex(index)
    }

    const handleClosePopup = () => {
        setOpen(false)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <section className="w-screen h-44 flex justify-center items-center bg-gradient-to-t from-teal-900 to-black text-white">
                <h1 className="text-3xl font-semibold tracking-wider">
                    <NavLink
                        to={"/"}
                        className="text-blue-200 underline underline-offset-4"
                    >
                        Share
                    </NavLink>
                    &nbsp; with the Community
                </h1>
            </section>
            <div className="min-h-screen bg-gray-50 py-10 flex justify-center items-center">
                <div className="container px-6 md:px-12">
                    <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-2">
                        {communityPosts.map((item, index) => (
                            <CommunityContainer itemInfo={item} onReadMore={() => {handleOpenPopup(index)}} />
                        ))}
                    </div>
                </div>
            </div>
            <CommunityPagePopup modalState={isPopupOpen} onClose={() => handleClosePopup()} newsInfo={communityPosts[clickedIndex]} />
        </div>
    );
};

export default CommunityPage;