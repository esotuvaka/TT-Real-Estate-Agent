import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import pfp from '../public/assets/tt-branding/tamar-profile.jpg';

const Contact = () => {
	return (
		<>
			<div
				id="contact"
				className="w-full lg:h-screen bg-white flex items-center justify-center 2xl:pb-0 py-24 lg:pt-0 lg:pb-0 xl:py-0"
			>
				<div className="max-w-[1240px] mx-auto w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[80%]">
					<h1 className="mb-2 md:mb-0 text-xl tracking-widest uppercase text-teal-800 2xl:text-3xl">
						Contact
					</h1>

					<div className="grid lg:grid-cols-5 gap-8 2xl:h-[50vh]">
						{/* left */}
						<div className="col-span-3 flex justify-center lg:col-span-2  lg:shadow-md lg:shadow-neutral-600 md:rounded-xl p-4 items-center">
							<div className=" h-3/4 ">
								<div className="flex flex-col justify-center text-center">
									<h2 className="md:pb-6 2xl:text-5xl">Tamar Tarkhanian</h2>

									<p className="pt-4 text-teal-800 font-bold 2xl:text-2xl">
										PHONE
									</p>
									<p className="2xl:text-2xl">714.813.2034</p>
									<p className="pt-4 text-teal-800 font-bold 2xl:text-2xl">
										ADDRESS
									</p>
									<p className="2xl:text-2xl">
										31582 Coast Hwy, Laguna Beach, CA
									</p>
									<p className="pt-7 2xl:text-2xl 2xl:pt-12">
										Coldwell Banker Realty | DRE #01891979
									</p>

									<div className="flex items-center max-w-[300px] mx-auto justify-center">
										<a
											rel="noreferrer"
											href="https://www.linkedin.com/in/tamartarkhanian/"
											target="_blank"
											className="p-6 cursor-pointer hover:text-teal-800 hover:scale-110 ease-in duration-300 2xl:text-3xl"
											alt="Link to Tamar's LinkedIn"
										>
											<FaLinkedinIn />
										</a>
										<a
											rel="noreferrer"
											href="https://www.facebook.com/tamartarkhanianrealtor"
											target="_blank"
											className="p-6 cursor-pointer hover:text-teal-800 hover:scale-110 ease-in duration-300 2xl:text-3xl"
											alt="Link to Tamar's Facebook"
										>
											<FaFacebook />
										</a>
										<a
											rel="noreferrer"
											href="https://www.instagram.com/tamartar/"
											target="_blank"
											className="p-6 cursor-pointer hover:text-teal-800 hover:scale-110 ease-in duration-300 2xl:text-3xl"
											alt="Link to Tamar's Instagram"
										>
											<FaInstagram />
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* right */}
						<div className="col-span-3 w-full h-auto lg:shadow-md lg:shadow-neutral-600 md:rounded-xl lg:p-4 lg:pt-0 flex">
							<div className="w-[90%] justify-center items-center mx-auto">
								<form
									action="https://getform.io/f/ae7386ba-66cf-4f42-8157-1a835eb7c012"
									method="POST"
									className="flex flex-col mx-auto 2xl:pb-12"
								>
									<div className="grid md:grid-cols-2 gap-4 w-full py-2">
										<div className="flex flex-col">
											<label
												htmlFor="Name"
												className="uppercase text-sm py-2 2xl:text-2xl"
											>
												Name
											</label>
											<input
												className="border-2 rounded-sm p-3 flex border-gray-300"
												type="text"
												id="Name"
												name="name"
											/>
										</div>
										<div className="flex flex-col">
											<label
												htmlFor="Phone"
												className="uppercase text-sm py-2 2xl:text-2xl"
											>
												Phone Number
											</label>
											<input
												className="border-2 rounded-sm p-3 flex border-gray-300"
												type="text"
												id="Phone"
												name="phone"
											/>
										</div>
									</div>
									<div className="grid md:grid-cols-2 gap-4 w-full py-2">
										<div className="flex flex-col">
											<label
												htmlFor="Email"
												className="uppercase text-sm py-2 2xl:text-2xl"
											>
												Email
											</label>
											<input
												className="border-2 rounded-md p-3 flex border-gray-300"
												type="text"
												id="Email"
												name="email"
											/>
										</div>
										<div className="flex flex-col">
											<label
												htmlFor="Subject"
												className="uppercase text-sm py-2 2xl:text-2xl"
											>
												Subject
											</label>
											<input
												className="border-2 rounded-sm p-3 flex border-gray-300"
												type="text"
												id="Subject"
												name="subject"
											/>
										</div>
									</div>
									<div className="flex flex-col py-2">
										<label
											htmlFor="Message"
											className="uppercase text-sm py-2 2xl:text-2xl"
										>
											Message
										</label>
										<textarea
											className="border-2 rounded-sm p-3 border-gray-300"
											rows="3"
											id="Message"
											name="message"
										></textarea>
									</div>
									<button className="p-4 rounded-sm mx-auto flex shadow-neutral-600 shadow-md hover:shadow-lg hover:shadow-neutral-602 text-gray-100 mt-4 2xl:text-xl 2xl:px-6">
										Send Message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
