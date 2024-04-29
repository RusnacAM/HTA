const ScaleSection = () => {
    return (
        <section className="h-[40vh] w-full bg-black bg-gradient-to-l from-blue-900 via-black to-black text-white w-screen" >
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-5 px-20">
                <h1 className="text-2xl text-white text-center font-semibold tracking-wide">Trafficking Today</h1>
                <br />
                <div className="flex flex-row justify-center items-center gap-10">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-wide">55%</h1>
                        <p>enslaved in forced labour</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-wide">44%</h1>
                        <p>ensnared in marriages against their will</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-wide text-teal-900">49M</h1>
                        <p>trafficked individuals worldwide</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-wide">12.5%</h1>
                        <p>coerced commercial sexual exploitation</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-wide">12%</h1>
                        <p>labour cases are children</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ScaleSection;