import Banner from "../home/components/Banner";
import Button from "../../atoms/buttons";

const InfoPage = () => {
    return (
        <section className="h-[90vh] bg-black bg-gradient-to-l from-blue-900 via-black to-black text-white w-screen" >
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-5">
                <h1 className="text-4xl text-white text-center font-semibold tracking-wide">Turning Awareness into Action: <br /> Join the Fight Against Human Trafficking</h1>
                <Button
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

export default InfoPage;