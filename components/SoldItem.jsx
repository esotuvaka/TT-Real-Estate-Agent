import Image from 'next/image';
import React from 'react';

const SoldItem = ({ area, price, title, backgroundImg, lStatus }) => {
	return (
		<div className="relative flex items-center justify-center h-auto w-full shadow-xl hover:shadow-none transition-all duration-500  shadow-gray-400 bg-white border-8 border-white group  ">
			<div className="  group-hover:bg-neutral-700 bg-neutral-400 transition-all duration-500 h-min flex">
				<Image
					className="group-hover:opacity-25"
					src={backgroundImg}
					height="230"
					width="400"
					alt="/"
					layout="intrinsic"
				/>
			</div>
			<div
				id="lStatus"
				className="w-14 top-0 left-0 absolute text-center text-white ml-2 mt-2"
			>
				{/* <h2 className="ml-2 mt-2 text-white">{lStatus}</h2> */}
			</div>
			<div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
				<h3 className="min-w-[200px] text-2xl lg:text-3xl font-thin text-white tracking-wider text-center">
					{title}
				</h3>
				<p className="md:hidden lg:block pt-2 lg:pt-0 font-thin text-xl text-white text-center">
					{area}
				</p>
				<p className="mb-4 pt-2 lg:pt-0 font-semibold text-xl lg:text-base text-white text-center">
					{price}
				</p>
				{/* DO NOT ACTIVE UNTIL ACTIVE LISTINGS APPEAR, THEN SELECTIVELY APPLY ONLY TO ACTIVE LISTINGS
				 <Link href={projectUrl}>
					<p className="text-center w-40 mx-auto py-3 border border-white hover:bg-teal-800 hover:border-teal-800 transition-all duration-500 text-white font-bold text-lg cursor-pointer">
						More Info
					</p>
				</Link> */}
			</div>
		</div>
	);
};

export default SoldItem;
