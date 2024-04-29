const TypesSection = () => {
    return (
        <section className="h-[90vh] w-full bg-black bg-gradient-to-r from-blue-900 via-black to-black text-white w-screen" >
            <div className="w-full h-full flex flex-row justify-between items-center gap-y-5 px-20">
                <div className="w-1/2">
                    <h1 className="text-2xl text-white text-center font-semibold tracking-wide"><span className="text-teal-900">Types</span> of Human Trafficking</h1>
                    <br />
                    <p className="indent-10">Human trafficking is often broken into two broad categories – sex trafficking and labor trafficking.  In reality, sex trafficking is also a form of forced labor and labor trafficking, however they are often treated and discussed as distinct from each other.</p>
                </div>
                <ul className="w-1/2 flex flex-col justify-center items-end font-semibold text-lg tracking-wider leading-relaxed">
                    <li>Sex Trafficking</li>
                    <li>Forced Labour</li>
                    <li>Debt Bondage</li>
                    <li>Involuntary Domestic Servitude</li>
                    <li>Unlawful Recruitment & Use of Child Soldiers</li>
                </ul>
            </div>
        </section>
    );
};

export default TypesSection;