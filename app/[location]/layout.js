import Image from "next/image";
import "../globals.css";

export const metadata = {
	title: "Ecovista Next.js App",
	description: "A Next.js app for Ecovista",
};

export default function LocationLayout({
	children,
	aqi,
	weather,
	temperature,
	wind,
}) {
	return (
		<div className="wrapper">
			<Image
				src="/background.png"
				className="bg-img"
				height={700}
				width={1200}
			/>
			<div className="overlay"></div>
			<main class="!z-50 w-full">
				<div class="container">
					<div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
						{children}
						{<div>AQI: {aqi}</div>}
						{<div>Weather: {weather}</div>}
						{<div>Temperature: {temperature}</div>}
						{<div>Wind: {wind}</div>}
					</div>
				</div>
			</main>
		</div>
	);
}
