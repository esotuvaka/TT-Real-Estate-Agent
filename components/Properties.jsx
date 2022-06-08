import React from 'react';
import sold1 from '../public/assets/sold/IG21189489.jpg';
import sold2 from '../public/assets/sold/OC21245797.jpg';
import sold3 from '../public/assets/sold/PW21270592.jpg';
import sold4 from '../public/assets/sold/PW22055324.jpg';

import sold5 from '../public/assets/sold/CV20208205.jpg';
import sold6 from '../public/assets/sold/OC21012810.jpg';
import sold7 from '../public/assets/sold/OC20081148.jpg';
import sold8 from '../public/assets/sold/PW20212466.jpg';
import SoldItem from './SoldItem';

const Properties = () => {
	return (
		<div id="properties" className="w-full lg:h-screen p-2 bg-white">
			<div className="max-w-[1800px] mx-auto px-2 py-16 my-20">
				<h1 className="max-w-[1240px] mx-auto text-center text-xl tracking-widest uppercase text-teal-800">
					Properties
				</h1>
				<h2 className="max-w-[1240px] mx-auto text-center py-4">
					Browse our Exclusive Listings
				</h2>
				<div className="grid md:grid-cols-4 gap-8">
					<SoldItem
						title="24301 Red Spruce Avenue "
						area="Murrieta, CA, 92562 "
						price="$625,000 "
						backgroundImg={sold1}
						lStatus="Sold"
					/>
					<SoldItem
						title="330 Juanita Street "
						area="La Habra, CA, 90631 "
						price="$725,000 "
						backgroundImg={sold2}
						lStatus="Sold"
					/>
					<SoldItem
						title="6350 Cardale Street"
						area="Lakewood, CA, 90713"
						price="$812,000"
						backgroundImg={sold3}
						lStatus="Sold"
					/>
					<SoldItem
						title="28690 Brush Canyon Dr."
						area="Yorba Linda, CA, 92887"
						price="$1,450,000"
						backgroundImg={sold4}
						lStatus="Sold"
					/>
					<SoldItem
						title="11158 Luke Street"
						area="Riverside, CA, 92505"
						price="$490,000"
						backgroundImg={sold5}
						lStatus="Sold"
					/>
					<SoldItem
						title="2213 Dorado Street"
						area="Corona, CA, 92879"
						price="$465,000"
						backgroundImg={sold6}
						lStatus="Sold"
					/>
					<SoldItem
						title="31 Bijou"
						area="Irvine, CA, 92618"
						price="$3,050 / mo"
						backgroundImg={sold7}
						lStatus="Sold"
					/>
					<SoldItem
						title="33 Wheatberry #2"
						area="Irvine, CA, 92618"
						price="$3,000 / mo"
						backgroundImg={sold8}
						lStatus="Sold"
					/>
				</div>
			</div>
		</div>
	);
};

export default Properties;
