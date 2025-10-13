import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import bannerStudieMatch from "../assets/banner-studiematch.png";
import showcaseStudie from "../assets/showcase-studie.png";
import fiestaCulturaImage from "../assets/fiesta-cultura.png";
import debibImage from "../assets/debib.png";
// import moodyImage from "../assets/moody.png";
// import planeImage from "../assets/plane.png";
import arrowUpBtn from "../assets/arow-up-btn.svg";

function StudieMatch() {
	useEffect(() => {
		document.title = "Studie Match | Youssef Auassar Portfolio";

		// Add meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				"content",
				"Studie Match - A website that helps young people choose their ideal study direction based on their personality. Interactive RIASEC test with personalized study recommendations."
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content =
				"Studie Match - A website that helps young people choose their ideal study direction based on their personality. Interactive RIASEC test with personalized study recommendations.";
			document.head.appendChild(meta);
		}

		// Add Open Graph tags
		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute(
				"content",
				"Studie Match | Youssef Auassar Portfolio"
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:title");
			meta.content = "Studie Match | Youssef Auassar Portfolio";
			document.head.appendChild(meta);
		}

		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		);
		if (ogDescription) {
			ogDescription.setAttribute(
				"content",
				"Interactive web application that helps young people find their ideal study direction based on personality through RIASEC testing."
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:description");
			meta.content =
				"Interactive web application that helps young people find their ideal study direction based on personality through RIASEC testing.";
			document.head.appendChild(meta);
		}

		// Add keywords
		const keywords = document.querySelector('meta[name="keywords"]');
		if (keywords) {
			keywords.setAttribute(
				"content",
				"Studie Match, study choice, RIASEC test, personality test, education, web development, UI/UX design, Youssef Auassar, portfolio, interactive website"
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "keywords";
			meta.content =
				"Studie Match, study choice, RIASEC test, personality test, education, web development, UI/UX design, Youssef Auassar, portfolio, interactive website";
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
							Studie Match - Study Choice Website
						</span>
					</h1>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
						Education | UI & UX Design, Development
					</p>
				</div>
			</section>
			{/* Hero Section */}
			<section className="pb-8 sm:pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center">
						<img
							src={bannerStudieMatch}
							alt="Studie Match Banner"
							className="w-full h-auto object-contain rounded-2xl"
						/>
					</div>
					{/* Timescale and Year */}
					<div className="flex items-start justify-between mt-6">
						<div className="flex items-start">
							<div>
								<p className="text-sm text-gray-500 mb-1">Timescale</p>
								<p className="text-lg font-semibold text-black">2.5 Months</p>
							</div>
							<div className="w-px h-12 bg-gray-300 mx-6"></div>
							<div>
								<p className="text-sm text-gray-500 mb-1">Year</p>
								<p className="text-lg font-semibold text-black">2025</p>
							</div>
						</div>
						<div className="ml-8">
							<a
								href="https://studie-match.vercel.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 bg-white border-2 border-black text-black pl-6 pr-4 py-2.5 rounded-full text-base font-semibold hover:bg-[#eeeeee] transition-colors duration-300 group"
							>
								View Live Site
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
							Studiematch uses an interactive personality test based on the
							RIASEC model (Holland theory), where young people discover
							themselves within six personality types: Realistic, Investigative,
							Artistic, Social, Enterprising and Conventional. Based on their
							results, the platform shows study directions and professions that
							match. Each recommendation is supplemented with informative
							descriptions of the education programs that align with these
							choices.
						</p>
					</div>
				</div>
			</section>
			{/* Showcase Image */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-center">
						<img
							src={showcaseStudie}
							alt="Studie Match Showcase"
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
							For my bachelor's project, I created this website to address a
							common challenge many young people face in secondary education:
							choice stress when determining their study direction. They often
							have insufficient insight into their own interests and strengths,
							making it difficult to make a targeted choice. StudieMatch aims to
							tackle this problem through an accessible and visually appealing
							web application that helps young people discover which study
							directions truly suit them.
						</p>
					</div>
				</div>
			</section>
			{/* Design System */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Color Palette */}
						<div
							className="rounded-2xl py-24 px-2"
							style={{ backgroundColor: "#f2f2f2" }}
						>
							<div className="flex justify-center">
								<div
									className="w-24 h-85"
									style={{
										backgroundColor: "#FFFFFF",
										border: "1px solid #e5e5e5"
									}}
								></div>{" "}
								<div
									className="w-24 h-85"
									style={{ backgroundColor: "#DDF7F5" }}
								></div>
								<div
									className="w-24 h-85"
									style={{ backgroundColor: "#48A6BB" }}
								></div>
								<div
									className="w-24 h-85"
									style={{ backgroundColor: "#000000" }}
								></div>
							</div>
						</div>

						{/* Typography */}
						<div
							className="rounded-2xl py-8 px-2"
							style={{ backgroundColor: "#f2f2f2" }}
						>
							<div className="text-center flex flex-col items-center justify-center h-full">
								<div
									className="text-9xl font-bold text-black mb-4"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Aa
								</div>
								<div
									className="text-6xl text-black"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Poppins
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Process Section */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<p
							className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed max-w-6xl mx-auto"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							The development process involved extensive user research,
							iterative design, and careful attention to visual hierarchy.
							Through multiple testing phases with target users, I refined the
							interface to ensure maximum clarity and engagement for students
							navigating their educational journey.
						</p>
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
						{/* Work 1 - Fiesta Cultura */}
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
										Een multiculturele festival event app
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
										Een moderne bibliotheek app voor het lenen van boeken
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
										Een kauwgom die mensen verbindt
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
			{/* Commented out sections - About, GIFs, Showreel, and Call to Action */}
			<Footer />
		</div>
	);
}

export default StudieMatch;
