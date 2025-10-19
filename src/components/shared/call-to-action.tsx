// "use client";
import Link from "next/link";
import HoverText from "../hover-text";

const CallToAction = () => {
    return (
        <Link href="/shop">
            <button className="bg-text tracking-wide rounded-2xl text-white text-xs lg:text-sm px-6 py-3 flex items-center border-none outline-none focus:outline-none">
                <HoverText>Bring to Home</HoverText>
            </button>
        </Link>
    );
}

export default CallToAction;