import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';

export default function AboutMe() {
	return (
		<Fade>
			<Element name="about-me" className="relative z-10" />
			<div className="mb-48">
				<h3 className="mb-16 text-center text-4xl font-medium text-gray-800 transition duration-300 dark:text-white lg:mb-20 xl:mb-24">
					About Me
				</h3>
				<div className="mx-4 flex flex-col items-center justify-around rounded-xl border-2 border-cyan-400 bg-cyan-100 p-8 dark:border-0 dark:bg-gray-800 sm:mx-10 md:flex-row">
					<Image
						src="/profile_pic.png"
						alt="Profile Picture"
						width={480}
						height={480}
						className="mb-10 w-full max-w-[280px] rounded-full border-4 border-cyan-500 grayscale filter transition duration-300 hover:filter-none dark:border-cyan-700 md:mb-0"
					/>
					<p className="flex w-full max-w-2xl items-start text-left text-base md:mb-0 md:ml-10 md:text-lg">
  {`I’m an entrepreneur and founder driven by a passion to revolutionize the real estate industry. With over 25 years of experience in consulting, technology, and strategic leadership, I’ve worked at the forefront of change, helping organizations navigate complexity and transform with purpose. Today, I’m using my expertise to build solutions that make real estate smarter, more efficient, and future-ready. I believe in shaping the future, not following it, and I’m here to lead the way for those who are ready to innovate, collaborate, and make a lasting impact.`}
</p>
				</div>
			</div>
		</Fade>
	);
}
