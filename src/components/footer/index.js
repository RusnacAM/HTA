import {Typography} from "@mui/material";

const Footer = () => {
    return (
        <footer className="p-10 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t-2 border-blue-gray-50 py-6 text-center md:justify-between">
            <Typography color="blue-gray" className="font-normal">
                &copy; 2024 Copyright
            </Typography>
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-teal-900 focus:text-blue-500"
                    >
                        About Us
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-teal-900 focus:text-blue-500"
                    >
                        License
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-teal-900 focus:text-blue-500"
                    >
                        Contribute
                    </Typography>
                </li>
                <li>
                    <Typography
                        as="a"
                        href="#"
                        color="blue-gray"
                        className="font-normal transition-colors hover:text-teal-900 focus:text-blue-500"
                    >
                        Contact Us
                    </Typography>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;