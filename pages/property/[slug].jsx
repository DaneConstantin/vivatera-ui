import Container from '@/components/Container';
import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';
import { Description } from './Description';
import { SwiperComp } from './SwiperComp';


const Property = ({ property }) => {
    const price = property.attributes.price;



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
                    <div className="flex w-full h-full flex-col-reverse p-10 bg-[#1A1A1A] border border-[#262626] rounded-lg ">
                        <SwiperComp photo={property.attributes.photos} />
                    </div>
                    <div className="flex justify-between my-8 gap-4">
                        <Description description={property.attributes.description} beds={property.attributes.bedrooms} baths={property.attributes.bathrooms} area={property.attributes.m2} />
                        <div className="flex flex-col w-full md:w-1/2 rounded-lg border border-[#262626] p-12">
                            <h3>Key Features and Amenities</h3>
                        </div>
                    </div>

                </Container>
            </section>


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