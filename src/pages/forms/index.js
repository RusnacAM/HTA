import ExperienceForm from "../../components/experienceForm";

const FormsPage = () => {
    return(
        <div className="flex h-[90vh]">
            <div className="flex flex-col flex-1 h-full bg-black content-center text-white justify-center items-center">
                <h1 className="text-2xl font-semibold"><span className="text-teal-900">Share</span> Your Experience with the Community</h1>
                <br />
                <p className="indent-10 px-10">Sharing your experience with the community can be a powerful act of solidarity and empowerment. Your voice matters, and by sharing your experience, you play an invaluable role in shaping a safer and more inclusive society for all.</p>
            </div>
            <div className="flex-1 content-center">
                <ExperienceForm />
            </div>
        </div>
    )
}

export default FormsPage;