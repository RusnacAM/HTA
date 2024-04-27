import NewsContainer from "./NewsContainer";
import Button from "../../../atoms/buttons";
import ArrowRight from "../../../atoms/icons/light/ArrowRight";
import {newsData} from "../../news/news.data";
import {useNavigate} from "react-router-dom";

const LatestNews = () => {
    let navigate = useNavigate()
    const routeChange = (path) => {
        navigate(path)
    }

    return (
        <section className="w-screen bg-white flex justify-center items-center rounded-3xl">
            <div className="w-[80vw] pt-32 flex flex-col gap-y-10">
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl font-semibold text-start">Latest News in Trafficking</h1>
                    <Button
                        onClick={() => {routeChange("/news")}}
                        intent={"primary"}
                        size={"large"}
                        corner={"rectangle"}
                        btnIcon={"right-icon"}
                        setIcon={<ArrowRight />}
                        className="border-2 bg-opacity-50"
                    >
                        View All
                    </Button>
                </div>
                <div className="w-full flex flex-row justify-start gap-x-7 overflow-x-auto">
                    {
                        newsData.slice(0, 5).map((item) => (
                                <NewsContainer
                                    newsInfo={item}
                                />
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default LatestNews;