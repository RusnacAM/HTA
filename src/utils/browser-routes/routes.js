import {Route, Routes} from "react-router-dom";
import PortalLayout from "../../layouts/portal";
import HomePage from "../../pages/home";
import AboutPage from "../../pages/about";

const Router = () => (
    <Routes>
        <Route path="/" element={<PortalLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
        </Route>
    </Routes>
)

export default Router;