import Container from '@/components/Container';
import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';
import { useState } from 'react';
import Link from 'next/link';
import { Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';


const Property = ({ property }) => {
    const price = property.attributes.price;

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Layout>
            <section className="w-full relative">

                <Container className="px-4 lg:px-0 flex align-center w-full h-auto flex-col">
                    <div className="flex justify-between w-full py-8">
                        <h1 className="capitalize text-3xl xl:text-4xl 2xl:text-6xl font-semibold leading-normal xl:leading-relaxed 2xl:leading-relaxed break-keep">
                            {property.attributes.name}
                        </h1>

                        <div className="flex flex-wrap flex-col gap-5 ">
                            {price && (
                                <p className="text-[#999]">Price <span className="block text-white font-semibold text-xl 2xl:text-2xl">${Number(price).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</span></p>

                            )}
                        </div>
                    </div>

                    {/* Swiper */}
                    {/* <div className="flex w-full min-h-[450px] max-h-[955px] p-5 lg:p-10 2xl:p-12 bg-[#1A1A1A] border border-[#262626] rounded-xl flex-col">
                        <div className="grid grid-cols-4 gap-2.5 2xl:gap-5 md:grid-cols-4 xl:grid-cols-9 bg-[#141414] border-[3px] rounded-xl border-[#262626] p-2.5 2xl:p-5 items-center h-[12%]">
                            {property &&
                                property.attributes.photos.data.map((property) => {
                                    return (
                                        <Link href="#">
                                            <img key={property.id}
                                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${property.attributes.url}`}
                                                alt=""
                                                className="w-full h-full object-cover aspect-122/74 rounded-xl "
                                            />
                                        </Link>
                                    )
                                })}
                            
                        </div>
                        <div className="flex h-[53%] ">
                            {property &&
                                property.attributes.photos.data.map((property) => {
                                    return (
                                        <>
                                            <img key={property.id}
                                                src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${property.attributes.url}`}
                                                alt=""
                                                className="w-full h-full object-cover aspect-w-10 aspect-h-23 rounded-xl"
                                            />
                                        </>
                                    )
                                })}
                        </div>

                    </div> */}
                    <div className="flex w-full min-h-[450px] flex-col-reverse">
                        <Swiper
                            modules={[Thumbs]}
                            thumbs={{ swiper: thumbsSwiper }}
                            spaceBetween={50}
                            slidesPerView={5}
                            pagination={{ clickable: true }} className="flex w-full h-20"
                        >
                            <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                            <SwiperSlide>Slide 10</SwiperSlide>

                        </Swiper>
                        <Swiper
                            modules={[Thumbs]}
                            watchSlidesProgress
                            onSwiper={setThumbsSwiper}
                            className="flex w-full"
                        >
                           <SwiperSlide>Slide 1</SwiperSlide>
                            <SwiperSlide>Slide 2</SwiperSlide>
                            <SwiperSlide>Slide 3</SwiperSlide>
                            <SwiperSlide>Slide 4</SwiperSlide>
                            <SwiperSlide>Slide 6</SwiperSlide>
                            <SwiperSlide>Slide 8</SwiperSlide>
                            <SwiperSlide>Slide 9</SwiperSlide>
                            <SwiperSlide>Slide 10</SwiperSlide>
                        </Swiper>
                    </div>

                </Container>
            </section>




            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    {property.attributes.name}
                </span>
            </h1>
            <p>
                Square Meters: {' '}
                <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                    {property.attributes.m2}
                </span>
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tighter mb-4 mt-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    {property.attributes.PropertyType}
                </span>
            </h2>
        </Layout >


    );
}


export async function getServerSideProps({ params }) {
    const { slug } = params;
    const getProperty = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/slugify/slugs/property/${slug}?populate=*`
    );
    return {
        props: {
            property: getProperty.data,
        },
    };

}

export default Property;