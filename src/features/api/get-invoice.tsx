"use server";

import { BASE_URL } from "@/config";

export async function getInvoice(id: string) {
    const res = await fetch(BASE_URL + `invoices/${id}`)
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }