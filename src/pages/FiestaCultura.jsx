import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import fiestaCulturaImage from "../assets/fiesta-cultura.png";
import bannerF from "../assets/banner-f.png";
import wireframingF from "../assets/wireframing-f.png";
import prototypeF from "../assets/prototype-f.png";
import { useState, useRef, useEffect } from "react";

// Import all iPhone images
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
import small1 from "../assets/small-1.png";

function FiestaCultura() {
	const carouselRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	useEffect(() => {
		document.title = "Youssef Auassar | Fiesta Cultura";
	}, []);

	const iphoneImages = [
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
		iphone47,
		small1
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

	return (
		<div className="min-h-screen">
			<Navigation />
			{/* Project Title and Categories */}
			<section className="pt-40 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl md:text-6xl lg:text-7xl text-black mb-6">
						<span
							style={{
								fontFamily: "Poppins, sans-serif",
								fontWeight: "700"
							}}
						>
							Fiesta Cultura
						</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-700">
						App Design • UX Research • Visual Identity • Wireframing
					</p>
				</div>
			</section>
			{/* Hero Section */}
			<section className="pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<img
						src={bannerF}
						alt="Fiesta Cultura Festival Banner"
						className="w-full h-auto object-contain"
					/>
				</div>
			</section>
			{/* About Fiesta Cultura Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left">
						<h2 className="text-4xl md:text-5xl text-black mb-8">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								About{" "}
							</span>
							<span
								style={{
									fontFamily: "Poppins, sans-serif",
									fontWeight: "700"
								}}
							>
								Fiesta Cultura
							</span>
						</h2>
						<p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
							Fiesta Cultura is een multiculturele festival event app die
							verschillende culturen samenbrengt door middel van muziek, dans,
							eten en tradities. De app helpt gebruikers om culturele
							evenementen te ontdekken, tickets te kopen en hun ervaringen te
							delen met anderen. Het platform combineert moderne app design met
							respect voor culturele diversiteit.
						</p>
					</div>
				</div>
			</section>

			{/* Wireframing & Prototype Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left mb-12">
						<h2 className="text-4xl md:text-5xl text-black mb-6">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								Wireframing &{" "}
							</span>
							<span
								style={{
									fontFamily: "Poppins, sans-serif",
									fontWeight: "700"
								}}
							>
								Prototype
							</span>
						</h2>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="flex justify-center">
							<img
								src={wireframingF}
								alt="Fiesta Cultura Wireframing Process"
								className="w-full h-auto object-contain"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src={prototypeF}
								alt="Fiesta Cultura Interactive Prototype"
								className="w-full h-auto object-contain"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Design Section */}
			<section className="pt-20 pb-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between mb-12">
						<h2 className="text-4xl md:text-5xl text-black">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								Design
							</span>
						</h2>
					</div>
					<div
						ref={carouselRef}
						className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
						style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
						onMouseDown={handleMouseDown}
						onMouseLeave={handleMouseLeave}
						onMouseUp={handleMouseUp}
						onMouseMove={handleMouseMove}
					>
						<div className="flex gap-6">
							{iphoneImages.map((image, index) => (
								<div
									key={index}
									className="flex-shrink-0 w-80 flex items-start justify-center"
								>
									<img
										src={image}
										alt={`Fiesta Cultura Design ${index + 1}`}
										className="w-80 h-auto object-contain pointer-events-none"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default FiestaCultura;
