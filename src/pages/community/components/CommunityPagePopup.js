import {Box, Modal} from "@mui/material";
import {CgClose} from "react-icons/cg";

const CommunityPagePopup = ({ modalState, onClose, newsInfo }) => {
    return (
        <Modal
            open={modalState}
            onClose={() => onClose()}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box className="w-[50%] h-[100%] p-5 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-5 rounded-xl overflow-scroll">
                <div className="w-full py-2 flex justify-end items-end cursor-pointer">
                    <CgClose
                        size={20}
                        onClick={() => onClose()}
                    />
                </div>
                <h1 className="text-xl font-semibold">{newsInfo.title}</h1>
                <h2 className="text-xs pt-1 font-semibold text-gray-500">Posted By: {newsInfo.author}</h2>
                <p className="text-base py-4 mb-4">{newsInfo.story.repeat(10)}</p>
            </Box>
        </Modal>
    );
};

export default CommunityPagePopup;