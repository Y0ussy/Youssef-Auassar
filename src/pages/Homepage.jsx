import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import figmaLogo from "../assets/Figma-logo.svg.png";
import photoshopLogo from "../assets/photoshop-icon.png";
import illustratorLogo from "../assets/Adobe_Illustrator_CC_icon.svg.png";
import htmlLogo from "../assets/htmlll.png";
import cssLogo from "../assets/csssss.svg";
import reactLogo from "../assets/react_original_wordmark_logo_icon_146375.png";
import Loading from "../components/Loading";
import faceImage from "../assets/face.png";
import studieMatchImage from "../assets/studie-match.png";
import fiestaCulturaImage from "../assets/fiesta-cultura.png";

function Homepage() {
	const [isLoading, setIsLoading] = useState(true);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	const words = [
		"Creative",
		"Innovative",
		"Intuitive",
		"Impactful",
		"Immersive",
		"Visionary"
	];

	useEffect(() => {
		// Check if the user has already seen the intro animation
		const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
		console.log("hasSeenIntro:", hasSeenIntro);
		if (hasSeenIntro === "true") {
			console.log("User has seen intro, skipping loading");
			setIsLoading(false);
		} else {
			console.log("User hasn't seen intro, showing loading");

			// Fallback: Force transition after 5 seconds if something goes wrong
			const fallbackTimer = setTimeout(() => {
				console.log("Fallback timer triggered, forcing transition to homepage");
				setIsLoading(false);
				sessionStorage.setItem("hasSeenIntro", "true");
			}, 5000);

			return () => clearTimeout(fallbackTimer);
		}
	}, []);

	useEffect(() => {
		// Typewriter effect
		const timeout = setTimeout(
			() => {
				const currentWord = words[currentWordIndex];

				if (isDeleting) {
					// Deleting characters
					setCurrentText(currentWord.substring(0, currentText.length - 1));
				} else {
					// Typing characters
					setCurrentText(currentWord.substring(0, currentText.length + 1));
				}

				// If word is complete, start deleting after a pause
				if (!isDeleting && currentText === currentWord) {
					setTimeout(() => setIsDeleting(true), 1000);
				}
				// If word is deleted, move to next word
				else if (isDeleting && currentText === "") {
					setIsDeleting(false);
					setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
				}
			},
			isDeleting ? 100 : 150
		); // Faster deletion, slower typing

		return () => clearTimeout(timeout);
	}, [currentText, isDeleting, currentWordIndex, words]);

	const handleLoadingComplete = useCallback(() => {
		console.log("handleLoadingComplete called, setting isLoading to false");
		setIsLoading(false);
		// Mark that the user has seen the intro animation
		sessionStorage.setItem("hasSeenIntro", "true");
	}, []);

	if (isLoading) {
		return <Loading onLoadingComplete={handleLoadingComplete} />;
	}

	return (
		<div className="min-h-screen animate-fade-in">
			<Navigation />

			{/* Hero Section */}
			<section className="pt-32 md:pt-40 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto text-center">
					{/* Greeting */}
					<div className="flex items-center justify-center mb-4 md:mb-6">
						<div className="text-xl md:text-2xl mr-2 md:mr-3 animate-bounce">
							👋
						</div>
						<p
							className="text-base md:text-lg"
							style={{
								fontFamily: "Poppins, sans-serif",
								fontWeight: "400",
								color: "black"
							}}
						>
							Hello, I'm Youssef
						</p>
					</div>

					{/* Main Title */}
					<h1
						className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 md:mb-6"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						A Digital Designer
					</h1>
					<h2
						className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 md:mb-8"
						style={{ fontFamily: "Poppins, sans-serif" }}
					>
						with a{" "}
						<span
							className="inline-block min-w-[150px] sm:min-w-[200px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
							style={{
								fontFamily: "Playfair Display, serif",
								fontStyle: "italic",
								fontWeight: "normal"
							}}
						>
							{currentText}
							<span className="animate-pulse text-blue-500">|</span>
						</span>{" "}
						Mind
					</h2>

					{/* Description */}
					<p
						className="mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base md:text-lg px-4"
						style={{
							fontFamily: "Poppins, sans-serif",
							fontWeight: "400",
							color: "black"
						}}
					>
						<span className="block sm:hidden">
							I create impactful digital experiences that blend creativity and
							strategy.
						</span>
						<span className="hidden sm:block">
							I help businesses create a strong online presence with
							user-friendly, impactful digital experiences that blend creativity
							and strategy.
						</span>
					</p>

					{/* Call-to-Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
						<Link
							to="/contact"
							className="bg-black text-white pl-3 pr-6 py-3 rounded-full flex items-center text-sm md:text-base hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto justify-center"
						>
							<img
								src={faceImage}
								alt="Face"
								className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-2 md:mr-3 border-2 border-white"
							/>
							<span
								style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
							>
								Get in Touch
							</span>
						</Link>
						<Link
							to="/projects"
							className="border-2 border-black text-black px-6 py-3 rounded-full text-sm md:text-base hover:bg-black hover:text-white transition-colors duration-300 w-full sm:w-auto text-center"
						>
							<span
								style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
							>
								See Work
							</span>
						</Link>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="flex flex-row justify-between items-center mb-8 md:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-black">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								My
							</span>{" "}
							<span
								style={{ fontFamily: "Poppins, sans-serif", fontWeight: "700" }}
							>
								projects
							</span>
						</h2>
						<Link
							to="/projects"
							className="text-black underline underline-offset-12 text-lg sm:text-xl md:text-3xl hover:-translate-x-2 transition-transform duration-300 ease-in-out"
							style={{
								fontFamily: "Playfair Display, serif",
								fontStyle: "italic"
							}}
						>
							View all projects
						</Link>
					</div>

					{/* Project Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
						{/* Studie Match Project */}
						<div className="rounded-none overflow-hidden">
							<Link to="/studie-match" className="block">
								<div className="">
									<div className="relative mb-4 bg-gradient-to-t from-[#50AABE] to-[#DBF6F4] p-4 md:p-8 h-64 md:h-96 flex items-center justify-center overflow-hidden">
										<img
											src={studieMatchImage}
											alt="Studie Match Website"
											className="w-24/25 h-24/25 object-contain transition-transform duration-300 hover:scale-102"
										/>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 px-4 md:px-0">
										Studie Match
									</h3>
									<p className="text-gray-700 text-base md:text-lg px-4 md:px-0">
										Een website die jongeren helpt bij hun studiekeuze
									</p>
								</div>
							</Link>
						</div>

						{/* Fiesta Cultura Project */}
						<div className="rounded-none overflow-hidden">
							<Link to="/fiesta-cultura" className="block">
								<div className="">
									<div className="relative mb-4 bg-gradient-to-t from-[#EA7B96] to-[#FFF7F7] p-4 md:p-8 h-64 md:h-96 flex items-center justify-center overflow-hidden">
										<img
											src={fiestaCulturaImage}
											alt="Fiesta Cultura App"
											className="w-[110%] h-[110%] object-contain -mb-8 transition-transform duration-300 hover:scale-102"
										/>
									</div>
									<h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 px-4 md:px-0">
										Fiesta Cultura
									</h3>
									<p className="text-gray-700 text-base md:text-lg px-4 md:px-0">
										Een multiculturele festival event app
									</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Digital Superpowers Section */}
			<section className="py-12 md:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Section Header */}
					<div className="text-center mb-8 md:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-black">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "400",
									fontStyle: "italic"
								}}
							>
								My Digital
							</span>{" "}
							<span
								style={{ fontFamily: "Poppins, sans-serif", fontWeight: "700" }}
							>
								Superpowers
							</span>
						</h2>
					</div>

					{/* Skills Grid */}
					<div className="space-y-3 md:space-y-4">
						{/* UI/UX Design */}
						<div className="bg-white hover:bg-black group py-4 sm:py-6 md:py-12 px-4 sm:px-6 md:px-16 rounded-xl border-2 border-black transition-all duration-500 ease-in-out">
							<div className="flex items-center justify-between">
								<p
									className="text-sm sm:text-lg md:text-3xl text-left text-black group-hover:text-white font-normal transition-all duration-500 ease-in-out"
									style={{
										fontFamily: "Poppins, sans-serif",
										fontWeight: "400"
									}}
								>
									UI/UX Design for web & mobile
								</p>
								<img
									src={figmaLogo}
									alt="Figma Logo"
									className="h-8 sm:h-10 md:h-12 w-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out object-contain"
								/>
							</div>
						</div>

						{/* Branding */}
						<div className="bg-white hover:bg-black group border-2 border-black py-4 sm:py-6 md:py-12 px-4 sm:px-6 md:px-16 rounded-xl transition-all duration-500 ease-in-out">
							<div className="flex items-center justify-between">
								<p
									className="text-sm sm:text-lg md:text-3xl text-left text-black group-hover:text-white font-normal transition-all duration-500 ease-in-out"
									style={{
										fontFamily: "Poppins, sans-serif",
										fontWeight: "400"
									}}
								>
									Branding & Visual identity
								</p>
								<div className="flex items-center gap-1 sm:gap-2 md:gap-3">
									<img
										src={photoshopLogo}
										alt="Photoshop Logo"
										className="h-8 sm:h-10 md:h-12 w-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out object-contain"
									/>
									<img
										src={illustratorLogo}
										alt="Illustrator Logo"
										className="h-8 sm:h-10 md:h-12 w-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out object-contain"
									/>
								</div>
							</div>
						</div>

						{/* Web Development */}
						<div className="bg-white hover:bg-black group border-2 border-black py-4 sm:py-6 md:py-12 px-4 sm:px-6 md:px-16 rounded-xl transition-all duration-500 ease-in-out">
							<div className="flex items-center justify-between">
								<p
									className="text-sm sm:text-lg md:text-3xl text-left text-black group-hover:text-white font-normal transition-all duration-500 ease-in-out"
									style={{
										fontFamily: "Poppins, sans-serif",
										fontWeight: "400"
									}}
								>
									Webdevelopment
								</p>
								<div className="flex items-center gap-1 sm:gap-2 md:gap-3">
									<img
										src={htmlLogo}
										alt="HTML Logo"
										className="h-8 sm:h-10 md:h-12 w-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out object-contain"
									/>
									<img
										src={cssLogo}
										alt="CSS Logo"
										className="h-8 sm:h-10 md:h-12 w-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out object-contain"
									/>
									<img
										src={reactLogo}
										alt="React Logo"
										className="h-8 sm:h-10 md:h-12 w-auto opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out object-contain"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default Homepage;
