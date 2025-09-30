import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import moodyImage from "../assets/moody.png";
import moodyVerpakking from "../assets/moody-verpakking.png";
import blueberry from "../assets/blueberry.png";
import orange from "../assets/orange.png";
import grape from "../assets/grape.png";

function MoodyMingle() {
	return (
		<div className="min-h-screen">
			<Navigation />
			{/* Project Title and Categories */}
			<section className="pt-40 pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-5xl md:text-6xl lg:text-7xl text-black mb-6">
						<span
							style={{
								fontFamily: "Poppins, sans-serif",
								fontWeight: "700"
							}}
						>
							Moody Mingle
						</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-700">
						Brand Identity • Packaging Design • Visual Identity
					</p>
				</div>
			</section>
			{/* Hero Section */}
			<section className="pb-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="relative bg-gradient-to-b from-[#FFFFFF] to-[#4B7BBE] overflow-hidden">
						{/* Main image centered */}
						<div className="flex items-center justify-center p-8 lg:p-16">
							<img
								src={moodyImage}
								alt="Moody Mingle Chewing Gum"
								className="w-3/5 h-3/5 object-contain transition-transform duration-300 hover:scale-102"
							/>
						</div>
					</div>
				</div>
			</section>
			{/* About Moody Mingle Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left">
						<h2 className="text-4xl md:text-5xl text-black mb-8">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								About{" "}
							</span>
							<span
								style={{
									fontFamily: "Poppins, sans-serif",
									fontWeight: "700"
								}}
							>
								Moody Mingle
							</span>
						</h2>
						<p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
							Moody Mingle is een innovatief kauwgommerk dat mensen verbindt
							door middel van gedeelde ervaringen. Het concept draait om het
							idee dat kauwgom meer kan zijn dan alleen een smaak - het kan een
							manier zijn om sociale verbindingen te creëren en stemmingen te
							delen. Het merk combineert moderne design met een speelse, sociale
							benadering van een alledaags product.
						</p>

						{/* Flavor Images */}
						<div className="flex justify-center gap-8 mt-8">
							<img
								src={blueberry}
								alt="Blueberry Flavor"
								className="w-96 h-96 object-contain"
							/>
							<img
								src={orange}
								alt="Orange Flavor"
								className="w-96 h-96 object-contain"
							/>
							<img
								src={grape}
								alt="Grape Flavor"
								className="w-96 h-96 object-contain"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Packaging Design Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-left mb-12">
						<h2 className="text-4xl md:text-5xl text-black mb-6">
							<span
								style={{
									fontFamily: "Playfair Display, serif",
									fontWeight: "normal",
									fontStyle: "italic"
								}}
							>
								Packaging{" "}
							</span>
							<span
								style={{
									fontFamily: "Poppins, sans-serif",
									fontWeight: "700"
								}}
							>
								Design
							</span>
						</h2>
					</div>
					<div className="p-8 lg:p-16">
						<div className="flex items-center justify-center">
							<img
								src={moodyVerpakking}
								alt="Moody Mingle Packaging Design"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}

export default MoodyMingle;
