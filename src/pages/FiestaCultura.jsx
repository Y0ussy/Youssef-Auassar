import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import fiestaCulturaImage from "../assets/fiesta-showcase.png";
import bannerF from "../assets/fiesta-bannerr.png";
import wireframingF from "../assets/wireframing-f.png";
import prototypeF from "../assets/prototype-f.png";
import arrowUpBtn from "../assets/arow-up-btn.svg";
import studieMatchImage from "../assets/studie-match.png";
import debibImage from "../assets/debib.png";
import moodyImage from "../assets/moody.png";
import planeImage from "../assets/plane.png";

// Import iPhone design images for carousel
import iphone11 from "../assets/iPhone X, XS, 11 Pro – 11.png";
import iphone13 from "../assets/iPhone X, XS, 11 Pro – 13.png";
import iphone22 from "../assets/iPhone X, XS, 11 Pro – 22.png";
import iphone23 from "../assets/iPhone X, XS, 11 Pro – 23.png";
import iphone24 from "../assets/iPhone X, XS, 11 Pro – 24.png";
import iphone25 from "../assets/iPhone X, XS, 11 Pro – 25.png";
import iphone26 from "../assets/iPhone X, XS, 11 Pro – 26.png";
import iphone27 from "../assets/iPhone X, XS, 11 Pro – 27.png";
import iphone28 from "../assets/iPhone X, XS, 11 Pro – 28.png";
import iphone29 from "../assets/iPhone X, XS, 11 Pro – 29.png";
import iphone30 from "../assets/iPhone X, XS, 11 Pro – 30.png";
import iphone31 from "../assets/iPhone X, XS, 11 Pro – 31.png";
import iphone32 from "../assets/iPhone X, XS, 11 Pro – 32.png";
import iphone33 from "../assets/iPhone X, XS, 11 Pro – 33.png";
import iphone34 from "../assets/iPhone X, XS, 11 Pro – 34.png";
import iphone35 from "../assets/iPhone X, XS, 11 Pro – 35.png";
import iphone36 from "../assets/iPhone X, XS, 11 Pro – 36.png";
import iphone38 from "../assets/iPhone X, XS, 11 Pro – 38.png";
import iphone39 from "../assets/iPhone X, XS, 11 Pro – 39.png";
import iphone40 from "../assets/iPhone X, XS, 11 Pro – 40.png";
import iphone41 from "../assets/iPhone X, XS, 11 Pro – 41.png";
import iphone42 from "../assets/iPhone X, XS, 11 Pro – 42.png";
import iphone43 from "../assets/iPhone X, XS, 11 Pro – 43.png";
import iphone44 from "../assets/iPhone X, XS, 11 Pro – 44.png";
import iphone45 from "../assets/iPhone X, XS, 11 Pro – 45.png";
import iphone46 from "../assets/iPhone X, XS, 11 Pro – 46.png";
import iphone47 from "../assets/iPhone X, XS, 11 Pro – 47.png";

