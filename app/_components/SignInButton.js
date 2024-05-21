import { signInAction } from "@/app/_lib/actions";

export default function SignInButton() {
	return (
		<form action={signInAction}>
			<button
				type="submit"
				className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium"
			>
				<img
					src="https://authjs.dev/img/providers/google.svg"
					className="h-8 w-8"
					alt="Google Logo"
				/>
				<span>Continue with Google</span>
			</button>
		</form>
	);
}
