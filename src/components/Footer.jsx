import logo from "../assets/logo.svg";

function Footer() {
	return (
		<footer className="bg-white mt-12 md:mt-20">
			{/* Top Section - Navigation/Info Bar */}
			<div className="border-t-2 border-black border-b-2 border-black">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row justify-between items-center py-3 md:py-4 gap-2 sm:gap-0">
						<div className="text-sm md:text-base font-normal text-black uppercase tracking-wide">
							<a
								href="https://www.linkedin.com/in/youssefauassar/"
								target="_blank"
								rel="noopener noreferrer"
								className="hover:underline cursor-pointer"
							>
								LINKEDIN
							</a>
						</div>
						<div className="text-sm md:text-base font-normal text-black uppercase tracking-wide text-center">
							ALL RIGHTS RESERVED © 2025 YOUSSEF AUASSAR
						</div>
						<div className="text-sm md:text-base font-normal text-black uppercase tracking-wide">
							<a
								href="mailto:youssydesign@gmail.com"
								className="hover:underline cursor-pointer"
							>
								EMAIL
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Main Content Section - Logo/Name */}
			<div className="pt-3 md:pt-4 pb-6 md:pb-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-center">
						<img
							src={logo}
							alt="YOUSSEFef."
							className="h-32 md:h-48 lg:h-64 w-auto"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
