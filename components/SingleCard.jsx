const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>

      <div className="mb-10 overflow-hidden rounded-lg p-6 md:p-8 xl:p-10 flex flex-col gap-4 md:gap-6 xl:gap-8">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover aspect-w-10 aspect-h-23 rounded-xl"

        />

        <div id="property-main-info" className="text-left">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-1 block text-xl font-semibold text-dark hover:text-primary text-white sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="text-base leading-normal text-[#999]">
            {CardDescription}
          </p>
        </div>

        <div className="tags">

        </div>
        <div className="price">
        {Button && (
          <a
            href={btnHref ? btnHref : "#"}
            className="inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white border-dark-3 text-dark-6"
          >
            {Button}
          </a>
        )}
        </div>
        

      </div>

    </>
  );
};
export default SingleCard;