import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import linkedinLogo from "../assets/linkedin-logo.png";
import gmailLogo from "../assets/gmail-logo.png";

function Contact() {
	useEffect(() => {
		document.title = "Youssef Auassar | My Contacts";

		// Add meta description
		const metaDescription = document.querySelector('meta[name="description"]');
		if (metaDescription) {
			metaDescription.setAttribute(
				"content",
				"Get in touch with Youssef Auassar, digital designer and developer from Brussels. Available for freelance projects and collaborations."
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "description";
			meta.content =
				"Get in touch with Youssef Auassar, digital designer and developer from Brussels. Available for freelance projects and collaborations.";
			document.head.appendChild(meta);
		}

		// Add Open Graph tags
		const ogTitle = document.querySelector('meta[property="og:title"]');
		if (ogTitle) {
			ogTitle.setAttribute(
				"content",
				"Contact Youssef Auassar | Digital Designer & Developer"
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:title");
			meta.content = "Contact Youssef Auassar | Digital Designer & Developer";
			document.head.appendChild(meta);
		}

		const ogDescription = document.querySelector(
			'meta[property="og:description"]'
		);
		if (ogDescription) {
			ogDescription.setAttribute(
				"content",
				"Get in touch with Youssef Auassar, digital designer and developer from Brussels. Available for freelance projects and collaborations."
			);
		} else {
			const meta = document.createElement("meta");
			meta.setAttribute("property", "og:description");
			meta.content =
				"Get in touch with Youssef Auassar, digital designer and developer from Brussels. Available for freelance projects and collaborations.";
			document.head.appendChild(meta);
		}

		// Add keywords
		const keywords = document.querySelector('meta[name="keywords"]');
		if (keywords) {
			keywords.setAttribute(
				"content",
				"Youssef Auassar, contact, digital designer, web developer, UI/UX designer, Brussels, freelance, collaboration, hire, email, LinkedIn"
			);
		} else {
			const meta = document.createElement("meta");
			meta.name = "keywords";
			meta.content =
				"Youssef Auassar, contact, digital designer, web developer, UI/UX designer, Brussels, freelance, collaboration, hire, email, LinkedIn";
			document.head.appendChild(meta);
		}
	}, []);
	return (
		<div className="min-h-screen">
			<Navigation />

			{/* Contact Header */}
			<section className="pt-24 sm:pt-32 pb-8 sm:pb-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Main Title */}
					<div className="text-center mb-16 sm:mb-20">
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-black">
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
