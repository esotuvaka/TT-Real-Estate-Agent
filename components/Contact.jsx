import React from 'react';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
	return (
		<>
			<div id="contact" className="w-full lg:h-screen bg-white">
				<div id="spacer" className="py-5 bg-white"></div>
				<div className="max-w-[1240px] m-auto px-2 py-16 w-full  ">
					<h1 className="text-xl tracking-widest uppercase text-teal-800">
						Contact
					</h1>
					<h2 className="py-4">Get In Touch</h2>
					<div className="grid lg:grid-cols-5 gap-8">
						{/* left */}
						<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 md:rounded-xl p-4">
							<div className="lg:p-4 h-full ">
								<div className="flex justify-center">
									<Image
										src="/../public/assets/tamar profile.jpg"
										alt="/"
										width="300"
										height="400"
										className=""
									/>
								</div>
								<div className="flex flex-col justify-center items-center">
									<h2 className="py-2">Tamar Tarkhanian</h2>
									<p className="">Coldwell Banker Realty | DRE #01891979</p>
									<p className="pt-4 text-teal-800 font-bold">PHONE</p>
									<p className="">714.813.2034</p>
								</div>
								<div>
									<div className="flex items-center max-w-[300px] mx-auto justify-center py-4">
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
						<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 md:rounded-xl lg:p-4">
							<div className="p-4">
								<form>
									<div className="grid md:grid-cols-2 gap-4 w-full py-2">
										<div className="flex flex-col">
											<label htmlFor="Name" className="uppercase text-sm py-2">
												Name
											</label>
											<input
												className="border-2 rounded-md p-3 flex border-gray-300"
												type="text"
												id="Name"
											/>
										</div>
										<div className="flex flex-col">
											<label htmlFor="Phone" className="uppercase text-sm py-2">
												Phone Number
											</label>
											<input
												className="border-2 rounded-md p-3 flex border-gray-300"
												type="text"
												id="Phone"
											/>
										</div>
									</div>
									<div className="flex flex-col py-2">
										<label htmlFor="Email" className="uppercase text-sm py-2">
											Email
										</label>
										<input
											className="border-2 rounded-md p-3 flex border-gray-300"
											type="email"
											id="Email"
										/>
									</div>
									<div className="flex flex-col py-2">
										<label htmlFor="Subject" className="uppercase text-sm py-2">
											Subject
										</label>
										<input
											className="border-2 rounded-md p-3 flex border-gray-300"
											type="text"
											placeholder="Looking to buy or sell?"
											id="Subject"
										/>
									</div>
									<div className="flex flex-col py-2">
										<label htmlFor="Message" className="uppercase text-sm py-2">
											Message
										</label>
										<textarea
											className="border-2 rounded-md p-3 border-gray-300"
											rows="8"
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
