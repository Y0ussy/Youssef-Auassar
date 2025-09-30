import { useEffect, useState } from "react";

function Loading({ onLoadingComplete }) {
	const [currentGreeting, setCurrentGreeting] = useState(0);
	const greetings = ["Hallo", "Bonjour", "Hello"];

	useEffect(() => {
		console.log("Loading component mounted, starting timers");

		// Cycle through greetings
		const greetingTimer = setInterval(() => {
			setCurrentGreeting((prev) => {
				const next = (prev + 1) % greetings.length;
				console.log(`Greeting changed to: ${greetings[next]}`);
				return next;
			});
		}, 800);

		// Complete loading after showing all greetings
		const loadingTimer = setTimeout(() => {
			console.log("Loading complete, calling onLoadingComplete");
			if (onLoadingComplete && typeof onLoadingComplete === "function") {
				onLoadingComplete();
			} else {
				console.error(
					"onLoadingComplete is not a function:",
					onLoadingComplete
				);
			}
		}, 2400);

		return () => {
			console.log("Loading component cleanup, clearing timers");
			clearInterval(greetingTimer);
			clearTimeout(loadingTimer);
		};
	}, [onLoadingComplete]);

	return (
		<div className="min-h-screen flex items-center justify-center bg-white">
			<div className="text-center">
				<div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black transition-all duration-500 ease-in-out">
					{greetings[currentGreeting]}
				</div>
			</div>
		</div>
	);
}

export default Loading;
