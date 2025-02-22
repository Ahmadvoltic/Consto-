
"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // Hook to track pathname changes
import styles from '@/components/styles/Loading.module.css'; // Import the CSS for loading styles

const Loading = () => {
    const pathname = usePathname();  // Get the current pathname
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Set loading to true whenever the pathname changes
        setLoading(true);

        // Set a timeout to simulate the loading time (for the duration of the animation)
        const timer = setTimeout(() => {
            setLoading(false);  // Hide the loader after animation completes
        }, 1500);  // Duration to match the animation time

        return () => clearTimeout(timer); // Clean up timeout on component unmount
    }, [pathname]);  // Trigger this effect whenever the pathname changes

    return (
        loading && (
            <div className={styles.loadingWrapper}>
                <div className={styles.loadingSquare}></div>
            </div>
        )
    );
};

export default Loading;

