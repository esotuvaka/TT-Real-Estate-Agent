import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaInstagram, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../public/assets/tt-branding/tamar-logo-b.png';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg] = useState('#ffff');
	const [linkColor, setLinkColor] = useState('#1f2937');

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<header
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? 'fixed w-full h-20  shadow-xl z-[100] '
					: 'fixed w-full  h-20 z-[100] '
			}
		>
			<div className="flex justify-between items-center w-4/5 md:max-w-[1240px] mx-auto h-full 2xl:max-w-[67%]">
				<Link href="/" className="w-[50px] h-[50px] ">
					<Image
						src={Logo}
						alt="/"
						width="50"
						height="50"
						className="hover:cursor-pointer"
					/>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className="hidden md:flex tracking-wider "
					>
						<Link href="/">
							<li className="ml-10 text-sm 2xl:text-xl uppercase tracking-widest transition-all duration-500 hover:border-b hover:border-black">
								Home
							</li>
						</Link>
						<Link href="/#about">
							<li className="ml-10 text-sm 2xl:text-xl uppercase tracking-widest transition-all duration-500 hover:border-b hover:border-black">
								About
							</li>
						</Link>
						<Link href="/#properties">
							<li className="ml-10 text-sm 2xl:text-xl uppercase tracking-widest transition-all duration-500 hover:border-b hover:border-black">
								Properties
							</li>
						</Link>
						<Link href="/#contact">
							<li className="ml-10 text-sm 2xl:text-xl uppercase tracking-widest transition-all duration-500 hover:border-b hover:border-black">
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className="md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			{/* MOBILE MENU */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ffff] p-10 py-4 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<Link href="/">
								<Image
									src="/../public/assets/tt-branding/tamar-logo-b.png"
									width="50"
									height="50"
									alt="/"
									priority
								/>
							</Link>
							<div
								onClick={handleNav}
								className="  shadow-gray-400 p-3 cursor-pointer"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="border-b border-gray-300 my-4">
							<h1 className="w-[85%] md:w-[90%] font-semibold text-2xl text-teal-800 text-center py-4">
								Let&apos;s find your dream home
							</h1>
						</div>
					</div>
					<div className="py-4 flex flex-col">
						<ul className="uppercase">
							<Link href="/">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									About
								</li>
							</Link>
							<Link href="/#properties">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Properties
								</li>
							</Link>
							<Link href="/#contact">
								<li
									onClick={() => setNav(false)}
									className="py-4 text-sm text-teal-800 font-semibold"
								>
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-teal-800 text-center">
								Let&apos;s Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<div className="shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaLinkedinIn />
								</div>
								<div className="shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaFacebook />
								</div>
								<div className="shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
									<FaInstagram />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
