import Link from 'next/link';

export default function NotFound() {
	return (
		<div className="h-screen text-center flex flex-col justify-center">
			<h2>404 Not Found</h2>
			<p>Ничего такого нет!</p>
			<Link href="/">Return Home</Link>
		</div>
	);
}
