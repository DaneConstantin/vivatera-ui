import Layout from '../../components/Layout';
import { fetcher } from '../../lib/api';

const Property = ({ property }) => {

    return (
        <Layout>
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
        </Layout>


    );
}


export async function getServerSideProps({ params }) {
    const { slug } = params;
    const getProperty = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/property/${slug}`
    );
    console.log(getProperty);
    return {
        props: {
            property: getProperty.data,
        },
    };

}

export default Property;