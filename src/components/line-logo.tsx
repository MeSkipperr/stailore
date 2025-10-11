import Image from "next/image";

const LineLogo = ({className}:{className?:string}) => {
    return (
        <div className={`w-full  flex justify-center items-center space-x-4  ${className} `}>
            <div className="w-full h-px bg-text opacity-60"></div>
            <Image
                src="/assets/logo/stailore-latter-logo-dark-green.png"
                alt="Stailore Logo"
                width={50}
                height={50}
                className="object-contain"
            />
            <div className="w-full h-px bg-text opacity-60"></div>
        </div>
    );
}

export default LineLogo;