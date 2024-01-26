import Link from 'next/link';

const Properties = ({ propertiesListed }) => {
    return (
        <>
            <ul className=" space-y-4 text-4xl font-bold mb-3">
                {propertiesListed &&
                    propertiesListed.data.map((property) => {
                        return (
                            <li key={property.id}>
                               
                                <Link href={`property/` + property.attributes.slug}>
                                    {property.attributes.name}
                                </Link>
                            </li>
                        );
                    })}
            </ul>
        </>
    );
};

export default Properties;