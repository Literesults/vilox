"use client"
import { useRouter } from "next/navigation.js";

export default function Home() {
   const router = useRouter()
   router.push("/admin/dashboard")
}
