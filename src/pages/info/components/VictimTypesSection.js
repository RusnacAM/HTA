const VictimTypesSection = () => {
    return (
        <section className="h-[90vh] w-full bg-black bg-gradient-to-r from-blue-900 via-black to-black text-white w-screen" >
            <div className="w-full h-full flex flex-row justify-between items-center gap-y-5 px-20">
                <div className="w-1/2">
                    <h1 className="text-2xl text-white text-center font-semibold tracking-wide"><span className="text-teal-900">Identify</span> Human Trafficking Victims</h1>
                    <br />
                    <p className="indent-10">Victims of human trafficking may exhibit any of the following few characteristics:</p>
                </div>
                <ul className="w-1/2 ps-10 flex flex-col justify-start items-start font-semibold text-lg tracking-wider leading-relaxed list-disc">
                    <li>Evidence of being controlled either physically or psychologically</li>
                    <li>Inability to leave home or place of work</li>
                    <li>Inability to speak for oneself or share one’s own information</li>
                    <li>Information is provided by someone accompanying the individual</li>
                    <li>Loss of control of one’s own identification documents (ID or passport)</li>
                    <li>Have few or no personal possessions</li>
                    <li>Loss of sense of time or space, not knowing where they are or what city or state they are in</li>
                </ul>
            </div>
        </section>
    );
};

export default VictimTypesSection;