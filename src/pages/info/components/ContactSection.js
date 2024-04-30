import Button from "../../../atoms/buttons";
import {useNavigate} from "react-router-dom";

const ContactSection = () => {
    let navigate = useNavigate()
    const routeChange = (path) => {
        navigate(path)
    }

    return (
        <section className="h-[60vh] w-full bg-black bg-gradient-to-t from-blue-900 via-black to-black text-white w-screen" >
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-5 px-20">
                <h1 className="text-2xl text-white text-center font-semibold tracking-wide">Get in Touch</h1>
                <br />
                <p className="indent-10 w-[70%]">If you or someone you know is currently experiencing or at risk of human trafficking, it's crucial to reach out for help. Your safety and well-being are paramount, and there are organizations and support services available to assist you in exiting exploitative situations and accessing the assistance you need. Whether you're a victim of forced labor, sexual exploitation, or any form of trafficking, know that you are not alone and help is available. <br /> By reaching out to trusted individuals, hotlines, or support organizations, you can access resources such as shelter, legal assistance, counseling, and rehabilitation services. Your courage in seeking help can make all the difference in breaking free from trafficking and reclaiming your freedom and dignity. Don't hesitate to reach out – together, we can work towards ending human trafficking and ensuring a safer, more just world for all.</p>
                <Button
                    onClick={() => routeChange("/share")}
                    intent={"primary"}
                    size={"large"}
                    corner={"rectangle"}
                    className="w-48 h-14 border-2 bg-opacity-20"
                >
                    Submit Report
                </Button>
            </div>
        </section>
    );
};

export default ContactSection;