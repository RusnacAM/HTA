import Button from "../../../atoms/buttons";
import {useNavigate} from "react-router-dom";

const Banner = () => {
    let navigate = useNavigate()
    const routeChange = (path) => {
        navigate(path)
    }

    return (
        <section className="h-[90vh] rounded-b-xl bg-gray-300 bg-no-repeat bg-cover w-screen bg-[url('http://i.imgur.com/oke2LuI.png')]" >
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-5">
                <h1 className="text-4xl text-white text-center font-semibold tracking-wide">Turning Awareness into Action: <br /> Join the Fight Against Human Trafficking</h1>
                <Button
                    onClick={() => routeChange("/share")}
                    intent={"primary"}
                    size={"large"}
                    corner={"rectangle"}
                    className="w-48 h-14 border-2 bg-opacity-50"
                >
                    Take Action Today
                </Button>
            </div>
        </section>
    );
};

export default Banner;