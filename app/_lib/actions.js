"use server";

import { signIn, signOut } from "@/auth";

export async function updateProfile(formData) {
	console.log(formData);
	console.log("Server action");
}

export async function signInAction() {
	await signIn("google", {
		redirectTo: "/account",
	});
}

export async function signOutAction() {
	await signOut({
		redirectTo: "/",
	});
}
