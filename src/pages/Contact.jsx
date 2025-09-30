import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import linkedinLogo from "../assets/linkedin-logo.png";
import gmailLogo from "../assets/gmail-logo.png";

function Contact() {
	useEffect(() => {
		document.title = "Youssef Auassar | Contact";
	}, []);
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Contact Header */}
			<section className="pt-32 sm:pt-40 pb-12 sm:pb-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black mb-12 sm:mb-16">
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
							Contacts
						</span>
					</h1>
				</div>
			</section>

			{/* Contact Information */}
			<section className="pb-12 sm:pb-20">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
						{/* LinkedIn */}
						<div className="text-center">
							<div className="mb-4 sm:mb-6">
								<a
									href="https://www.linkedin.com/in/youssefauassar/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block hover:-translate-y-2 transition-transform duration-300 ease-in-out"
								>
									<img
										src={linkedinLogo}
										alt="LinkedIn Logo"
										className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto object-contain"
									/>
								</a>
							</div>
							<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
								Connect with me on LinkedIn
							</p>
						</div>

						{/* Email */}
						<div className="text-center">
							<div className="mb-4 sm:mb-6">
								<a
									href="mailto:youssydesign@gmail.com"
									className="inline-block hover:-translate-y-2 transition-transform duration-300 ease-in-out"
								>
									<img
										src={gmailLogo}
										alt="Gmail Logo"
										className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto object-contain"
									/>
								</a>
							</div>
							<p className="text-sm sm:text-base text-gray-700 leading-relaxed">
								Send me an email
							</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default Contact;
