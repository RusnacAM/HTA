import ArrowRight from "../../atoms/icons/light/ArrowRight";
import Button from "../../atoms/buttons";
import {useEffect, useState} from "react";
import Popup from "./components/Popup";
import NewsContainer from "./components/NewsContainer";
import {newsData} from "./news.data";

const NewsFeed = () => {
    const [open, setOpen] = useState(false)
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
        <div className="">
            <section className="w-screen h-44 flex justify-center items-center bg-gradient-to-t from-teal-900 to-black text-white">
                <h1 className="text-3xl font-semibold tracking-wider">Latest News in Trafficking</h1>
            </section>
            <div className="min-h-screen bg-gray-50 py-10 flex justify-center items-center">
                <div className="container px-6 md:px-12">
                    <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
                        {newsData.map((item, index) => (
                            <NewsContainer
                                index={item.id}
                                image={item.image}
                                title={item.title}
                                postDate={item.date}
                                description={item.description}
                                onClick={() => handleOpenPopup(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Popup modalState={open} onClose={() => handleClosePopup()} newsInfo={newsData[clickedIndex]} />
        </div>
    );
};

export default NewsFeed;