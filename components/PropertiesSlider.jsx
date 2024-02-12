import { fetcher } from "../lib/api";
import Properties from './Cards';
import useSWR from "swr";
import { useState } from "react";

export default function PropertiesSlider({ properties }) {

    const [pageIndex, setPageIndex] = useState(1);

    const { data } = useSWR(`${process.env.NEXT_PUBLIC_STRAPI_URL}/properties?pagination[page]=${pageIndex}&pagination[pageSize]=2`, fetcher, {
        fallbackData: properties
    })

    return (

        <section className="flex flex-col items-center justify-between py-6">

            <Properties propertiesListed={data} />

            <div className="space-x-2 space-y-2">
                <button
                    className={`md:p-2 rounded py-2  text-white p-2 ${pageIndex === 1 ? 'bg-gray-300' : 'bg-blue-400'
                        }`}
                    disabled={pageIndex === 1}
                    onClick={() => setPageIndex(pageIndex - 1)}
                >
                    Previous
                </button>
                <span>{`${pageIndex} of ${data && data.meta.pagination.pageCount
                    }`}</span>
                <button
                    className={`md:p-2 rounded py-2  text-white p-2 ${pageIndex === (data && data.meta.pagination.pageCount)
                        ? 'bg-gray-300'
                        : 'bg-blue-400'
                        }`}
                    disabled={pageIndex === (data && data.meta.pagination.pageCount)}
                    onClick={() => setPageIndex(pageIndex + 1)}
                >
                    Next
                </button>

            </div>

        </section>

    );
}

export async function getStaticProps() {
    const getProperties = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/properties?pagination[page]=1&pagination[pageSize]=2`
    );
    console.log(getProperties);
    return {
        props: {
            properties: getProperties,
        },
    };

}