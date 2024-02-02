import Image from "next/image";
import BrowseProperties from "../BrowseProperties";
import Link from "next/link";
import homestyles from "../../styles/home.module.css"
import Container from "../Container";

const BlockNumber = ({ number, title }) => {
  return (
    <div className="flex-item py-4 px-6 bg-[#1A1A1A] rounded-xl border border-[#262626]">
      <h3 className="text-4xl leading-loose font-bold">{number}+</h3>
      <p className="text-lg font-medium text-[#999]">{title}</p>
    </div>
  )
}

const HeroPhoto = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        src="/heroimg.png"
        fill
        alt="Hero Illustration"
        objectFit="contain"

      />
    </div>
  )
}
export default function Hero() {
  return (

    <section className="w-full relative">
      <div className="bg-[url('/herobg.png')] w-full h-[814px] absolute opacity-10 z-0"></div>

      <Container className="flex px-8 align-center w-full h-auto flex-col-reverse lg:flex-row">
        <div className="flex items-center lg:items-start justify-center w-full lg:w-6/12 flex-col py-8 xl:py-20 z-10 mx-auto">
          <h1 className="capitalize mb-4 text-4xl text-dark sm:text-[40px] lg:text-6xl font-semibold leading-normal md:leading-relaxed lg:leading-[72px] text-center lg:text-left">
            Discover Your Dream Property with VivaTerra
          </h1>
          <p className="mb-8 text-base text-[#999] ">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          <div className="flex flex-col py-5 gap-5 md:flex-row justify-center lg:justify-start items-center">
            <Link
              href="/about"
              target="_blank"
              rel="noopener">
              <span className={homestyles.contact}> Learn More</span>
            </Link>
            <BrowseProperties title="Browse Properties" />
          </div>
          <div className="flex flex-wrap md:flex-row w-full gap-5 ">
            <div className="flex-auto">
              <BlockNumber number={200} title={"Happy Customers"} />
            </div>
            <div className="flex-auto">
              <BlockNumber number={"10k"} title={"Properties For Clients"} />
            </div>
            <div className="flex-auto">
              <BlockNumber number={16} title={"Years of Experience"} />
            </div>
          </div>
        </div>
        <div className="flex w-full lg:w-1/2 min-h-[200px] h-[214px] md:h-[414px] lg:h-auto py-4">

          <HeroPhoto />
        </div>
      </Container>
    </section>
  );
}


