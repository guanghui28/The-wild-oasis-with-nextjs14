"use server";

import { auth, signIn, signOut } from "@/auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { getBookings } from "./data-service";

export async function updateProfile(formData) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in first!");
	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");
	const regex = /^[a-zA-z0-9]{6,12}$/;
	if (!regex.test(nationalID))
		throw new Error("Please provided valid nationalID");

	const updateData = {
		nationalID,
		countryFlag,
		nationality,
	};

	const { data, error } = await supabase
		.from("guests")
		.update(updateData)
		.eq("id", session.user.guestId);

	if (error) throw new Error("Guest could not be updated");

	revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
	const session = await auth();
	if (!session) throw new Error("You must be logged in first!");

	const guestBookings = await getBookings(session.user.guestId);
	const guestBookingIds = guestBookings.map((booking) => booking.id);
	if (!guestBookingIds.includes(bookingId))
		throw new Error("You are not allowed delete this booking!");

	const { error } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId);
	if (error) throw new Error("Booking couldn't be deleted!");

	revalidatePath("/account/reservations");
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
