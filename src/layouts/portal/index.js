import {Outlet} from "react-router-dom";
import Navbar from "../../components/navbar";

const PortalLayout = () => {
    return (
        <div className="font-montserrat text-base font-normal">
            <Navbar />
            <Outlet />
            {/*<h1>FOOTER</h1>*/}
        </div>
    )
}

export default PortalLayout;