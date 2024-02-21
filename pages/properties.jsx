import { fetcher } from "../lib/api";
import Layout from '../components/Layout';
import useSWR from "swr";
import Cards from "@/components/home/slider/Cards";

export default function PropertiesList({ properties }) {



    const { data } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?&populate=*`, fetcher, {
        fallbackData: properties
    })

    return (
        <Layout>
            <main className="flex flex-col items-center justify-between py-24">

                <h1 className="capitalize mb-8 text-3xl text-dark xl:text-4xl 2xl:text-6xl font-semibold leading-normal xl:leading-relaxed 2xl:leading-relaxed text-center 2xl:text-left">List of Properties for sale</h1>
                <Cards propertiesListed={data} />

            </main>
        </Layout>
    );
}

export async function getStaticProps() {
    const getProperties = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/properties?&populate=*`
    );
    console.log(getProperties);
    return {
        props: {
            properties: getProperties,
        },
    };

}