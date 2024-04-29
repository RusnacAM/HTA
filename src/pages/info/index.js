import Banner from "../home/components/Banner";
import Button from "../../atoms/buttons";
import DefinitionSection from "./components/DefinitionSection";
import TypesSection from "./components/TypesSection";
import FactorsSection from "./components/FactorsSection";
import ScaleSection from "./components/ScaleSection";
import VictimTypesSection from "./components/VictimTypesSection";
import ContactSection from "./components/ContactSection";

const InfoPage = () => {
    return (
        <>
            <DefinitionSection />
            <TypesSection />
            <FactorsSection />
            <ScaleSection />
            <VictimTypesSection />
            <ContactSection />
        </>
    );
};

export default InfoPage;