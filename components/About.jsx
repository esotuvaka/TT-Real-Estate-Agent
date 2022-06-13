import React from 'react';
import Image from 'next/image';
import pfp from '../public/assets/tt-branding/tamar-profile.jpg';

const About = () => {
	return (
		<div
			id="about"
			className="w-full md:h-screen px-2 flex items-center pt-24 bg-white"
		>
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<h1 className="uppercase text-xl tracking-widest text-teal-800">
						About
					</h1>
					<h1 className="py-4">Meet Tamar Tarkhanian</h1>

					<p className="py-2 text-gray-600 2xl:text-xl">
						Team up with a trusted neighborhood partner, and make your real
						estate dreams come true.
					</p>
					<p className="py-2 text-gray-600 2xl:text-xl">
						I know this area - the right pricing, the latest listings, the ins
						and outs and the buzz around town. From search to sale, I&apos;ll
						provide expert advice and unwavering support to help make your
						experience stress-free. Let me show you what I&apos;ve got - strong
						negotiation skills, friendly service and a track record to back it
						up. I have access to comprehensive, up-to-the-minute listing
						information giving me the edge necessary in today&apos;s fast-paced
						market.
					</p>
					<p className="py-2 text-gray-600 2xl:text-xl">
						Whether it&apos;s finding you a home with everything on your
						checklist or helping you get ready to move, I&apos;ve got you
						covered - advertising, financing, inspection and closing assistance,
						I&apos;ll handle it all from start to finish. I can even provide
						tips and tricks on staging and minor home improvements to help sell
						your home fast. Give me a call or stop by, I&apos;m right in the
						neighborhood!
					</p>
					{/* <Link href="/#properties">
						<button className="mx-auto md:mb-0 my-8 flex">
							Current listings
						</button> 2xl:text-xl
					</Link> */}
				</div>
				<div className="w-full h-auto m-auto shadow-xl shadow-gray-400  flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
					<Image
						src={pfp}
						alt="Tamar Tarkhanian"
						width="400"
						height="500"
						className=""
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
