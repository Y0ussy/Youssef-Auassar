import { useEffect, useRef } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import profileImage from "../assets/porfiiil.png";
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
	const educationRef = useRef(null);
	const toolsRef = useRef(null);

	useEffect(() => {
		document.title = "About Youssef Auassar | Digital Designer & Developer";

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

		const refs = [heroRef, aboutTextRef, educationRef, toolsRef];
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

			{/* About Header */}
			<section className="pt-24 sm:pt-32 pb-8 sm:pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Main Title */}
					<div className="text-center mb-8 sm:mb-12">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								About
							</span>{" "}
							<span
								style={{ fontFamily: "Poppins, sans-serif", fontWeight: "700" }}
							>
								Me
							</span>
						</h1>
					</div>
				</div>
			</section>

			{/* About Content */}
			<section className="pt-4 sm:pt-6 pb-20">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Hero Section with Image and Intro */}
					<div
						ref={heroRef}
						className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20 opacity-0 translate-y-8 transition-all duration-1000 ease-out -mt-8 sm:-mt-12"
					>
						<div className="order-2 lg:order-1">
							<div className="w-full h-64 sm:h-80 overflow-hidden">
								<img
									src={profileImage}
									alt="Youssef Auassar"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
						<div className="order-1 lg:order-2 text-center lg:text-left">
							<h2
								className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								Hi, I'm{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
									Youssef
								</span>
							</h2>
							<p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
								A 22-year-old multimedia designer from Brussels, passionate
								about creating digital experiences that are both beautiful and
								functional.
							</p>
							<div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
								<span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800 text-xs sm:text-sm font-medium rounded-full border border-pink-300">
									UI/UX Design
								</span>
								<span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs sm:text-sm font-medium rounded-full border border-blue-300">
									Front-end Development
								</span>
								<span className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs sm:text-sm font-medium rounded-full border border-green-300">
									Graphic Design
								</span>
							</div>
						</div>
					</div>

					{/* About Text Section */}
					<div
						ref={aboutTextRef}
						className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
					>
						<p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4">
							I specialize in <strong>UI/UX design</strong> and have expertise
							in brand design, marketing and advertising design, front-end web
							development, and motion design. My passion lies in creating
							digital experiences that are both beautiful and functional.
						</p>
						<p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed px-4">
							I'm fluent in <strong>Dutch</strong> and <strong>English</strong>,
							with a good working knowledge of <strong>French</strong>, which
							allows me to work effectively in diverse, multilingual
							environments.
						</p>
					</div>

					{/* Education Section */}
					<div
						ref={educationRef}
						className="max-w-4xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 ease-out"
					>
						<div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 sm:p-6 md:p-8">
							<div className="flex items-center mb-4 sm:mb-6">
								<div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-3 sm:mr-4 rounded-xl">
									<svg
										className="w-5 h-5 sm:w-6 sm:h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 14l9-5-9-5-9 5 9 5z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
										/>
									</svg>
								</div>
								<h3
									className="text-xl sm:text-2xl font-bold"
									style={{ fontFamily: "Poppins, sans-serif" }}
								>
									Education
								</h3>
							</div>
							<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
								I graduated from <strong>Erasmushogeschool Brussel</strong> with
								a Bachelor's degree in{" "}
								<strong>Multimedia Creative Technology</strong>, which I
								completed in three years. This program provided me with a solid
								foundation in digital design, web development, and multimedia
								production.
							</p>
						</div>
					</div>

					{/* Tools Section */}
					<div
						ref={toolsRef}
						className="max-w-4xl mx-auto mt-12 sm:mt-16 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
					>
						<div className="text-center mb-8 sm:mb-12">
							<h3
								className="text-xl sm:text-2xl font-bold"
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								Tech Stack
							</h3>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6">
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl hover:bg-orange-50 hover:shadow-md">
								<img
									src={htmlIcon}
									alt="HTML"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-orange-700">
									HTML
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl hover:bg-blue-50 hover:shadow-md">
								<img
									src={cssIcon}
									alt="CSS"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-blue-700">
									CSS
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl hover:bg-cyan-50 hover:shadow-md">
								<img
									src={reactIcon}
									alt="React"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-cyan-700">
									React
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl hover:bg-purple-50 hover:shadow-md">
								<img
									src={figmaIcon}
									alt="Figma"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-purple-700">
									Figma
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl hover:bg-orange-50 hover:shadow-md">
								<img
									src={illustratorIcon}
									alt="Illustrator"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-orange-700">
									Illustrator
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl hover:bg-blue-50 hover:shadow-md">
								<img
									src={photoshopIcon}
									alt="Photoshop"
									className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 object-contain"
								/>
								<p className="text-xs sm:text-sm font-medium text-blue-700">
									Photoshop
								</p>
							</div>
							<div className="text-center hover:-translate-y-2 transition-transform duration-300 ease-in-out cursor-pointer p-3 rounded-xl hover:bg-purple-50 hover:shadow-md">
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
