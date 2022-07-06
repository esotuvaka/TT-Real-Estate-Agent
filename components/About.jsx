import React from 'react';
import Image from 'next/image';
import pfp from '../public/assets/tt-branding/tamar-profile.jpg';

const About = () => {
	return (
		<div
			id="about"
			className="w-full sm:px-2 flex items-center py-24 relative bg-white 2xl:h-[80vh] lg:h-[80vh]"
		>
			<div className="max-w-[1240px] m-auto md:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:max-w-[580px] md:max-w-2xl   lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[67%] mx-auto">
				<div className="col-span-2 2xl:m-auto">
					<h1 className="uppercase text-xl tracking-widest text-teal-800  ">
						About
					</h1>
					<h1 className="py-4  ">Meet Tamar Tarkhanian</h1>

					<p className="py-2 text-neutral-600 ">
						Team up with a trusted neighborhood partner, and make your real
						estate dreams come true.
					</p>
					<p className="py-2 text-neutral-600 ">
						I know this area - the right pricing, the latest listings, the ins
						and outs and the buzz around town. From search to sale, I&apos;ll
						provide expert advice and unwavering support to help make your
						experience stress-free. Let me show you what I&apos;ve got - strong
						negotiation skills, friendly service and a track record to back it
						up. I have access to comprehensive, up-to-the-minute listing
						information giving me the edge necessary in today&apos;s fast-paced
						market.
					</p>
					<p className="py-2 text-neutral-600 ">
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
				<div className="col-span-2 lg:col-span-1 h-auto m-auto shadow-lg shadow-neutral-600 hover:shadow-neutral-600  flex w-[320px] items-center justify-center p-4 hover:scale-[1.01] hover:shadow-xl ease-in duration-200">
					<Image
						src={pfp}
						alt="Tamar Tarkhanian"
						width="320"
						height="486"
						className=""
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
