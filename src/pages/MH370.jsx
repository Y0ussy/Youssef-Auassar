import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import motionMoodboard from "../assets/motion-moodboard.png";

function MH370() {
	useEffect(() => {
		document.title = "Youssef Auassar | MH370";
	}, []);
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
							The Disappearance of MH370
						</span>
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-gray-700 px-4">
						Motion Design • Storytelling • Sound Design
					</p>
				</div>
			</section>

			{/* Hero Section with YouTube Video */}
			<section className="pb-12 sm:pb-20">
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
			<section className="py-12 sm:py-20">
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
								Een motion infographic over de verdwijning van MH370. Deze
								project combineert motion design, storytelling en sound design
								om het complexe verhaal van de verdwenen vlucht op een visueel
								aantrekkelijke en informatieve manier te vertellen.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Process Moodboard Section */}
			<section className="py-12 sm:py-20">
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
							De visuele inspiratie en conceptontwikkeling voor de MH370 motion
							infographic
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

			<Footer />
		</div>
	);
}

export default MH370;
