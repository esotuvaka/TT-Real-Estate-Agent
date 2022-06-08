import Head from 'next/head';
import About from '../components/About';
import Contact from '../components/Contact';
import Main from '../components/Main';
import Sold from '../components/Sold';
import Properties from '../components/Properties';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Tamar Tarkhanian | California Real Estate Agent</title>
				<meta
					name="description"
					content="Tamar Tarkhanian is an Irvine real estate agent with years of experience and a very active presence in the community. Whether you're looking to buy or sell, or a rental property, her expertise and support for clients can make your real estate experience stress-free!"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Main />
			<About />
			<Properties />
			<Sold />
			<Contact />
			<Footer />
		</div>
	);
}
