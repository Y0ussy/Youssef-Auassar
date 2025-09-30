import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	FaMobileAlt,
	FaDesktop,
	FaCode,
	FaPalette,
	FaVideo,
	FaTh
} from "react-icons/fa";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import logo from "../assets/logo.svg";
import studieMatchImage from "../assets/studie-match.png";
import fiestaCulturaImage from "../assets/fiesta-cultura.png";
import debibImage from "../assets/debib.png";
import moodyImage from "../assets/moody.png";
import planeImage from "../assets/plane.png";

function Projects() {
	const [activeFilter, setActiveFilter] = useState("all");

	useEffect(() => {
		document.title = "Youssef Auassar | Projects";
	}, []);

	const filters = [
		{ id: "all", label: "All projects" },
		{ id: "web-design", label: "Web Design" },
		{ id: "app-design", label: "App Design" },
		{ id: "web-development", label: "Web Development" },
		{ id: "brand-identity", label: "Brand Identity" },
		{ id: "motion-design", label: "Motion Design" }
	];

	const projects = [
		{
			id: "studie-match",
			title: "Studie Match",
			description: "Een website die jongeren helpt bij hun studiekeuze",
			image: studieMatchImage,
			alt: "Studie Match Website",
			background: "bg-gradient-to-t from-[#50AABE] to-[#DBF6F4]",
			imageClass:
				"w-24/25 h-24/25 object-contain transition-transform duration-300 hover:scale-102",
			categories: ["web-design", "web-development"]
		},
		{
			id: "fiesta-cultura",
			title: "Fiesta Cultura",
			description: "Een multiculturele festival event app",
			image: fiestaCulturaImage,
			alt: "Fiesta Cultura App",
			background: "bg-gradient-to-t from-[#EA7B96] to-[#FFF7F7]",
			imageClass:
				"w-[110%] h-[110%] object-contain -mb-8 transition-transform duration-300 hover:scale-102",
			categories: ["app-design"]
		},
		{
			id: "de-bib",
			title: "De Bib",
			description: "Een moderne bibliotheek app voor het lenen van boeken",
			image: debibImage,
			alt: "De Bib App",
			background: "bg-gradient-to-t from-[#0FB7AD] to-[#F1FEF9]",
			imageClass:
				"w-[110%] h-[110%] object-contain -mb-8 transition-transform duration-300 hover:scale-102",
			categories: ["app-design"]
		},
		{
			id: "moody-mingle",
			title: "Moody Mingle",
			description: "Een kauwgom die mensen verbindt",
			image: moodyImage,
			alt: "Moody Mingle Chewing Gum",
			background: "bg-gradient-to-b from-[#FFFFFF] to-[#4B7BBE]",
			imageClass:
				"w-4/5 h-4/5 object-contain transition-transform duration-300 hover:scale-102",
			categories: ["brand-identity"]
		},
		{
			id: "mh370",
			title: "The Disappearance of MH370",
			description: "Een motion infographic over de verdwijning van MH370",
			image: planeImage,
			alt: "MH370 Motion Infographic",
			background: "bg-gradient-to-b from-white to-gray-400",
			imageClass:
				"w-24/25 h-24/25 object-contain transition-transform duration-300 hover:scale-102",
			categories: ["motion-design"]
		}
	];

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.categories.includes(activeFilter));

	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Projects Header */}
			<section className="pt-32 sm:pt-40 pb-12 sm:pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Main Title */}
					<div className="text-center mb-12 sm:mb-16">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								All
							</span>{" "}
							<span
								style={{ fontFamily: "Poppins, sans-serif", fontWeight: "700" }}
							>
								projects
							</span>
						</h1>
					</div>

					{/* Category Filters */}
					<div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
						{filters.map((filter) => (
							<button
								key={filter.id}
								onClick={() => setActiveFilter(filter.id)}
								className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-normal transition-all duration-300 flex items-center gap-2 ${
									activeFilter === filter.id
										? "bg-black text-white"
										: "bg-white border border-black text-black hover:bg-gray-50"
								}`}
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								{filter.id === "all" && (
									<FaTh className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
								)}
								{filter.id === "web-design" && (
									<FaDesktop className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
								)}
								{filter.id === "app-design" && (
									<FaMobileAlt className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
								)}
								{filter.id === "web-development" && (
									<FaCode className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
								)}
								{filter.id === "brand-identity" && (
									<FaPalette className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
								)}
								{filter.id === "motion-design" && (
									<FaVideo className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
								)}
								{filter.label}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="pb-12 sm:pb-20 -mt-4 sm:-mt-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
						{filteredProjects.map((project) => (
							<div key={project.id} className="rounded-none overflow-hidden">
								{project.id === "studie-match" ? (
									<Link to="/studie-match" className="block">
										<div className="">
											<div
												className={`relative mb-4 ${project.background} p-4 sm:p-6 md:p-8 h-48 sm:h-64 md:h-96 flex items-center justify-center overflow-hidden`}
											>
												{project.image ? (
													<img
														src={project.image}
														alt={project.alt}
														className={project.imageClass}
													/>
												) : (
													<div className="w-16 h-16 bg-black rounded flex items-center justify-center">
														<div className="w-8 h-8 bg-white rounded-sm"></div>
													</div>
												)}
											</div>
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 px-4 md:px-0">
												{project.title}
											</h3>
											<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
												{project.description}
											</p>
										</div>
									</Link>
								) : project.id === "fiesta-cultura" ? (
									<Link to="/fiesta-cultura" className="block">
										<div className="">
											<div
												className={`relative mb-4 ${project.background} p-4 sm:p-6 md:p-8 h-48 sm:h-64 md:h-96 flex items-center justify-center overflow-hidden`}
											>
												{project.image ? (
													<img
														src={project.image}
														alt={project.alt}
														className={project.imageClass}
													/>
												) : (
													<div className="w-16 h-16 bg-black rounded flex items-center justify-center">
														<div className="w-8 h-8 bg-white rounded-sm"></div>
													</div>
												)}
											</div>
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 px-4 md:px-0">
												{project.title}
											</h3>
											<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
												{project.description}
											</p>
										</div>
									</Link>
								) : project.id === "de-bib" ? (
									<Link to="/de-bib" className="block">
										<div className="">
											<div
												className={`relative mb-4 ${project.background} p-4 sm:p-6 md:p-8 h-48 sm:h-64 md:h-96 flex items-center justify-center overflow-hidden`}
											>
												{project.image ? (
													<img
														src={project.image}
														alt={project.alt}
														className={project.imageClass}
													/>
												) : (
													<div className="w-16 h-16 bg-black rounded flex items-center justify-center">
														<div className="w-8 h-8 bg-white rounded-sm"></div>
													</div>
												)}
											</div>
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 px-4 md:px-0">
												{project.title}
											</h3>
											<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
												{project.description}
											</p>
										</div>
									</Link>
								) : project.id === "mh370" ? (
									<Link to="/mh370" className="block">
										<div className="">
											<div
												className={`relative mb-4 ${project.background} p-4 sm:p-6 md:p-8 h-48 sm:h-64 md:h-96 flex items-center justify-center overflow-hidden`}
											>
												{project.image ? (
													<img
														src={project.image}
														alt={project.alt}
														className={project.imageClass}
													/>
												) : (
													<div className="w-16 h-16 bg-black rounded flex items-center justify-center">
														<div className="w-8 h-8 bg-white rounded-sm"></div>
													</div>
												)}
											</div>
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 px-4 md:px-0">
												{project.title}
											</h3>
											<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
												{project.description}
											</p>
										</div>
									</Link>
								) : project.id === "moody-mingle" ? (
									<Link to="/moody-mingle" className="block">
										<div className="">
											<div
												className={`relative mb-4 ${project.background} p-4 sm:p-6 md:p-8 h-48 sm:h-64 md:h-96 flex items-center justify-center overflow-hidden`}
											>
												{project.image ? (
													<img
														src={project.image}
														alt={project.alt}
														className={project.imageClass}
													/>
												) : (
													<div className="w-16 h-16 bg-black rounded flex items-center justify-center">
														<div className="w-8 h-8 bg-white rounded-sm"></div>
													</div>
												)}
											</div>
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 px-4 md:px-0">
												{project.title}
											</h3>
											<p className="text-gray-700 text-sm sm:text-base md:text-lg px-4 md:px-0">
												{project.description}
											</p>
										</div>
									</Link>
								) : (
									<div className="">
										<div
											className={`relative mb-4 ${project.background} p-4 md:p-8 h-64 md:h-96 flex items-center justify-center overflow-hidden`}
										>
											{project.image ? (
												<img
													src={project.image}
													alt={project.alt}
													className={project.imageClass}
												/>
											) : (
												<div className="w-16 h-16 bg-black rounded flex items-center justify-center">
													<div className="w-8 h-8 bg-white rounded-sm"></div>
												</div>
											)}
										</div>
										<h3 className="text-xl md:text-2xl font-bold text-black mb-2 md:mb-3 px-4 md:px-0">
											{project.title}
										</h3>
										<p className="text-gray-700 text-base md:text-lg px-4 md:px-0">
											{project.description}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default Projects;
