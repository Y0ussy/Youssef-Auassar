import { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import profileImage from "../assets/porfiiil.png";
import casasoftLogo from "../assets/Casasoft Ltd.-logo-1618477327.jpg";
import ehcLogo from "../assets/ehb.png";
import buildingEhb from "../assets/buildingehb.jpg";
import htmlIcon from "../assets/htmlll.png";
import cssIcon from "../assets/csssss.svg";
import reactIcon from "../assets/react_original_wordmark_logo_icon_146375.png";
import figmaIcon from "../assets/Figma-logo.svg.png";
import illustratorIcon from "../assets/Adobe_Illustrator_CC_icon.svg.png";
import photoshopIcon from "../assets/photoshop-icon.png";
import afterEffectsIcon from "../assets/aftereffecttts.png";

function About() {
	const heroRef = useRef(null);
	const aboutTextRef = useRef(null);
	const toolsRef = useRef(null);

	useEffect(() => {
		document.title = "Youssef Auassar | About Me";

		// Add meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				"content",
				"Learn about Youssef Auassar, a 22-year-old digital designer and developer from Brussels. Specializing in UI/UX design, web development, and multimedia design."
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content =
				"Learn about Youssef Auassar, a 22-year-old digital designer and developer from Brussels. Specializing in UI/UX design, web development, and multimedia design.";
			document.head.appendChild(meta);
		}

		// Add Open Graph tags
		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute(
				"content",
				"About Youssef Auassar | Digital Designer & Developer"
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:title");
			meta.content = "About Youssef Auassar | Digital Designer & Developer";
			document.head.appendChild(meta);
		}

		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		);
		if (ogDescription) {
			ogDescription.setAttribute(
				"content",
				"22-year-old digital designer and developer from Brussels. Specializing in UI/UX design, web development, and multimedia design."
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:description");
			meta.content =
				"22-year-old digital designer and developer from Brussels. Specializing in UI/UX design, web development, and multimedia design.";
			document.head.appendChild(meta);
		}

		// Add keywords
		const keywords = document.querySelector('meta[name="keywords"]');
		if (keywords) {
			keywords.setAttribute(
				"content",
				"Youssef Auassar, about, digital designer, web developer, UI/UX designer, Brussels, multimedia design, Erasmushogeschool, portfolio, skills, experience"
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "keywords";
			meta.content =
				"Youssef Auassar, about, digital designer, web developer, UI/UX designer, Brussels, multimedia design, Erasmushogeschool, portfolio, skills, experience";
			document.head.appendChild(meta);
		}
	}, []);

	useEffect(() => {
		const observerOptions = {
			threshold: 0.1,
			rootMargin: "0px 0px -50px 0px"
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-fade-in");
				}
			});
		}, observerOptions);

		const refs = [heroRef, aboutTextRef, toolsRef];
		refs.forEach((ref) => {
			if (ref.current) {
				observer.observe(ref.current);
			}
		});

		return () => {
			refs.forEach((ref) => {
				if (ref.current) {
					observer.unobserve(ref.current);
				}
			});
		};
	}, []);

	return (
		<div className="min-h-screen">
			<Navigation />
			{/* About Content */}
			<section className="pt-24 sm:pt-32 pb-20">
				<div
					className="mx-auto px-4 sm:px-6 lg:px-8 text-center"
					style={{ maxWidth: "1200px" }}
				>
					{/* Profile Image */}
					<div className="mb-8">
						<div className="w-56 h-56 mx-auto rounded-full overflow-hidden">
							<img
								src={profileImage}
								alt="Youssef Auassar"
								className="w-full h-full object-cover scale-155"
								style={{
									objectPosition: "90% center",
									transform: "translateY(36px)"
								}}
							/>
						</div>
					</div>

					{/* Name and Title */}
					<div className="mb-8">
						<h1
							className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Youssef Auassar
						</h1>
						<p
							className="text-lg sm:text-xl text-gray-600"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							Product Designer
						</p>
					</div>

					{/* Skills Tags */}
					<div className="flex flex-wrap gap-3 justify-center mb-12">
						<div className="bg-white border border-[#e7e7e7] rounded-full px-4 py-2 flex items-center gap-2">
							<span className="text-lg">👑</span>
							<span className="text-sm font-medium text-black">
								Product Design
							</span>
						</div>
						<div className="bg-white border border-[#e7e7e7] rounded-full px-4 py-2 flex items-center gap-2">
							<span className="text-lg">🖊️</span>
							<span className="text-sm font-medium text-black">UI Design</span>
						</div>
						<div className="bg-white border border-[#e7e7e7] rounded-full px-4 py-2 flex items-center gap-2">
							<span className="text-lg">📦</span>
							<span className="text-sm font-medium text-black">UX Design</span>
						</div>
						<div className="bg-white border border-[#e7e7e7] rounded-full px-4 py-2 flex items-center gap-2">
							<span className="text-lg">🖼️</span>
							<span className="text-sm font-medium text-black">
								Graphic Design
							</span>
						</div>
						<div className="bg-white border border-[#e7e7e7] rounded-full px-4 py-2 flex items-center gap-2">
							<span className="text-lg">🎈</span>
							<span className="text-sm font-medium text-black">
								Brand Identity
							</span>
						</div>
					</div>

					{/* Bio */}
					<div className="mx-auto mb-12" style={{ maxWidth: "1200px" }}>
						<p
							className="text-xl sm:text-2xl text-black leading-relaxed"
							style={{ fontFamily: "Poppins, sans-serif" }}
						>
							I am a Multimedia Creative Technology graduate, with a passion for
							creating engaging and user-friendly digital products. I have
							developed my skills in Figma, User Experience Design, and User
							Interface Design through multiple projects, both academic and
							professional.
						</p>
					</div>

					{/* Career Highlights Section */}
					<div className="max-w-7xl mx-auto">
						<div className="overflow-hidden">
							{/* Career Highlights Header */}
							<div className="text-center mb-10 pt-8">
								<div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-[#e7e7e7] rounded-full mb-4">
									<span className="text-lg">👨‍🎓</span>
									<span className="text-lg">→</span>
									<span
										className="text-lg font-medium text-black"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										Career Highlights
									</span>
									<span className="text-lg">→</span>
									<span className="text-lg">💼</span>
								</div>
							</div>

							{/* Content */}
							<div className="flex flex-col lg:flex-row items-center">
								{/* Left: Building Image */}
								<div className="lg:w-1/2 p-6">
									<div className="relative">
										<img
											src={buildingEhb}
											alt="Erasmushogeschool Brussel Building"
											className="w-full h-96 object-cover"
										/>
										{/* EHb Logo overlay */}
										<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3">
											<img
												src={ehcLogo}
												alt="Erasmushogeschool Brussel Logo"
												className="w-20 h-20 object-contain"
											/>
										</div>
									</div>
								</div>

								{/* Right: Text Content */}
								<div className="lg:w-1/2 p-6">
									{/* University and Degree */}
									<div className="text-center mb-6">
										<span className="text-6xl mb-4 block">🎓</span>
										<h3
											className="text-2xl font-bold text-black mb-2"
											style={{ fontFamily: "Poppins, sans-serif" }}
										>
											Erasmushogeschool Brussel
										</h3>
										<p
											className="text-lg text-gray-600 mb-2"
											style={{ fontFamily: "Poppins, sans-serif" }}
										>
											Bachelor Multimedia Creative Technology
										</p>
										<p className="text-lg text-gray-400 mb-6">2022 - 2025</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Professional Experience Section */}
			<section className="pt-2 sm:pt-0 pb-12 sm:pb-20">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<div className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white border border-[#e7e7e7] rounded-full mb-4">
							<span className="text-lg">🎨</span>
							<span className="text-lg">→</span>
							<span
								className="text-lg font-medium text-black"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								Professional Experience
							</span>
							<span className="text-lg">→</span>
							<span className="text-lg">💻</span>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Casasoft Experience */}
						<div className="bg-gradient-to-b from-white to-[#fafafa] p-16 sm:p-20 border border-[#e7e7e7] rounded-lg">
							<div className="text-center">
								<div className="mb-8">
									<img
										src={casasoftLogo}
										alt="Casasoft Logo"
										className="w-32 h-32 object-contain mx-auto mb-4"
									/>

									<h4
										className="text-xl font-bold text-black mb-2"
										style={{ fontFamily: "Poppins, sans-serif" }}
									>
										Frontend Developer Intern
									</h4>
									<p className="text-sm text-gray-400 mb-8">
										01/2025 - 04/2025
									</p>
								</div>
								<p className="text-sm text-gray-700 leading-relaxed">
									Working on existing platform Mamori, fixing bugs and improving
									the interface to enhance user experience and functionality.
								</p>
							</div>
						</div>

						{/* Next Opportunity */}
						<div className="bg-gradient-to-b from-white to-[#fafafa] p-16 sm:p-20 border border-[#e7e7e7] rounded-lg">
							<div className="text-center mb-8">
								<div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl flex items-center justify-center">
									<span className="text-3xl">🚀</span>
								</div>
								<h3
									className="text-lg font-medium text-gray-500 mb-3"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Coming Soon
								</h3>
								<h4
									className="text-xl font-bold text-gray-700 mb-3"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Next Opportunity
								</h4>
								<p className="text-sm text-gray-400 mb-8">Future</p>
							</div>
							<p className="text-sm text-gray-500 leading-relaxed text-center">
								Always excited for new challenges and opportunities to grow as a
								designer and developer.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Tools Section */}
			<section className="py-12 sm:py-2">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div
						ref={toolsRef}
						className="opacity-0 translate-y-8 transition-all duration-1000 ease-out"
					>
						<div className="text-center mb-12">
							<h3
								className="text-xl sm:text-2xl font-bold"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								Tech Stack
							</h3>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl">
								<img
									src={htmlIcon}
									alt="HTML"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-orange-700">
									HTML
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl ">
								<img
									src={cssIcon}
									alt="CSS"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-blue-700">
									CSS
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl ">
								<img
									src={reactIcon}
									alt="React"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-cyan-700">
									React
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl ">
								<img
									src={figmaIcon}
									alt="Figma"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-purple-700">
									Figma
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl ">
								<img
									src={illustratorIcon}
									alt="Illustrator"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-orange-700">
									Illustrator
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl ">
								<img
									src={photoshopIcon}
									alt="Photoshop"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-blue-700">
									Photoshop
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl ">
								<img
									src={afterEffectsIcon}
									alt="After Effects"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-purple-700">
									After Effects
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
}

export default About;
