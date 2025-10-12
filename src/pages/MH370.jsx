import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import motionMoodboard from "../assets/motion-moodboard.png";
import studieMatchImage from "../assets/studie-match.png";
import fiestaCulturaImage from "../assets/fiesta-cultura.png";
import debibImage from "../assets/debib.png";

function MH370() {
	useEffect(() => {
		document.title = "MH370 Motion Design | Youssef Auassar Portfolio";

		// Add meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				"content",
				"The Disappearance of MH370 - A motion infographic about the disappearance of flight MH370. Motion design project combining storytelling, sound design, and visual communication."
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content =
				"The Disappearance of MH370 - A motion infographic about the disappearance of flight MH370. Motion design project combining storytelling, sound design, and visual communication.";
			document.head.appendChild(meta);
		}

		// Add Open Graph tags
		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute(
				"content",
				"MH370 Motion Design | Youssef Auassar Portfolio"
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:title");
			meta.content = "MH370 Motion Design | Youssef Auassar Portfolio";
			document.head.appendChild(meta);
		}

		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		);
		if (ogDescription) {
			ogDescription.setAttribute(
				"content",
				"Motion infographic about the disappearance of MH370 combining motion design, storytelling, and sound design for visual communication."
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:description");
			meta.content =
				"Motion infographic about the disappearance of MH370 combining motion design, storytelling, and sound design for visual communication.";
			document.head.appendChild(meta);
		}

		// Add keywords
		const keywords = document.querySelector('meta[name="keywords"]');
		if (keywords) {
			keywords.setAttribute(
				"content",
				"MH370, motion design, infographic, storytelling, sound design, After Effects, motion graphics, Youssef Auassar, portfolio, visual communication"
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "keywords";
			meta.content =
				"MH370, motion design, infographic, storytelling, sound design, After Effects, motion graphics, Youssef Auassar, portfolio, visual communication";
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
							The Disappearance of MH370
						</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-gray-700 px-4">
						Motion Design • Storytelling • Sound Design
					</p>
				</div>
			</section>

			{/* Hero Section with YouTube Video */}
			<section className="pb-8 sm:pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative bg-gradient-to-b from-white to-gray-400 overflow-hidden">
						{/* YouTube iframe centered */}
						<div className="flex items-center justify-center p-4 sm:p-8 lg:p-16">
							<iframe
								width="560"
								height="315"
								src="https://www.youtube.com/embed/UmYeUfcMMdI?si=7GFhs4EM7uyZXfoP"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
								className="w-full max-w-4xl h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			{/* About MH370 Section */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
						{/* Description */}
						<div className="lg:col-span-2 text-center lg:text-left">
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
									The Project
								</span>
							</h2>
							<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed px-4 lg:px-0">
								A motion infographic about the disappearance of MH370. This
								project combines motion design, storytelling and sound design to
								tell the complex story of the missing flight in a visually
								appealing and informative way.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process Moodboard Section */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								Process{" "}
							</span>
							<span
								style={{
									fontFamily: "Poppins, sans-serif",
									fontWeight: "700"
								}}
							>
								Moodboard
							</span>
						</h2>
						<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
							The visual inspiration and concept development for the MH370
							motion infographic
						</p>
					</div>
					<div className="flex justify-center px-4 sm:px-0">
						<img
							src={motionMoodboard}
							alt="MH370 Motion Design Moodboard"
							className="w-full max-w-5xl h-auto object-contain shadow-lg"
						/>
					</div>
				</div>
			</section>

			{/* Other Projects Section */}
			<section className="py-8 sm:py-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8 sm:mb-12">
						<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6">
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
								Projects
							</span>
						</h2>
						<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-4">
							Explore more of my creative work and digital design projects
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{/* Studie Match Project */}
						<Link to="/studie-match" className="block">
							<div className="rounded-none overflow-hidden">
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
									A website that helps young people with their study choice
								</p>
							</div>
						</Link>

						{/* Fiesta Cultura Project */}
						<Link to="/fiesta-cultura" className="block">
							<div className="rounded-none overflow-hidden">
								<div className="relative mb-3 bg-gradient-to-t from-[#EA7B96] to-[#FFF7F7] p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden">
									<img
										src={fiestaCulturaImage}
										alt="Fiesta Cultura App"
										className="w-[110%] h-[110%] object-contain -mb-8 transition-transform duration-300 hover:scale-102"
									/>
								</div>
								<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
									Fiesta Cultura
								</h3>
								<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
									A multicultural festival event app
								</p>
							</div>
						</Link>

						{/* De Bib Project */}
						<Link to="/de-bib" className="block">
							<div className="rounded-none overflow-hidden">
								<div className="relative mb-3 bg-gradient-to-t from-[#0FB7AD] to-[#F1FEF9] p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden">
									<img
										src={debibImage}
										alt="De Bib App"
										className="w-[110%] h-[110%] object-contain -mb-8 transition-transform duration-300 hover:scale-102"
									/>
								</div>
								<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
									De Bib
								</h3>
								<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
									A modern library app for borrowing books
								</p>
							</div>
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default MH370;
