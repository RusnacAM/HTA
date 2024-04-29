import {MdGroups} from "react-icons/md";
import {IoFootsteps} from "react-icons/io5";
import {HiOutlineBuildingLibrary} from "react-icons/hi2";
import {FaAddressCard} from "react-icons/fa";

const FactorsSection = () => {
    return (
        <section className="h-[90vh] w-full bg-black text-white w-screen" >
            <div className="w-full h-full flex flex-row justify-between items-center gap-y-5 px-20">
                <div className="w-1/2">
                    <h1 className="text-2xl text-white text-center font-semibold tracking-wide"><span className="text-teal-900">Factors</span> of Modern Day Trafficking</h1>
                    <br />
                    <p className="indent-10">While trafficking is an ancient practice, some modern forces have intensified its prevalence. From economic disparities and globalization to gender inequality and political instability, the roots of trafficking run deep within our societal structures. Understanding these contributing factors is essential to developing effective strategies for prevention, intervention, and eradication of this pervasive crime.</p>
                </div>
                <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-2 h-full content-center pe-24">
                    <div className="h-56 w-56 bg-gradient-to-tr from-slate-900 to-blue-900 p-2 text-white space-y-4 text-sm">
                        <div className="flex flex-row justify-start gap-2">
                            <MdGroups size={24} />
                            <h1 className="font-bold tracking-wide">Rapid Population Growth</h1>
                        </div>
                        <p>Especially in developing nations, has outstripped economic growth, rendering many vulnerable to exploitation.</p>
                    </div>
                    <div className="h-56 w-56  bg-gradient-to-tr from-slate-900 to-blue-900 p-2 text-white space-y-4 text-sm">
                        <div className="flex flex-row justify-start gap-2">
                            <IoFootsteps size={24} />
                            <h1 className="font-bold tracking-wide">Migration</h1>
                        </div>
                        <p>The mass movement of individuals seeking better opportunities has made many susceptible to traffickers posing as job recruiters.</p>
                    </div>
                    <div className="h-56 w-56  bg-gradient-to-tr from-slate-900 to-blue-900 p-2 text-white space-y-4 text-sm">
                        <div className="flex flex-row justify-start gap-2">
                            <HiOutlineBuildingLibrary size={24} />
                            <h1 className="font-bold tracking-wide">Government Corruption</h1>
                        </div>
                        <p>Without robust governance and policing and frameworks for holding goverments accountable, many regions become breeding grounds for human trafficking and slavery.</p>
                    </div>
                    <div className="h-56 w-56 bg-gradient-to-tr from-slate-900 to-blue-900 p-2 text-white space-y-4 text-sm">
                        <div className="flex flex-row justify-start gap-2">
                            <FaAddressCard size={24} />
                            <h1 className="font-bold tracking-wide">Social Discrimination</h1>
                        </div>
                        <p>Inequalities based on race, gender, tribe, or caste can intensify vulnerabilities.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FactorsSection;
