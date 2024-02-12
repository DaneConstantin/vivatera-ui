import SingleCard from './SingleCard';

const Cards = ({ propertiesListed }) => {
  return (

    <section className="container px-8 md:px-0">
     
        <div className="grid gap-6 2xl:gap-8 md:grid-cols-2 xl:grid-cols-3 justify-center">
          {propertiesListed &&
            propertiesListed.data.map((property) => {
              return (
                <li key={property.id} className="list-none rounded-xl border border-[#262626] min-w-[358px] max-w-[512px] ">

                  <SingleCard
                    image={property.attributes.photos.data[0].attributes.url}
                    CardTitle={property.attributes.name}
                    titleHref={`property/` + property.attributes.slug}
                    btnHref={`property/` + property.attributes.slug}
                    CardDescription={property.attributes.description}
                    Button="View Property Details"
                    price={property.attributes.price}
                    bedrooms={property.attributes.bedrooms}
                    bathrooms={property.attributes.bathrooms}
                    type={property.attributes.PropertyType}
                  />
                </li>
              );
            })}

      </div>
    </section>


  );
};

export default Cards;