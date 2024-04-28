import {Route, Routes} from "react-router-dom";
import PortalLayout from "../../layouts/portal";
import HomePage from "../../pages/home";
import AboutPage from "../../pages/about";
import NewsFeed from "../../pages/news";
import CommunityPage from "../../pages/community";

const Router = () => (
    <Routes>
        <Route element={<PortalLayout />}>
            <Route index element={<HomePage />} />
            <Route path="news" element={<NewsFeed />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="about" element={<AboutPage />} />
        </Route>
    </Routes>
)

export default Router;