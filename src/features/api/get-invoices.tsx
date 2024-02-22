
import { BASE_URL } from "@/config"

export async function getInvoices() {
    const res = await fetch(BASE_URL + 'invoices')
   
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   