import Link from 'next/link'
import Container from './Container'

export default function CTA() {
    return (
        <section className="py-24 border-t border-b border-[#262626] w-full abstract-bg">
            <Container className="px-8 lg:px-0">

                <h2 className="text-3xl font-semibold leading-loose xl:text-4xl xl:leading-loose 2xl:leading-loose 2xl:text-5xl">Start Your Real Estate Journey Today</h2>
                <div className="flex justify-center md:justify-between items-end flex-col md:flex-row gap-4">
                    <p className="text-[#999] text-lg md:max-w-[75%]">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, VivaTerra is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                    <Link
                        href="/properties"
                        rel="noopener"
                        className="text-regular font-normal text-center bg-[#703BF7] rounded-lg w-auto">
                        <span className="button">
                            Explore Properties
                        </span>
                    </Link>
                </div>

            </Container>
        </section>
    )
}
