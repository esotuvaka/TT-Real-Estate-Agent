import Link from 'next/link';
import React from 'react';
import SoldItem from './SoldItem';

import sold1 from '../public/assets/sold/IG21189489.jpg';
import sold2 from '../public/assets/sold/OC21245797.jpg';
import sold3 from '../public/assets/sold/PW21270592.jpg';
import sold4 from '../public/assets/sold/PW22055324.jpg';

const Sold = () => {
	return (
		<div></div>

		// <div id="sold" className="w-full lg:h-screen p-2 bg-white">
		// 	<div className="max-w-[1800px] mx-auto px-2 py-16 my-20">
		// 		<h1 className="max-w-[1240px] mx-auto text-center text-xl tracking-widest uppercase text-teal-800">
		// 			Sold
		// 		</h1>
		// 		<h2 className="max-w-[1240px] mx-auto text-center py-4">
		// 			Previously sold homes
		// 		</h2>
		// 		<div className="grid md:grid-cols-4 gap-8">
		// 			<SoldItem
		// 				title="24301 Red Spruce Avenue "
		// 				area="Murrieta, CA, 92562 "
		// 				price="$625,000 "
		// 				backgroundImg={sold1}
		// 				projectUrl="/property"
		// 			/>
		// 			<SoldItem
		// 				title="330 Juanita Street "
		// 				area="La Habra, CA, 90631 "
		// 				price="$725,000 "
		// 				backgroundImg={sold2}
		// 				projectUrl="/crypto"
		// 			/>
		// 			<SoldItem
		// 				title="6350 Cardale Street"
		// 				area="Lakewood, CA, 90713"
		// 				price="$812,000"
		// 				backgroundImg={sold3}
		// 				projectUrl="/netflix"
		// 			/>
		// 			<SoldItem
		// 				title="28690 Brush Canyon Dr."
		// 				area="Yorba Linda, CA, 92887"
		// 				price="$1,450,000"
		// 				backgroundImg={sold4}
		// 				projectUrl="/twitch"
		// 			/>
		// 		</div>
		// 	</div>
		// </div>
	);
};

export default Sold;
