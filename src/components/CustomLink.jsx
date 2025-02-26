

"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use the new `useRouter` from Next.js 13+
import styles from '@/components/styles/Loading.module.css'; // Import your loading styles

const CustomLink = ({ href, children }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        setLoading(true); // Show the loading spinner

        // Wait for the loading animation to complete
        setTimeout(() => {
            router.push(href); // Navigate to the new page after the animation completes
        }, 1500); // Adjust this duration to match your loading animation duration
    };

    return (
        <>
            {loading && (
                <div className={styles.loadingWrapper}>
                    <div className={styles.loadingSquare}></div>
                </div>
            )}
            <Link href={href} onClick={handleClick}>
                {children}
            </Link>
        </>
    );
};

export default CustomLink;