function FiestaCultura() {
	const carouselRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	const designImages = [
		iphone11,
		iphone13,
		iphone22,
		iphone23,
		iphone24,
		iphone25,
		iphone26,
		iphone27,
		iphone28,
		iphone29,
		iphone30,
		iphone31,
		iphone32,
		iphone33,
		iphone34,
		iphone35,
		iphone36,
		iphone38,
		iphone39,
		iphone40,
		iphone41,
		iphone42,
		iphone43,
		iphone44,
		iphone45,
		iphone46,
		iphone47
	];

	const handleMouseDown = (e) => {
		setIsDragging(true);
		setStartX(e.pageX - carouselRef.current.offsetLeft);
		setScrollLeft(carouselRef.current.scrollLeft);
	};

	const handleMouseLeave = () => {
		setIsDragging(false);
	};

	const handleMouseUp = () => {
		setIsDragging(false);
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - carouselRef.current.offsetLeft;
		const walk = (x - startX) * 2; // Scroll speed multiplier
		carouselRef.current.scrollLeft = scrollLeft - walk;
	};

	useEffect(() => {
		document.title = "Fiesta Cultura | Youssef Auassar Portfolio";

		// Add meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				"content",
				"Fiesta Cultura - A multicultural festival event app that brings different cultures together through music, dance, food, and traditions. UX research and app design project."
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content =
				"Fiesta Cultura - A multicultural festival event app that brings different cultures together through music, dance, food, and traditions. UX research and app design project.";
			document.head.appendChild(meta);
		}

		// Add Open Graph tags
		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute(
				"content",
				"Fiesta Cultura | Youssef Auassar Portfolio"
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:title");
			meta.content = "Fiesta Cultura | Youssef Auassar Portfolio";
			document.head.appendChild(meta);
		}

		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		);
		if (ogDescription) {
			ogDescription.setAttribute(
				"content",
				"Multicultural festival event app design that helps users discover cultural events, buy tickets, and share experiences."
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:description");
			meta.content =
				"Multicultural festival event app design that helps users discover cultural events, buy tickets, and share experiences.";
			document.head.appendChild(meta);
		}

		// Add keywords
		const keywords = document.querySelector('meta[name="keywords"]');
		if (keywords) {
			keywords.setAttribute(
				"content",
				"Fiesta Cultura, multicultural festival, app design, UX research, event app, cultural diversity, mobile design, Youssef Auassar, portfolio"
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "keywords";
			meta.content =
				"Fiesta Cultura, multicultural festival, app design, UX research, event app, cultural diversity, mobile design, Youssef Auassar, portfolio";
			document.head.appendChild(meta);
		}
	}, []);

	return (
		<div className="min-h-screen">
			<Navigation />
			{/* Project Title and Categories */}
			<section className="pt-8 sm:pt-12 pb-8 sm:pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-4 sm:mb-6">
						<span
							style={{
								fontFamily: "Poppins, sans-serif",
								fontWeight: "700"
							}}
						>
							Fiesta Cultura - Multicultural Festival App
						</span>
					</h1>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
						Festival | UI/UX Design, Branding
					</p>
				</div>
			</section>
			{/* Hero Section */}
			<section className="pb-8 sm:pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center">
						<img
							src={bannerF}
							alt="Fiesta Cultura Banner"
							className="w-full h-auto object-contain rounded-2xl"
						/>
					</div>
					{/* Timescale and Year */}
					<div className="flex items-start justify-between mt-6">
						<div className="flex items-start">
							<div>
								<p className="text-sm text-gray-500 mb-1">Timescale</p>
								<p className="text-lg font-semibold text-black">3 Weeks</p>
							</div>
							<div className="w-px h-12 bg-gray-300 mx-6"></div>
							<div>
								<p className="text-sm text-gray-500 mb-1">Year</p>
								<p className="text-lg font-semibold text-black">2023</p>
							</div>
						</div>
						<div className="ml-8">
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 bg-white border-2 border-black text-black pl-6 pr-4 py-2.5 rounded-full text-base font-semibold hover:bg-[#eeeeee] transition-colors duration-300 group"
							>
								View Prototype
								<div className="w-8 h-8 bg-gradient-to-bl from-[#d8d8d9] to-white rounded-full flex items-center justify-center">
									<img src={arrowUpBtn} alt="" className="w-7 h-7" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>
			{/* Description */}
			<section className="pt-4 pb-8 sm:pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p
							className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed max-w-6xl mx-auto"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Fiesta Cultura is a multicultural festival event app that brings
							different cultures together through music, dance, food and
							traditions. The app helps users discover cultural events, buy
							tickets and share their experiences with others. The platform
							combines modern app design with respect for cultural diversity.
						</p>
					</div>
				</div>
			</section>
			{/* Showcase Image */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center">
						<img
							src={fiestaCulturaImage}
							alt="Fiesta Cultura Showcase"
							className="w-full h-auto object-contain rounded-2xl"
						/>
					</div>
				</div>
			</section>
			{/* Project Context */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p
							className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed max-w-6xl mx-auto"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							For this project, I conducted extensive UX research to understand
							the needs of festival-goers. Through interviews, surveys and user
							testing, I designed an app that truly aligns with what users are
							looking for in a cultural festival platform. The result is an
							intuitive app that celebrates cultural diversity and brings people
							together.
						</p>
					</div>
				</div>
			</section>
			{/* Design Section */}
			<section className="pt-8 sm:pt-12 pb-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						ref={carouselRef}
						className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
						onMouseDown={handleMouseDown}
						onMouseLeave={handleMouseLeave}
						onMouseUp={handleMouseUp}
						onMouseMove={handleMouseMove}
					>
						<div className="flex gap-4 sm:gap-6">
							{designImages.map((image, index) => (
								<div
									key={index}
									className="flex-shrink-0 w-64 sm:w-80 flex items-start justify-center"
								>
									<img
										src={image}
										alt={`Fiesta Cultura Design ${index + 1}`}
										className="w-64 sm:w-80 h-auto object-contain pointer-events-none rounded-2xl"
										onError={(e) => {
											console.error("Carousel image failed to load:", image);
											e.target.style.display = "none";
										}}
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* Other Works Section */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-8 sm:mb-12 text-center">
						<span
							style={{
								fontFamily: "Playfair Display, serif",
								fontWeight: "normal",
								fontStyle: "italic"
							}}
						>
							Other{" "}
						</span>
						<span
							style={{
								fontFamily: "Poppins, sans-serif",
								fontWeight: "700"
							}}
						>
							Works
						</span>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-12">
						{/* Work 1 - Studie Match */}
						<Link to="/studie-match" className="block">
							<div className="rounded-none overflow-hidden">
								<div className="">
									<div className="relative mb-3 bg-gradient-to-t from-[#50AABE] to-[#DBF6F4] p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden">
										<img
											src={studieMatchImage}
											alt="Studie Match Website"
											className="w-24/25 h-24/25 object-contain transition-transform duration-300 hover:scale-102"
										/>
									</div>
									<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
										Studie Match
									</h3>
									<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
										A website that helps young people choose their studies
									</p>
								</div>
							</div>
						</Link>

						{/* Work 2 - DeBib */}
						<Link to="/de-bib" className="block">
							<div className="rounded-none overflow-hidden">
								<div className="">
									<div className="relative mb-3 bg-gradient-to-t from-[#0FB7AD] to-[#F1FEF9] p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden">
										<img
											src={debibImage}
											alt="De Bib App"
											className="w-[110%] h-[110%] object-contain -mb-6 transition-transform duration-300 hover:scale-102"
										/>
									</div>
									<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
										De Bib
									</h3>
									<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
										A modern library app for borrowing books
									</p>
								</div>
							</div>
						</Link>

						{/* Work 3 - Moody Mingle */}
						{/* <Link to="/moody-mingle" className="block">
							<div className="rounded-none overflow-hidden">
								<div className="">
									<div className="relative mb-3 bg-gradient-to-b from-[#FFFFFF] to-[#4B7BBE] p-2 sm:p-3 md:p-4 h-32 sm:h-40 md:h-48 flex items-center justify-center overflow-hidden">
										<img
											src={moodyImage}
											alt="Moody Mingle Chewing Gum"
											className="w-4/5 h-4/5 object-contain transition-transform duration-300 hover:scale-102"
										/>
									</div>
									<h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 md:mb-2 px-2 md:px-0">
										Moody Mingle
									</h3>
									<p className="text-gray-700 text-xs sm:text-sm md:text-base px-2 md:px-0">
										A chewing gum that connects people
									</p>
								</div>
							</div>
						</Link> */}

						{/* Work 4 - MH370 */}
						{/* <Link to="/mh370" className="block">
							<div className="rounded-none overflow-hidden">
								<div className="">
									<div className="relative mb-3 bg-gradient-to-b from-white to-gray-400 p-2 sm:p-3 md:p-4 h-32 sm:h-40 md:h-48 flex items-center justify-center overflow-hidden">
										<img
											src={planeImage}
											alt="MH370 Motion Infographic"
											className="w-24/25 h-24/25 object-contain transition-transform duration-300 hover:scale-102"
										/>
									</div>
									<h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 md:mb-2 px-2 md:px-0">
										The Disappearance of MH370
									</h3>
									<p className="text-gray-700 text-xs sm:text-sm md:text-base px-2 md:px-0">
										Een motion infographic over de verdwijning van MH370
									</p>
								</div>
							</div>
						</Link> */}
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default FiestaCultura;
