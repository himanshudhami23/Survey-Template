"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

function ErrorPage({error}:{error:Error})
 {
    useEffect(()=> 
    console.error(error),[error]);
    
  return (
    <div className="flex w-full h-full flex-col items-center 
    justify-center gap-4">
        <h2 className="text-destructive text-4xl">Something Went Wrong
        </h2>
        <Button className="" asChild>
            <Link href={"/"}>Go Back to Home</Link>
        </Button>
    </div>
  );
}

export default ErrorPage;