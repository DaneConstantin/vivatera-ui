
const Description = ({ description, beds, baths, area }) => {
    return (
        <section className="flex gap-12 flex-col w-full md:w-1/2 rounded-lg border border-[#262626] p-12">
            <div className="py-4 ">
                <h3>Description</h3>
                <p className="text-[#999]">{description}</p>
            </div>

            <hr />
            <div className="flex w-full gap-5">
                <div className="w-full">
                    <p className="text-[#999]">Bedrooms <span className="block text-white font-semibold text-xl 2xl:text-2xl">{beds}</span></p>

                </div>

                <div className="w-full">
                    <p className="text-[#999]">Bathrooms <span className="block text-white font-semibold text-xl 2xl:text-2xl">{baths}</span></p>

                </div>
                <div className="w-full">
                    <p className="text-[#999]">Area <span className="block text-white font-semibold text-xl 2xl:text-2xl">{area}</span></p>

                </div>
            </div>
        </section>

    )
}
export default Description;