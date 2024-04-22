import {Outlet} from "react-router-dom";

const PortalLayout = () => {
    return (
        <div className="text-3xl font-bold">
            <h1>NAV BAR</h1>
            <Outlet />
            <h1>FOOTER</h1>
        </div>
    )
}

export default PortalLayout;