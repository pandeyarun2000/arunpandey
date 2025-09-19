import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Geologica } from 'next/font/google';

const montserrat = Geologica({
	subsets: ['latin'],
	display: 'swap',
	adjustFontFallback: false,
});

export const metadata = {
	title: 'Arun Pandey',
	description: "Bringing over 25 years of strategic sourcing expertise, I am a seasoned professional with a track record of success in diverse industries.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning={true}>
			<head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
			</head>
			<body suppressHydrationWarning={true} className={montserrat.className}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
