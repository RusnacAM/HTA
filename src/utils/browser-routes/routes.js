import {Route, Routes} from "react-router-dom";
import PortalLayout from "../../layouts/portal";
import HomePage from "../../pages/home";
import FormsPage from "../../pages/forms";
import NewsFeed from "../../pages/news";
import CommunityPage from "../../pages/community";
import InfoPage from "../../pages/info";

const Router = () => (
    <Routes>
        <Route element={<PortalLayout />}>
            <Route index element={<HomePage />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="news" element={<NewsFeed />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="share" element={<FormsPage />} />
        </Route>
    </Routes>
)

export default Router;