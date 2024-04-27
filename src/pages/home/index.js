import Banner from "./components/Banner";
import MissionStatement from "./components/MissionStatement";
import LatestNews from "./components/LatestNews";
import CommunityExperiences from "./components/CommunityExperiences";
import Footer from "../../components/footer";

const HomePage = () => {
    return(
        <div className="font-montserrat text-base font-normal">
            <Banner />
            <MissionStatement />
            <LatestNews />
            <CommunityExperiences />
            <Footer />
        </div>
    );
};

export default HomePage;