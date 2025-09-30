import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	return (
		<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md pt-2">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-20">
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
							to="/projects"
							className={`text-black text-base lg:text-lg transition-colors duration-300 ${
								location.pathname === "/projects" ? "font-semibold" : ""
							}`}
						>
							projects
						</Link>
						<Link
							to="/about"
							className={`text-black text-base lg:text-lg transition-colors duration-300 ${
								location.pathname === "/about" ? "font-semibold" : ""
							}`}
						>
							about
						</Link>
						<Link
							to="/contact"
							className={`text-black text-base lg:text-lg transition-colors duration-300 ${
								location.pathname === "/contact" ? "font-semibold" : ""
							}`}
						>
							contact
						</Link>
						<a href="#resume" className="text-black text-base lg:text-lg">
							resume
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
								to="/projects"
								className={`block px-3 py-3 text-black text-base sm:text-lg transition-colors duration-300 ${
									location.pathname === "/projects" ? "font-semibold" : ""
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								projects
							</Link>
							<Link
								to="/about"
								className={`block px-3 py-3 text-black text-base sm:text-lg transition-colors duration-300 ${
									location.pathname === "/about" ? "font-semibold" : ""
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								about
							</Link>
							<Link
								to="/contact"
								className={`block px-3 py-3 text-black text-base sm:text-lg transition-colors duration-300 ${
									location.pathname === "/contact" ? "font-semibold" : ""
								}`}
								onClick={() => setIsMenuOpen(false)}
							>
								contact
							</Link>
							<a
								href="#resume"
								className="block px-3 py-3 text-black text-base sm:text-lg"
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
