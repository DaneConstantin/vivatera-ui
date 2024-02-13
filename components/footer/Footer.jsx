import React from "react";
import Container from "../Container";
import { Logo } from "../Nav";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="w-full z-10">
                <Container className="px-8 lg:px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 grid-flow-row py-20">
                        <div className="col-span-2">
                            <Logo />
                            <div className="my-6">
                                <form id="form" action="https://www.freecodecamp.com/email-submit" className="flex justify-between py-3.5 px-5 border border-[#262626] rounded-lg leading-4 w-[305px]">
                                    <input name="email" id="email" type="email" placeholder="Enter Your Email" required="" className="bg-transparent " />
                                    <input id="submit" type="submit" value=" " className="" /><FaTelegramPlane className="inline text-2xl" />
                                </form>
                            </div>
                        </div>
                        <LinkGroup header="Home">
                            <NavLink link="/#" label="SaaS Development" />
                            <NavLink link="/#" label="Our Products" />
                            <NavLink link="/#" label="User Flow" />
                            <NavLink link="/#" label="User Strategy" />
                        </LinkGroup>
                        <LinkGroup header="About Us">
                            <NavLink link="/#" label="About TailGrids" />
                            <NavLink link="/#" label="Contact & Support" />
                            <NavLink link="/#" label="Success History" />
                            <NavLink link="/#" label="Setting & Privacy" />
                        </LinkGroup>
                        <LinkGroup header="Properties">
                            <NavLink link="/#" label="Premium Support" />
                            <NavLink link="/#" label="Our Services" />
                            <NavLink link="/#" label="Know Our Team" />
                            <NavLink link="/#" label="Download App" />
                        </LinkGroup>
                        <LinkGroup header="Services">
                            <NavLink link="/#" label="SaaS Development" />
                            <NavLink link="/#" label="Our Products" />
                            <NavLink link="/#" label="User Flow" />
                            <NavLink link="/#" label="User Strategy" />
                        </LinkGroup>
                        <LinkGroup header="Contact Us">
                            <NavLink link="/#" label="About TailGrids" />
                            <NavLink link="/#" label="Contact & Support" />
                            <NavLink link="/#" label="Success History" />
                            <NavLink link="/#" label="Setting & Privacy" />
                        </LinkGroup>
                    </div>

                </Container>
                <div className="w-full p-5 bg-[#1A1A1A]">
                    <Container className="flex align-middle justify-center lg:justify-between flex-col lg:flex-row-reverse gap-5">

                        <div className="flex justify-center gap-2">
                            <a href="#!" className="p-5 rounded-full bg-[#141414] hover:bg-[#262626]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                            <a href="#!" className="p-5 rounded-full bg-[#141414] hover:bg-[#262626]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                </svg>
                            </a>
                            <a href="#!" className="p-5 rounded-full bg-[#141414] hover:bg-[#262626]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20"
                                    fill="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#!" className="p-5 rounded-full bg-[#141414] hover:bg-[#262626]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M19.6669 8.09165C19.7081 6.89886 19.4472 5.715 18.9085 4.64999C18.543 4.21299 18.0358 3.91808 17.4752 3.81665C15.1565 3.60626 12.8281 3.52002 10.5002 3.55832C8.18072 3.51829 5.86078 3.60174 3.55019 3.80832C3.09337 3.89142 2.67062 4.10569 2.33352 4.42499C1.58352 5.11665 1.50019 6.29999 1.41685 7.29999C1.29595 9.09796 1.29595 10.902 1.41685 12.7C1.44096 13.2628 1.52476 13.8215 1.66685 14.3667C1.76733 14.7875 1.97062 15.1769 2.25852 15.5C2.59791 15.8362 3.03051 16.0627 3.50019 16.15C5.29678 16.3718 7.10703 16.4637 8.91685 16.425C11.8335 16.4667 14.3919 16.425 17.4169 16.1917C17.8981 16.1097 18.3428 15.8829 18.6919 15.5417C18.9252 15.3082 19.0994 15.0226 19.2002 14.7083C19.4982 13.7938 19.6446 12.8367 19.6335 11.875C19.6669 11.4083 19.6669 8.59165 19.6669 8.09165ZM8.61685 12.375V7.21665L13.5502 9.80832C12.1669 10.575 10.3419 11.4417 8.61685 12.375Z" fill="white" />
                                </svg>
                            </a>


                        </div>
                        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-2.5">
                            <span>@2023 Estatein. All Rights Reserved.</span>
                            <a href="">Terms & Conditions</a>
                        </div>

                    </Container>
                </div>

            </footer >
        </>
    );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
    return (
        <>
            <div className="w-full mb-6 pt-6 xl:mb-0 xl:pt-0 border-t border-[#262626] xl:border-none">

                <h4 className="mb-6 text-lg text-[#999]">
                    {header}
                </h4>
                <ul className="space-y-3">{children}</ul>

            </div>
        </>
    );
};

const NavLink = ({ link, label }) => {
    return (
        <li>
            <a
                href={link}
                className="inline-block text-base leading-loose text-body-color hover:text-primary dark:text-dark-6"
            >
                {label}
            </a>
        </li>
    );
};
