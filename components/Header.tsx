import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
	return (
		<header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full bg-white shadow z-50">
			<Link href="/">
				<Image
					src="https://img.freepik.com/free-photo/pencil-icon-left-side-in-white-background_187299-40188.jpg?w=826&t=st=1690962400~exp=1690963000~hmac=81d132878fb810aea0c01af6669833e27d8f9a07bde3baedc241eca1effdf562"
					alt="logo"
					width={150}
					height={150}
				/>
			</Link>
			<div className="flex item-center space-x-2.5 text-sm">
				<button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">
					Log in
				</button>
				<button className="px-6 py-2 text-sm text-indigo-500 transition-colors duration-300 border-2 border-indigo-400 rounded-full shadow-xl shadow-indigo-300/30 hover:bg-indigo-500 hover:text-indigo-100">
					Sign out
				</button>
			</div>
		</header>
	);
};
