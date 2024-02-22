"use server";

import { DEFAULT_OPTIONS, DEFAULT_URL } from "@/config/fetch";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteInvoice(_id: string) {
  try {
    const options = {
      ...DEFAULT_OPTIONS,
      method: "DELETE",
    };

    const url = `${DEFAULT_URL}invoices/${_id}`;

    fetch(url, options).then((response) => {
      if (!response.ok) {
        throw new Error("Error to send invoice");
      }
      return response.json();
    });
  } catch (error) {
    throw new Error("Failed post invoice");
  }

  revalidatePath("/");
  redirect(`/`);
}
