import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/dist/client/link';
import Image from 'next/dist/client/image';
import eoh from '../public/assets/tt-branding/equal-housing-opportunity-logo-black-and-white.png';

const Footer = () => {
	return (
		<footer>
			<section id="footer-grid" className="bg-neutral-200">
				<div className="grid grid-cols-3 w-11/12 max-w-[1240px] mx-auto border-b border-neutral-300">
					<div id="DRE-info" className="py-7">
						<p className="font-semibold">Tamar Tarkhanian Realtor®</p>
						<p>CalDRE#: 01891979</p>
						<p>Coldwell Banker Realty</p>
						<p>31582 Coast Hwy , Laguna Beach, CA</p>
					</div>
					<div id="Socials">
						<ul className="flex flex-col  mx-auto justify-center py-5 md:py-4">
							<li>
								<a
									rel="noreferrer"
									href="https://www.linkedin.com/in/tamartarkhanian/"
									target="_blank"
									className="p-3 flex font-b flex-row cursor-pointer text-black hover:text-teal-800 duration-300 justify-center"
									alt="Link to Tamar's LinkedIn"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li>
								<a
									rel="noreferrer"
									href="https://www.facebook.com/tamartarkhanianrealtor"
									target="_blank"
									className="p-3 flex font-b flex-row cursor-pointer text-black hover:text-teal-800 duration-300 justify-center"
									alt="Link to Tamar's Facebook"
								>
									<FaFacebook />
								</a>
							</li>
							<li>
								<a
									rel="noreferrer"
									href="https://www.instagram.com/tamartar/"
									target="_blank"
									className="p-3 flex font-b flex-row cursor-pointer text-black hover:text-teal-800 duration-300 justify-center"
									alt="Link to Tamar's Instagram"
								>
									<FaInstagram />
								</a>
							</li>
						</ul>
					</div>
					<div id="Links" className="py-7">
						<ul className="flex-col ">
							<li>
								<Link href="/">
									<p className="hover:cursor-pointer hover:text-teal-800 transition-all duration-500 mb-4">
										Home
									</p>
								</Link>
							</li>
							<li>
								<Link href="/#about">
									<p className="hover:cursor-pointer hover:text-teal-800 transition-all duration-500 mb-4">
										About
									</p>
								</Link>
							</li>
							<li>
								<Link href="/#properties">
									<p className="hover:cursor-pointer hover:text-teal-800 transition-all duration-500 mb-4">
										Properties
									</p>
								</Link>
							</li>
							<li>
								<Link href="/#contact">
									<p className="hover:cursor-pointer hover:text-teal-800 transition-all duration-500">
										Contact
									</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div id="CB-fair-housing" className="max-w-[1240px] mx-auto">
					<div className="flex justify-center pt-7">
						<Image
							id="fair-housing-logo"
							width="100px"
							height="100px"
							src={eoh}
							className="mx-auto"
							alt="equal housing opportunity logo"
						/>
					</div>
					<p className="py-7 text-center w-11/12 mx-auto">
						Coldwell Banker Real Estate LLC. All Rights Reserved. Coldwell
						Banker Real Estate LLC fully supports the principles of the Fair
						Housing Act and the Equal Opportunity Act. Each Coldwell Banker
						Residential Brokerage office is owned by a subsidiary of NRT LLC.
						Coldwell Banker® and the Coldwell Banker Logo, Coldwell Banker
						Previews International® and the Coldwell Banker Previews
						International Logo, are registered service marks owned by Coldwell
						Banker Real Estate LLC.
					</p>
				</div>
			</section>
			<section
				id="copyright"
				className="bg-neutral-300 py-4 mx-auto text-center md:text-left"
			>
				<div className="flex justify-between w-11/12 mx-auto lg:w-4/5">
					<div>Copyright © 2022 Tamar Tarkhanian</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
