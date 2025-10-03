import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import debibImage from "../assets/debib.png";
import bibappImage from "../assets/bibapp.png";
import { useState, useRef, useEffect } from "react";

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

	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			{/* Project Title and Categories */}
			<section className="pt-24 sm:pt-32 pb-8 sm:pb-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-4 sm:mb-6">
						<span
							style={{
								fontFamily: "Poppins, sans-serif",
								fontWeight: "700"
							}}
						>
							De Bib
						</span>
					</h1>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
						App Design • UX Research • Visual Identity • Wireframing
					</p>
				</div>
			</section>
			{/* Hero Section */}
			<section className="pb-8 sm:pb-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<img
						src={bibappImage}
						alt="De Bib App Banner"
						className="w-full h-auto object-contain"
						onError={(e) => {
							console.error("Image failed to load:", bibappImage);
							e.target.style.display = "none";
						}}
					/>
				</div>
			</section>
			{/* About De Bib Section */}
			<section className="py-8 sm:py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left">
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-6 sm:mb-8">
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
								De Bib
							</span>
						</h2>
						<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
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
			<section className="pt-8 sm:pt-12 pb-4 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black">
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
						<div className="flex gap-4 sm:gap-6">
							{designImages.map((image, index) => (
								<div
									key={index}
									className="flex-shrink-0 w-64 sm:w-80 flex items-start justify-center"
								>
									<img
										src={image}
										alt={`De Bib Design ${index + 1}`}
										className="w-64 sm:w-80 h-auto object-contain pointer-events-none"
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

			<Footer />
		</div>
	);
}

export default DeBib;
