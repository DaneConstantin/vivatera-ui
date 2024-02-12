import SingleCard from './SingleCard';

const Cards = ({ propertiesListed }) => {
  return (

    <section className="pb-10 lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {propertiesListed &&
            propertiesListed.data.map((property) => {
              return (
                <li key={property.id} className="list-none rounded-xl border border-[#262626]">

                  <SingleCard
                    image="https://i.ibb.co/r2zns1m/image-01.jpg"
                    CardTitle={property.attributes.name}
                    titleHref={`property/` + property.attributes.slug}
                    btnHref={`property/` + property.attributes.slug}
                    CardDescription={property.attributes.description}
                    Button="View Property Details"
                  />
                </li>
              );
            })}

        </div>
      </div>
    </section>


  );
};

export default Cards;