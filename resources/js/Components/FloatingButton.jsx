import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const FloatingButton = () => {
    return (
        <div className="fixed bottom-0 right-5 flex flex-col gap-4">
            <div className="bg-[#25d366] rounded-full p-4 group cursor-pointer w-fit self-end">
                <IoLogoWhatsapp
                    size={32}
                    className="text-white group-hover:text-black group-hover:transition transition group-hover:duration-200"
                />
            </div>
            <div className="pl-4 pr-12 py-2 rounded-t-lg text-white bg-[#dc3545]">Send Message</div>
        </div>
    );
};

export default FloatingButton;
