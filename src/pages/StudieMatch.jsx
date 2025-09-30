import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import studieLogo from "../assets/studie-logo.png";
import studieMatchImage from "../assets/studiematch-big.png";

function StudieMatch() {
	return (
		<div className="min-h-screen">
			<Navigation />
			{/* Project Title and Categories */}
			<section className="pt-32 sm:pt-40 pb-12 sm:pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-4 sm:mb-6">
						<span
							style={{
								fontFamily: "Poppins, sans-serif",
								fontWeight: "700"
							}}
						>
							Studie Match
						</span>
					</h1>
					<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
						Web Development • Website design, UX research, Visual identity
					</p>
				</div>
			</section>
			{/* Hero Section */}
			<section className="pb-12 sm:pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative bg-gradient-to-t from-[#50AABE] to-[#DBF6F4] overflow-hidden">
						{/* Main image centered */}
						<div className="flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-16">
							<img
								src={studieMatchImage}
								alt="Studie Match Website"
								className="w-full sm:w-3/4 h-auto object-contain transition-transform duration-300 hover:scale-102"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* About Studie Match Section */}
			<section className="py-12 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center">
						{/* Large logo */}
						<div className="lg:col-span-1 flex justify-center">
							<img
								src={studieLogo}
								alt="Studie Match Logo"
								className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-contain"
							/>
						</div>

						{/* Description */}
						<div className="lg:col-span-2 text-left">
							<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-6 sm:mb-8 text-left">
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
									Studie Match
								</span>
							</h2>
							<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed text-left">
								Studiematch is een interactieve webapplicatie die jongeren helpt
								hun ideale studierichting te vinden op basis van hun
								persoonlijkheid. Via een visuele RIASEC-test ontdekken
								leerlingen hun profiel en krijgen ze studierichtingen aanbevolen
								die écht bij hen passen. Het platform combineert design,
								gebruiksvriendelijkheid en slimme technologie om studiekeuze
								leuker en persoonlijker te maken.
							</p>
							<blockquote
								className="text-sm sm:text-base md:text-lg italic border-l-4 pl-4 sm:pl-6 text-left"
								style={{ borderLeftColor: "#56adc0" }}
							>
								"Een speels en vet lettertype dat jongeren aanspreekt, met een
								afstudeerhoed en frisse groene achtergrond die groei en kansen
								symboliseert."
							</blockquote>
						</div>
					</div>
				</div>
			</section>

			{/* GIFs Section */}
			<section className="py-12 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
						{/* Home Page GIF */}
						<div className="flex justify-center">
							<img
								src="/src/assets/studiematch-home-ezgif.com-video-to-gif-converter.gif"
								alt="StudieMatch Home Page Demo"
								className="w-full max-w-xl sm:max-w-2xl"
							/>
						</div>

						{/* Test GIF */}
						<div className="flex justify-center">
							<img
								src="/src/assets/studiematch-test-ezgif.com-video-to-gif-converter.gif"
								alt="StudieMatch Test Demo"
								className="w-full max-w-xl sm:max-w-2xl"
							/>
						</div>
					</div>

					{/* Types and Filter GIFs - Side by Side */}
					<div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
						{/* Types GIF */}
						<div className="flex justify-center">
							<img
								src="/src/assets/studiematch-types-ezgif.com-video-to-gif-converter.gif"
								alt="StudieMatch Personality Types Demo"
								className="w-full max-w-xl sm:max-w-2xl"
							/>
						</div>

						{/* Filter GIF */}
						<div className="flex justify-center">
							<img
								src="/src/assets/studiematch-filter-ezgif.com-video-to-gif-converter.gif"
								alt="StudieMatch Filter Demo"
								className="w-full max-w-xl sm:max-w-2xl"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Showreel Video Section */}
			<section className="py-12 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2
						className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-8 sm:mb-12 text-center"
						style={{
							fontFamily: "Playfair Display, serif",
							fontWeight: "normal",
							fontStyle: "italic"
						}}
					>
						Showreel
					</h2>
					<div className="flex justify-center">
						<iframe
							width="1000"
							height="562"
							src="https://www.youtube.com/embed/4gw4rh8zOsU?si=DDvSFuBnmJ31tN7u"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							referrerpolicy="strict-origin-when-cross-origin"
							allowfullscreen
							className="border-0 w-full max-w-4xl h-auto aspect-video"
							style={{ border: "none", outline: "none" }}
						></iframe>
					</div>
				</div>
			</section>
			{/* Call to Action */}
			<section className="py-12 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<button className="bg-white border-2 border-black text-black px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-semibold hover:bg-black hover:text-white transition-colors duration-300">
						Bezoek website
					</button>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default StudieMatch;
