import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import Link from "next/link";

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
  price,
  bedrooms,
  bathrooms,
  type
}) => {
  return (
    <>

      <div className="overflow-hidden rounded-lg p-6 md:p-8 xl:p-10 flex flex-col gap-4 md:gap-6 xl:gap-8">
        <img
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image}`}
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

        <Tags rooms={bedrooms} baths={bathrooms} type={type} />

        <div id="price" className="flex justify-between">
          {price && (
            <p className="text-[#999]">Price <span className="block text-white font-semibold text-xl 2xl:text-2xl">${price}</span></p>

          )}
          {Button && (
            <Link
              href={btnHref ? btnHref : "#"}

              className="text-regular font-normal text-center bg-[#703BF7] rounded-lg w-auto px-5 py-3.5 2xl:px-6 2xl:py-4">

              {Button}


            </Link>

          )}
        </div>


      </div>

    </>
  );
};
export default SingleCard;

const Tags = ({ rooms, baths, type }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="flex px-3 py-1.5 xl:px-4 xl:py-2 text-xs md:text-sm xl:text-base rounded-full bg-[#1A1A1A] border border-[#262626]"><IoBed className="inline mr-1.5 text-xl" />{rooms}-Bedroom</span>
      <span className="flex px-3 py-1.5 xl:px-4 xl:py-2 text-xs md:text-sm xl:text-base rounded-full bg-[#1A1A1A] border border-[#262626]"><FaBath className="inline mr-1.5  text-xl" />{baths}-Bathroom</span>
      <span className="flex px-3 py-1.5 xl:px-4 xl:py-2 text-xs md:text-sm xl:text-base rounded-full bg-[#1A1A1A] border border-[#262626]"><HiMiniBuildingOffice className="inline mr-1.5  text-xl" />{type}</span>
    </div>
  )
}
