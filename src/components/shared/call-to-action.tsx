// "use client";
import Link from "next/link";
import HoverText from "../hover-text";
import { Button } from "../ui/button";

const CallToAction = () => {
    return (
        <Link href="/shop">
            <Button variant="default" size="lg" >
                Bring to Home
            </Button>
        </Link>
    );
}

export default CallToAction;