const DefinitionSection = () => {
    return (
        <section className="h-[90vh] w-full bg-black bg-gradient-to-l from-blue-900 via-black to-black text-white w-screen" >
            <div className="w-full h-full flex flex-row justify-between items-center gap-y-5 px-20">
                <div className="w-1/2">
                    <h1 className="text-2xl text-white text-center font-semibold tracking-wide">What is <span className="text-teal-900">Human Trafficking?</span></h1>
                    <br />
                    <p className="indent-10">Human trafficking, also known as trafficking in persons, is a crime that involves compelling or coercing a person to provide labor or services, or to engage in commercial sex acts. The coercion can be subtle or overt, physical or psychological.  Exploitation of a minor for commercial sex is human trafficking, regardless of whether any form of force, fraud, or coercion was used.</p>
                </div>
                <img src="https://i.imgur.com/j0bKKl9.png" className="translate-x-24 w-1/2 bg-no-repeat bg-cover" alt={"Random"}  />
            </div>
        </section>
    );
};

export default DefinitionSection;