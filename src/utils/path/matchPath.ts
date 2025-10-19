// utils/matchPath.ts
const matchPath = (pathname: string, patterns: string[]): boolean => {
    return patterns.some((pattern) => {
        const pathnameSegments = pathname.split("/").filter(Boolean);
        const patternSegments = pattern.split("/").filter(Boolean);

        pathnameSegments.map((segment, index) => {
            const patternSegment = patternSegments[index];
            if (patternSegment === "*") {
                return true; // Wildcard matches any single segment
            }
            return segment === patternSegment; // Exact match required
        });

        return (
            pathnameSegments.length === patternSegments.length &&
            pathnameSegments.every((segment, index) => {
                const patternSegment = patternSegments[index];
                return (
                    patternSegment === "*" || segment === patternSegment
                );
            })
        );
    });
};

export default matchPath;
