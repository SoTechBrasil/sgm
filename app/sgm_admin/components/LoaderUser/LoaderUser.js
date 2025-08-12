"use client";
import { useEffect } from "react";
import { useUser } from "@/context/user_context";
import { useRouter } from "next/navigation";

export default function UserLoader(){
    const { setUser } = useUser();
    const router = useRouter();

    useEffect(()=> {
        async function fetchUser(){
            try {
                const res = await fetch("http://localhost:3000/admin/data",{
                    credentials: "include",
                    method: "GET", 
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                const data = await res.json();
                if(!data.sucess) throw new Error(data.message);
                setUser(data.user_data);
                console.log("User data loaded successfully:", data);
            } catch (error) {
                console.error("Error fetching user:", error);
                router.replace("/login");
            }
        }

        fetchUser();
    }, [setUser]);

    return null;
}