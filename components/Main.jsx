import Link from 'next/link';
import React from 'react';
import background from '../public/assets/tamar-bg.jpg';
// ../public/assets/projects/crypto.jpg
import Image from 'next/dist/client/image';

import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
	return (
		<>
			<div id="home" className="w-full h-screen text-center">
				<div className="mx-auto md:left-0 justify-center bottom-0 flex md:ml-48 absolute">
					<div className="flex items-center max-w-[300px] justify-center py-4">
						<a
							rel="noreferrer"
							href="https://www.linkedin.com/in/tamartarkhanian/"
							target="_blank"
							className="p-6 cursor-pointer text-white hover:text-teal-800 hover:scale-110 ease-in duration-300"
							alt="Link to Tamar's LinkedIn"
						>
							<FaLinkedinIn />
						</a>
						<a
							rel="noreferrer"
							href="https://www.facebook.com/tamartarkhanianrealtor"
							target="_blank"
							className="p-6 cursor-pointer text-white hover:text-teal-800 hover:scale-110 ease-in duration-300"
							alt="Link to Tamar's Facebook"
						>
							<FaFacebook />
						</a>
						<a
							rel="noreferrer"
							href="https://www.instagram.com/tamartar/"
							target="_blank"
							className="p-6 cursor-pointer text-white hover:text-teal-800 hover:scale-110 ease-in duration-300"
							alt="Link to Tamar's Instagram"
						>
							<FaInstagram />
						</a>
					</div>
				</div>
				<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
					<div className="fixed -z-20 top-0 w-full h-screen bg-neutral-500">
						<Image
							className="bg-blend-overlay bg-center bg-no-repeat bg-cover w-full"
							id="hero"
							layout="fill"
							objectFit="cover"
							src={background}
							alt="Background showing a modern wooden beach house"
						/>
					</div>
					<div className="z-10 absolute mx-auto">
						<h1 className="py-2 text-white text-8xl">
							Let&apos;s find your dream home
						</h1>
						<p className="py-4 text-white max-w-[80%] m-auto text-3xl">
							Best possible price and terms
						</p>
						<div className="">
							<button className="bg-transparent hover:px-8 border hover:border-teal-800 hover:text-white hover:bg-teal-800 border-white transition-all duration-500">
								<Link href="/#contact">BOOK AN APPOINTMENT</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
