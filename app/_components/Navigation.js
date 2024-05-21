import { auth } from "@/auth";
import Link from "next/link";

export default async function Navigation() {
	const session = await auth();
	console.log(session);
	return (
		<nav className="z-10 text-xl">
			<ul className="flex items-center gap-16">
				<li>
					<Link
						href="/cabins"
						className="transition-colors hover:text-accent-400"
					>
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="transition-colors hover:text-accent-400"
					>
						About
					</Link>
				</li>
				<li>
					{session?.user?.image ? (
						<Link
							href="/account"
							className="transition-colors hover:text-accent-400 flex items-center gap-4"
						>
							<img
								src={session.user.image}
								className="h-8 w-8 rounded-full"
								alt="profile image"
								referrerPolicy="no-referrer"
							/>
							<span>{session.user.name}</span>
						</Link>
					) : (
						<Link
							href="/account"
							className="transition-colors hover:text-accent-400"
						>
							Guest area
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
