import CommunityExperienceContainer from "./CommunityExperienceContainer";
import Button from "../../../atoms/buttons";
import ArrowRight from "../../../atoms/icons/light/ArrowRight";
import {communityPosts} from "../../community/community.data";
import {useNavigate} from "react-router-dom";

const CommunityExperiences = () => {
    let navigate = useNavigate()
    const routeChange = (path) => {
        navigate(path)
    }

    return (
        <section className="w-screen bg-white flex justify-center items-center rounded-3xl">
            <div className="w-[80vw] py-32 flex flex-col gap-y-10">
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl font-semibold text-start">Community Experiences</h1>
                    <Button
                        onClick={() => {routeChange("/community")}}
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
                        communityPosts.slice(0, 5).map((item, index) => (

                                <CommunityExperienceContainer itemInfo={item} />
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default CommunityExperiences