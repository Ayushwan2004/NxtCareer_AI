"use client"; // This directive is important for client-side components in Next.js 13+ App Router

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // For App Router, use 'next/navigation'

export default function NotFound() {
  const [countdown, setCountdown] = useState(7);
  // Initialize showSpaceship to true so the video appears immediately
  const [showSpaceship, setShowSpaceship] = useState(true);
  const router = useRouter();
  const videoRef = useRef(null);

  // Effect for the countdown timer and redirection
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer); // Clear timeout if component unmounts
    } else {
      // When countdown reaches 0, ensure spaceship is shown and then redirect
      setShowSpaceship(true); // Redundant here but good for clarity if logic changes
      const redirectTimer = setTimeout(() => {
        router.push("/"); // Redirect to home page
      }, 1000); // Give a small delay to see the spaceship before redirecting
      return () => clearTimeout(redirectTimer);
    }
  }, [countdown, router]);

  // Effect to play the video as soon as the component mounts or when showSpaceship becomes true
  useEffect(() => {
    if (showSpaceship && videoRef.current) {
      videoRef.current.play().catch(error => {
        // Autoplay might be blocked by browsers, show a console error but continue
        console.error("Failed to play video automatically:", error);
        // Optionally, you could display a play button here if autoplay fails
      });
    }
  }, [showSpaceship]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>

      {/* Always show the video container */}
      <div className="mb-4 animate-pulse">
        <video
          ref={videoRef}
          src="./spaceship.mp4" 
          alt="Spaceship Launching"
          className="mx-auto w-64 h-auto" 
          muted 
          loop 
          playsInline 
        />
        {countdown > 0 ? (
          <p className="text-xl font-md mt-2">
            Redirecting to home in {countdown} seconds...
          </p>
        ) : (
          <p className="text-lg font-medium mt-2">Engines Firing!</p>
        )}
      </div>


      {/* The "Return Home" button will still be visible for manual navigation */}
      <Link href="/">
        <Button>Return Home Now</Button>
      </Link>
    </div>
  );
}