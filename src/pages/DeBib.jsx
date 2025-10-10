import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import debibImage from "../assets/debib.png";
import debibShowcaseImage from "../assets/debib-showcase.png";
import arrowUpBtn from "../assets/arow-up-btn.svg";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import studieMatchImage from "../assets/studie-match.png";
import fiestaCulturaImage from "../assets/fiesta-cultura.png";
import moodyImage from "../assets/moody.png";
import planeImage from "../assets/plane.png";

// Import all design assets for the carousel
import activiteitenKalender from "../assets/Activiteiten - kalender.png";
import alleGenres from "../assets/Alle genres.png";
import drama from "../assets/Drama.png";
import favorieten from "../assets/Favorieten.png";
import filmstreaming from "../assets/Filmstreaming.png";
import inspireren from "../assets/Inspireren.png";
import locatiesMuntpunt from "../assets/Locaties - Muntpunt.png";
import locaties1 from "../assets/Locaties 1.png";
import ont from "../assets/ont.png";
import ontvangenBoeken from "../assets/Ontvangen boeken.png";
import startpagina from "../assets/Startpagina.png";

function DeBib() {
	const carouselRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const [startX, setStartX] = useState(0);
	const [scrollLeft, setScrollLeft] = useState(0);

	useEffect(() => {
		document.title = "De Bib | Youssef Auassar Portfolio";

		// Add meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				"content",
				"De Bib - A modern library app for borrowing books, eBooks, and audiobooks. UI/UX design project for the local library in Brussels with user-friendly interface."
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content =
				"De Bib - A modern library app for borrowing books, eBooks, and audiobooks. UI/UX design project for the local library in Brussels with user-friendly interface.";
			document.head.appendChild(meta);
		}

		// Add Open Graph tags
		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute("content", "De Bib | Youssef Auassar Portfolio");
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:title");
			meta.content = "De Bib | Youssef Auassar Portfolio";
			document.head.appendChild(meta);
		}

		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		);
		if (ogDescription) {
			ogDescription.setAttribute(
				"content",
				"Modern library app design for borrowing books, eBooks, and audiobooks with user-friendly interface and book sharing features."
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:description");
			meta.content =
				"Modern library app design for borrowing books, eBooks, and audiobooks with user-friendly interface and book sharing features.";
			document.head.appendChild(meta);
		}

		// Add keywords
		const keywords = document.querySelector('meta[name="keywords"]');
		if (keywords) {
			keywords.setAttribute(
				"content",
				"De Bib, library app, book borrowing, eBooks, audiobooks, UI/UX design, Brussels library, app design, Youssef Auassar, portfolio"
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "keywords";
			meta.content =
				"De Bib, library app, book borrowing, eBooks, audiobooks, UI/UX design, Brussels library, app design, Youssef Auassar, portfolio";
			document.head.appendChild(meta);
		}
	}, []);

	const designImages = [
		startpagina,
		activiteitenKalender,
		alleGenres,
		drama,
		favorieten,
		filmstreaming,
		inspireren,
		locatiesMuntpunt,
		locaties1,
		ont,
		ontvangenBoeken
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

	const scrollToCarousel = () => {
		const carouselElement = document.getElementById("design-carousel");
		if (carouselElement) {
			carouselElement.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
	};

	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			{/* Project Title and Categories */}
			<section className="pt-8 sm:pt-12 pb-8 sm:pb-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-4 sm:mb-6">
						<span
							style={{
								fontFamily: "Poppins, sans-serif",
								fontWeight: "700"
							}}
						>
							De Bib - Modern Library App
						</span>
					</h1>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
						Library | UI/UX Design
					</p>
				</div>
			</section>
			{/* Hero Section */}
			<section className="pb-8 sm:pb-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center">
						<img
							src={debibShowcaseImage}
							alt="De Bib App Showcase"
							className="w-full h-auto object-contain rounded-2xl"
							onError={(e) => {
								console.error("Image failed to load:", debibShowcaseImage);
								e.target.style.display = "none";
							}}
						/>
					</div>
					{/* Timescale and Year */}
					<div className="flex items-start justify-between mt-6">
						<div className="flex items-start">
							<div>
								<p className="text-sm text-gray-500 mb-1">Timescale</p>
								<p className="text-lg font-semibold text-black">1 Month</p>
							</div>
							<div className="w-px h-12 bg-gray-300 mx-6"></div>
							<div>
								<p className="text-sm text-gray-500 mb-1">Year</p>
								<p className="text-lg font-semibold text-black">2024</p>
							</div>
						</div>
						<div className="ml-8">
							<button
								onClick={scrollToCarousel}
								className="inline-flex items-center gap-2.5 bg-white border-2 border-black text-black pl-6 pr-4 py-2.5 rounded-full text-base font-semibold hover:bg-[#eeeeee] transition-colors duration-300 group"
							>
								View Design
								<div className="w-8 h-8 bg-gradient-to-bl from-[#d8d8d9] to-white rounded-full flex items-center justify-center">
									<img src={arrowUpBtn} alt="" className="w-7 h-7" />
								</div>
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* Description */}
			<section className="pt-4 pb-8 sm:pb-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p
							className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed max-w-6xl mx-auto"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							This is a UI/UX design for a mobile app based on the existing
							website BIB, which offers a wide variety of books, eBooks,
							audiobooks, and more. The app features a user-friendly interface
							and includes a feature that allows users to share books with
							others and more. This was a task for the class to make an app for
							the local library in Brussels.
						</p>
					</div>
				</div>
			</section>

			{/* Design Section */}
			<section
				id="design-carousel"
				className="pt-8 sm:pt-12 pb-8 sm:pb-12 bg-white"
			>
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
										alt={`De Bib Design ${index + 1}`}
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

			{/* Process Section */}
			<section className="pt-8 sm:pt-12 pb-8 sm:pb-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<div className="max-w-6xl mx-auto">
							<p
								className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								This project was part of a class assignment to create a mobile
								app for the Flemish library system. The challenge was that there
								was only one main library website for all of Flanders, so we
								needed to understand their needs and user requirements. To
								ensure the app would meet real user needs, we conducted
								interviews with library staff members who work directly with
								visitors every day. These conversations helped us understand the
								pain points in the current system and identify key features that
								would make the library experience more accessible and
								user-friendly.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Other Works Section */}
			<section className="py-8 sm:py-12 bg-white">
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

						{/* Work 2 - Fiesta Cultura */}
						<Link to="/fiesta-cultura" className="block">
							<div className="rounded-none overflow-hidden">
								<div className="">
									<div className="relative mb-3 bg-gradient-to-t from-[#EA7B96] to-[#FFF7F7] p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden">
										<img
											src={fiestaCulturaImage}
											alt="Fiesta Cultura App"
											className="w-[110%] h-[110%] object-contain -mb-6 transition-transform duration-300 hover:scale-102"
										/>
									</div>
									<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
										Fiesta Cultura
									</h3>
									<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
										A multicultural festival event app
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

export default DeBib;
