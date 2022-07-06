import Link from 'next/link';
import React from 'react';
import background from '../public/assets/tamar-bg.jpg';
import Image from 'next/dist/client/image';

import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
	return (
		<>
			<div id="home" className="w-full h-screen text-center">
				<div className="mx-auto left-0 justify-center bottom-0 flex sm:ml-[10%] 2xl:ml-[15%] absolute">
					<div className="flex items-center max-w-[300px] justify-center py-4  ">
						<a
							rel="noreferrer"
							href="https://www.linkedin.com/in/tamartarkhanian/"
							target="_blank"
							className="p-6 text-xl 2xl:text-2xl cursor-pointer text-white hover:text-teal-800 hover:scale-110 ease-in duration-300"
							alt="Link to Tamar's LinkedIn"
						>
							<FaLinkedinIn />
						</a>
						<a
							rel="noreferrer"
							href="https://www.facebook.com/tamartarkhanianrealtor"
							target="_blank"
							className="p-6 text-xl 2xl:text-2xl cursor-pointer text-white hover:text-teal-800 hover:scale-110 ease-in duration-300"
							alt="Link to Tamar's Facebook"
						>
							<FaFacebook />
						</a>
						<a
							rel="noreferrer"
							href="https://www.instagram.com/tamartar/"
							target="_blank"
							className="p-6 text-xl 2xl:text-2xl cursor-pointer text-white hover:text-teal-800 hover:scale-110 ease-in duration-300"
							alt="Link to Tamar's Instagram"
						>
							<FaInstagram />
						</a>
					</div>
				</div>
				<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center 2xl:max-w-[67%]">
					<div className="fixed -z-20 top-0 w-full h-screen bg-neutral-500">
						<Image
							className="bg-blend-overlay bg-center bg-no-repeat bg-cover w-full"
							id="hero"
							layout="fill"
							objectFit="cover"
							src={background}
							alt="A background of a modern living room, with a plant next to a sofa with many cushions, and a coffee table in front."
							priority
						/>
					</div>
					<div className="z-10 absolute w-4/5 mx-auto">
						<h1 className="py-2 text-white text-6xl md:text-8xl 2xl:text-8xl">
							Let&apos;s find your dream home
						</h1>
						<p className="pb-4 md:py-4 text-white max-w-[80%] m-auto text-2xl md:text-3xl"></p>
						<div className="">
							<button className="bg-teal-800 2xl:px-8 2xl:py-2 2xl:text-xl 2xl:border-2 border border-teal-800 md:bg-transparent md:border-white hover:bg-teal-800 hover:border-teal-800">
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
