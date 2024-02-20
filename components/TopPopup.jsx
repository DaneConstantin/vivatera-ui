import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import Image from 'next/image';

const TopPopup = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            {isVisible && (
                <div className="relative top-0 left-0 right-0 p-3 bg-[#1A1A1A] text-white text-center overflow-hidden">
                    <div className='absolute top-0 right-0 left-0 w-full h-[60px]'>
                        <Image
                            src="/rrrepeat.svg" // Replace with the path to your image
                            alt="Abstract Texture"
                            layout='fill'
                            objectFit='cover'

                        />
                    </div>
                    <div className='relative top-0 w-full left-0 right-0'>
                        <div className="flex justify-between items-center">
                            <div></div>
                            <p>✨Discover Your Dream Property with VivaTerra. <a className="underline" href="/properties">Learn More</a></p>

                            <IoClose onClick={handleClose} className='bg-[#262626] rounded-full p-2 text-4xl cursor-pointer' />

                        </div>
                    </div>


                </div>
            )}
        </>
    );
};

export default TopPopup;
