import React from 'react';
import sold1 from '../public/assets/sold/IG21189489.jpg';
import sold2 from '../public/assets/sold/OC21245797.jpg';
import sold3 from '../public/assets/sold/PW21270592.jpg';
import sold4 from '../public/assets/sold/PW22055324.jpg';

import sold5 from '../public/assets/sold/CV20208205.jpg';
import sold6 from '../public/assets/sold/OC21012810.jpg';
import sold7 from '../public/assets/sold/OC21037553.jpg';
import sold8 from '../public/assets/sold/PW20212466.jpg';
import SoldItem from './SoldItem';

const Properties = () => {
	return (
		<div
			id="properties"
			className="w-full lg:h-screen xl:h-[70vh] 2xl:h-[90vh]   flex justify-center items-center bg-white"
		>
			<div className="flex flex-col md:max-w-2xl mx-auto py-24 lg:pb-0 2xl:py-0 sm:max-w-xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-[80%] lg:my-0">
				<h1 className="max-w-[1240px] mx-auto text-center text-xl tracking-widest uppercase text-teal-800 2xl:text-3xl">
					Browse our Exclusive Listings
				</h1>
				<h2 className="max-w-[1240px] mx-auto text-center py-4 2xl:text-6xl">
					Previously Sold
				</h2>
				<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-2 lg:gap-4">
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
						title="28690 Brush Canyon"
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
						title="1675 N Allen Ave."
						area="Pasadena, CA, 91104"
						price="$900,000"
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
