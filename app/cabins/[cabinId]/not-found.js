import Link from "next/link";

export default function NotFound() {
	return (
		<main className="text-center space-y-6 mt-4">
			<h1 className="text-3xl font-semibold">No Cabin like that existed!</h1>
			<Link
				href="/cabins"
				className="inline-block bg-accent-500 text-primary-800 px-6 text-lg py-3"
			>
				Back to all cabins
			</Link>
		</main>
	);
}
