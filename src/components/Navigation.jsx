import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import resumePDF from "../assets/youssefauassar_resume.pdf";

function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	return (
		<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md pt-2">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
					{/* Logo */}
					<div className="flex items-center">
						<Link to="/">
							<img
								src={logo}
								alt="Logo"
								className="h-8 sm:h-10 md:h-12 w-auto"
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8 lg:space-x-10">
						<Link
							to="/"
							className={`text-black text-base lg:text-lg transition-all duration-300 px-4 py-1 rounded-full ${
								location.pathname === "/" ? "bg-[#eeeeee]" : "hover:bg-gray-100"
							}`}
						>
							home
						</Link>
						<Link
							to="/projects"
							className={`text-black text-base lg:text-lg transition-all duration-300 px-4 py-1 rounded-full ${
								location.pathname === "/projects"
									? "bg-[#eeeeee]"
									: "hover:bg-gray-100"
							}`}
						>
							projects
						</Link>
						<Link
							to="/about"
							className={`text-black text-base lg:text-lg transition-all duration-300 px-4 py-1 rounded-full ${
								location.pathname === "/about"
									? "bg-[#eeeeee]"
									: "hover:bg-gray-100"
							}`}
						>
							about
						</Link>
						<Link
							to="/contact"
							className={`text-black text-base lg:text-lg transition-all duration-300 px-4 py-1 rounded-full ${
								location.pathname === "/contact"
									? "bg-[#eeeeee]"
									: "hover:bg-gray-100"
							}`}
						>
							contact
						</Link>
					</div>

					{/* Right Resume Button */}
					<div className="hidden md:block">
						<a
							href={resumePDF}
							download="Youssef_Auassar_Resume.pdf"
							className="bg-black text-white px-6 py-3 rounded-full text-sm md:text-base hover:bg-[#2c2c2c] transition-colors duration-300"
							style={{ fontFamily: "Poppins, sans-serif", fontWeight: "400" }}
						>
							My Resume
						</a>
					</div>

					{/* Mobile menu button */}
					<button
						className="md:hidden text-black p-2"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<svg
							className="w-6 h-6 sm:w-7 sm:h-7"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<div className="md:hidden bg-white/95 backdrop-blur-md">
						<div className="px-2 pt-2 pb-3 space-y-1">
							<Link
								to="/"
								className={`block px-3 py-2 text-black text-base sm:text-lg transition-all duration-300 rounded-full mx-2 ${
									location.pathname === "/"
										? "bg-[#eeeeee]"
										: "hover:bg-gray-100"
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								home
							</Link>
							<Link
								to="/projects"
								className={`block px-3 py-2 text-black text-base sm:text-lg transition-all duration-300 rounded-full mx-2 ${
									location.pathname === "/projects"
										? "bg-[#eeeeee]"
										: "hover:bg-gray-100"
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								projects
							</Link>
							<Link
								to="/about"
								className={`block px-3 py-2 text-black text-base sm:text-lg transition-all duration-300 rounded-full mx-2 ${
									location.pathname === "/about"
										? "bg-[#eeeeee]"
										: "hover:bg-gray-100"
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								about
							</Link>
							<Link
								to="/contact"
								className={`block px-3 py-2 text-black text-base sm:text-lg transition-all duration-300 rounded-full mx-2 ${
									location.pathname === "/contact"
										? "bg-[#eeeeee]"
										: "hover:bg-gray-100"
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								contact
							</Link>
							<a
								href={resumePDF}
								download="Youssef_Auassar_Resume.pdf"
								className="block px-3 py-2 text-black text-base sm:text-lg rounded-full mx-2 hover:bg-gray-100 transition-all duration-300"
								onClick={() => setIsMenuOpen(false)}
							>
								resume
							</a>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navigation;
