import {Box, Modal} from "@mui/material";
import {CgClose} from "react-icons/cg";

const Popup = ({ modalState, onClose, newsInfo }) => {
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
                <img src={newsInfo.image} className="h-full max-h-96 w-[100%] object-cover" alt={"Random"}  />
                <h2 className="text-xs pt-2 font-semibold text-gray-500">Posted: {newsInfo.date}</h2>
                <h1 className="text-xl py-4 font-semibold">{newsInfo.title}</h1>
                <p className="text-base mb-4">{newsInfo.description.repeat(7)}</p>
            </Box>
        </Modal>
    );
};

export default Popup;