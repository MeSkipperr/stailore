"use client";

import { Skeleton } from "@/components/ui/skeleton";

interface SkeletonListProps {
    count: number;
}

export default function SkeletonList({ count }: SkeletonListProps) {
    return (
        <>
            {Array.from({ length: count }).map((_, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div
                        key={index}
                        className={`w-full h-auto lg:h-[50dvh] flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                            } justify-start items-center gap-8`}
                    >
                        <Skeleton className="w-full aspect-square lg:w-1/3 h-full rounded-2xl" />

                        <div
                            className={`w-full flex flex-col flex-1 gap-4 lg:gap-0 justify-between h-full ${isEven ? "" : "items-start lg:items-end"
                                }`}
                        >
                            <div
                                className={`w-full space-y-4 flex flex-col ${isEven
                                        ? "items-start text-left"
                                        : "lg:items-end lg:text-right text-left"
                                    }`}
                            >
                                <Skeleton className="w-1/3 h-16 rounded-2xl" />
                                <Skeleton className="w-2/3 h-20 rounded-2xl" />
                                <Skeleton className="w-1/6 h-6 lg:h-10 rounded-2xl" />
                                <Skeleton className="h-[1px] w-full" />
                                <div
                                    className={`flex gap-4 w-full ${isEven ? "" : "lg:justify-end"
                                        }`}
                                >
                                    <Skeleton className="w-1/6 h-4 lg:h-6 rounded-2xl" />
                                    <Skeleton className="w-1/6 h-4 lg:h-6 rounded-2xl" />
                                    <Skeleton className="w-1/6 h-4 lg:h-6 rounded-2xl" />
                                </div>
                                <Skeleton className="w-1/6 h-8 lg:h-10 rounded-2xl" />
                            </div>

                            <div
                                className={`w-full flex justify-end ${isEven ? "lg:justify-start" : "lg:justify-end"
                                    } gap-4`}
                            >
                                <Skeleton className="w-1/4 h-12 lg:h-16 rounded-2xl" />
                                <Skeleton className="w-1/4 h-12 lg:h-16 rounded-2xl" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
