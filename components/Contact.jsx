import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import pfp from '../public/assets/tt-branding/tamar-profile.jpg';

const Contact = () => {
	return (
		<>
			<div
				id="contact"
				className="w-full lg:h-screen bg-white flex items-center justify-center 2xl:pb-0"
			>
				<div id="spacer" className="h-20  bg-white"></div>
				<div className="max-w-[1240px] m-auto px-2  w-full pt-6 ">
					<h1 className="mb-2 md:mb-0 text-xl tracking-widest uppercase text-teal-800">
						Contact
					</h1>

					<div className="grid lg:grid-cols-5 gap-8">
						{/* left */}
						<div className="col-span-3 flex justify-center lg:col-span-2 w-full h-full lg:shadow-xl shadow-gray-400 md:rounded-xl p-4 items-center">
							<div className=" h-3/4 ">
								<div className="flex flex-col justify-center text-center">
									<h2 className="md:pb-6">Tamar Tarkhanian</h2>

									<p className="pt-4 text-teal-800 font-bold">PHONE</p>
									<p className="">714.813.2034</p>
									<p className="pt-4 text-teal-800 font-bold">ADDRESS</p>
									<p className="">31582 Coast Hwy, Laguna Beach, CA</p>
									<p className="pt-7">Coldwell Banker Realty | DRE #01891979</p>

									<div className="flex items-center max-w-[300px] mx-auto justify-center">
										<a
											rel="noreferrer"
											href="https://www.linkedin.com/in/tamartarkhanian/"
											target="_blank"
											className="p-6 cursor-pointer hover:text-teal-800 hover:scale-110 ease-in duration-300"
											alt="Link to Tamar's LinkedIn"
										>
											<FaLinkedinIn />
										</a>
										<a
											rel="noreferrer"
											href="https://www.facebook.com/tamartarkhanianrealtor"
											target="_blank"
											className="p-6 cursor-pointer hover:text-teal-800 hover:scale-110 ease-in duration-300"
											alt="Link to Tamar's Facebook"
										>
											<FaFacebook />
										</a>
										<a
											rel="noreferrer"
											href="https://www.instagram.com/tamartar/"
											target="_blank"
											className="p-6 cursor-pointer hover:text-teal-800 hover:scale-110 ease-in duration-300"
											alt="Link to Tamar's Instagram"
										>
											<FaInstagram />
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* right */}
						<div className="col-span-3 w-full h-auto lg:shadow-xl shadow-gray-400 md:rounded-xl lg:p-4 lg:pt-0">
							<div className=" ">
								<form>
									<div className="grid md:grid-cols-2 gap-4 w-full py-2">
										<div className="flex flex-col">
											<label htmlFor="Name" className="uppercase text-sm py-2">
												Name
											</label>
											<input
												className="border-2 rounded-sm p-3 flex border-gray-300"
												type="text"
												id="Name"
											/>
										</div>
										<div className="flex flex-col">
											<label htmlFor="Phone" className="uppercase text-sm py-2">
												Phone Number
											</label>
											<input
												className="border-2 rounded-sm p-3 flex border-gray-300"
												type="text"
												id="Phone"
											/>
										</div>
									</div>
									<div className="grid md:grid-cols-2 gap-4 w-full py-2">
										<div className="flex flex-col">
											<label htmlFor="Email" className="uppercase text-sm py-2">
												Email
											</label>
											<input
												className="border-2 rounded-md p-3 flex border-gray-300"
												type="text"
												id="Email"
											/>
										</div>
										<div className="flex flex-col">
											<label
												htmlFor="Subject"
												className="uppercase text-sm py-2"
											>
												Subject
											</label>
											<input
												className="border-2 rounded-sm p-3 flex border-gray-300"
												type="text"
												id="Subject"
											/>
										</div>
									</div>
									<div className="flex flex-col py-2">
										<label htmlFor="Message" className="uppercase text-sm py-2">
											Message
										</label>
										<textarea
											className="border-2 rounded-sm p-3 border-gray-300"
											rows="3"
											id="Message"
										></textarea>
									</div>
									<button className="w-full p-4 text-gray-100 mt-4">
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
