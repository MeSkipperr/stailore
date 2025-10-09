// utils/ls.ts
export const useLocalStorge = {
    // CREATE or UPDATE
    set<T>(key: string, value: T) {
        if (typeof window === "undefined") return;
        localStorage.setItem(key, JSON.stringify(value));
    },

    // READ
    get<T>(key: string): T | null {
        if (typeof window === "undefined") return null;
        const item = localStorage.getItem(key);
        try {
            return item ? (JSON.parse(item) as T) : null;
        } catch {
            return null;
        }
    },

    // DELETE
    remove(key: string) {
        if (typeof window === "undefined") return;
        localStorage.removeItem(key);
    },

    // CLEAR ALL
    clear() {
        if (typeof window === "undefined") return;
        localStorage.clear();
    },
};
