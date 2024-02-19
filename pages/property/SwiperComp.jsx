'client'
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';

const SwiperComp = ({ photo }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(0);
    return (
        <>
            <Swiper
                modules={[Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                spaceBetween={30}
                slidesPerView={2}
                pagination={{ clickable: true }} className="flex w-full h-full min-h-[250px] xl:min-h-[585px] my-6"
            >
                {photo &&
                    photo.data.map((property) => {
                        return (
                            <SwiperSlide key={property.id}>
                                <img
                                    src={`${property.attributes.url}`}
                                    alt=""
                                    className="w-full h-full object-cover aspect-w-10 aspect-h-23 rounded-lg cursor-pointer"
                                />
                            </SwiperSlide>
                        )
                    })}

            </Swiper>
            <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                slidesPerView={9}
                spaceBetween={10}
                className="flex w-full bg-[#141414] rounded-lg border border-[#262626]"
            >
                {photo &&
                    photo.data.map((property) => {
                        return (
                            <SwiperSlide key={property.id}>
                                <img
                                    src={`${property.attributes.formats.thumbnail.url}`}
                                    alt=""
                                    className="object-cover rounded-lg h-[94px]  cursor-pointer"
                                />
                            </SwiperSlide>
                        )
                    })}

            </Swiper>
        </>

    )
}
export default SwiperComp;