import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import studieMatchImage from "../assets/studie-match.png";
import fiestaCulturaImage from "../assets/fiesta-cultura.png";
import debibImage from "../assets/debib.png";
import moodyImage from "../assets/moody.png";
import planeImage from "../assets/plane.png";

function Projects() {
	const [activeFilter, setActiveFilter] = useState("all");

	useEffect(() => {
		document.title = "Youssef Auassar | Projects Showcase";

		// Add meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				"content",
				"Explore Youssef Auassar's portfolio of digital design and development projects. Including web design, app design, brand identity, and motion design projects."
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content =
				"Explore Youssef Auassar's portfolio of digital design and development projects. Including web design, app design, brand identity, and motion design projects.";
			document.head.appendChild(meta);
		}

		// Add Open Graph tags
		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute("content", "Projects | Youssef Auassar Portfolio");
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:title");
			meta.content = "Projects | Youssef Auassar Portfolio";
			document.head.appendChild(meta);
		}

		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		);
		if (ogDescription) {
			ogDescription.setAttribute(
				"content",
				"Explore Youssef Auassar's portfolio of digital design and development projects. Including web design, app design, brand identity, and motion design projects."
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:description");
			meta.content =
				"Explore Youssef Auassar's portfolio of digital design and development projects. Including web design, app design, brand identity, and motion design projects.";
			document.head.appendChild(meta);
		}

		// Add keywords
		const keywords = document.querySelector('meta[name="keywords"]');
		if (keywords) {
			keywords.setAttribute(
				"content",
				"Youssef Auassar, projects, portfolio, web design, app design, brand identity, motion design, UI/UX design, digital design, Studie Match, Fiesta Cultura, De Bib, Moody Mingle, MH370"
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "keywords";
			meta.content =
				"Youssef Auassar, projects, portfolio, web design, app design, brand identity, motion design, UI/UX design, digital design, Studie Match, Fiesta Cultura, De Bib, Moody Mingle, MH370";
			document.head.appendChild(meta);
		}
	}, []);

	const filters = [
		{ id: "all", label: "All projects", emoji: "🎯" },
		{ id: "web-design", label: "Web Design", emoji: "🖥️" },
		{ id: "app-design", label: "App Design", emoji: "📱" },
		{ id: "web-development", label: "Web Development", emoji: "💻" },
		{ id: "brand-identity", label: "Brand Identity", emoji: "🎨" },
		{ id: "motion-design", label: "Motion Design", emoji: "🎬" }
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
			categories: ["web-design", "web-development"],
			emoji: "🎓"
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
			categories: ["app-design"],
			emoji: "🎉"
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
			categories: ["app-design"],
			emoji: "📚"
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
			categories: ["brand-identity"],
			emoji: "💙"
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
			categories: ["motion-design"],
			emoji: "✈️"
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
			<section className="pt-24 sm:pt-32 pb-8 sm:pb-12">
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
								Creative
							</span>{" "}
							<span
								style={{ fontFamily: "Poppins, sans-serif", fontWeight: "700" }}
							>
								Projects
							</span>
						</h1>
					</div>

					{/* Category Filters */}
					<div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
						{filters.map((filter) => (
							<button
								key={filter.id}
								onClick={() => setActiveFilter(filter.id)}
								className={`px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-normal transition-all duration-300 flex items-center gap-2 ${
									activeFilter === filter.id
										? "bg-black text-white"
										: "bg-white border border-black text-black hover:bg-[#eeeeee]"
								}`}
								style={{ fontFamily: "Poppins, sans-serif" }}
							>
								<span className="text-lg">{filter.emoji}</span>
								{filter.label}
							</button>
						))}
					</div>
				</div>
			</section>

			{/* Projects Grid */}
			<section className="pb-16 sm:pb-20 md:pb-24 -mt-2 sm:-mt-4">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 sm:gap-x-4 md:gap-x-6 gap-y-6 sm:gap-y-8 md:gap-y-12">
						{filteredProjects.map((project) => (
							<div key={project.id} className="rounded-none overflow-hidden">
								{project.id === "studie-match" ? (
									<Link to="/studie-match" className="block">
										<div className="">
											<div
												className={`relative mb-3 ${project.background} p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden`}
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
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
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
												className={`relative mb-3 ${project.background} p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden`}
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
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
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
												className={`relative mb-3 ${project.background} p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden`}
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
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
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
												className={`relative mb-3 ${project.background} p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden`}
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
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
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
												className={`relative mb-3 ${project.background} p-3 sm:p-4 md:p-6 h-40 sm:h-56 md:h-80 flex items-center justify-center overflow-hidden`}
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
											<h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
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
											className={`relative mb-3 ${project.background} p-3 md:p-6 h-56 md:h-80 flex items-center justify-center overflow-hidden`}
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
										<h3 className="text-xl md:text-2xl font-bold text-black mb-1 md:mb-2 px-4 md:px-0">
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
