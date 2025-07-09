"use client";

// import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
    // const { user, isLoaded } = useUser();

    return (
        <div className="space-y-2 mb-4">
            <h2 className="text-2xl lg:text-4xl text-black font-medium">
                {/* Welcome Back{isLoaded ? ", " : " "}{user?.firstName} 👋 */}
                Hi, Muhammad Alfiyan 👋
            </h2>
            <p className="text-sm lg:text-base text-black">
                This is your Financial Overview Report as Next JS Exercise App.
            </p>
        </div>
    )
};