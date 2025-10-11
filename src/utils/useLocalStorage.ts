"use client";
import { useState, useEffect } from "react";

// === Static CRUD ===
export const useLocalStorage = {
    set<T>(key: string, value: T) {
        if (typeof window === "undefined") return;
        localStorage.setItem(key, JSON.stringify(value));
        // 🔔 Trigger event agar komponen lain tahu
        window.dispatchEvent(new CustomEvent("localstorage-update", { detail: { key, value } }));
    },

    get<T>(key: string): T | null {
        if (typeof window === "undefined") return null;
        const item = localStorage.getItem(key);
        try {
            return item ? (JSON.parse(item) as T) : null;
        } catch {
            return null;
        }
    },

    remove(key: string) {
        if (typeof window === "undefined") return;
        localStorage.removeItem(key);
        window.dispatchEvent(new CustomEvent("localstorage-update", { detail: { key, value: null } }));
    },

    clear() {
        if (typeof window === "undefined") return;
        localStorage.clear();
        window.dispatchEvent(new CustomEvent("localstorage-update", { detail: { all: true } }));
    },
};

// === Reactive Hook ===
export function useLocalStorageState<T extends any[]>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") return initialValue;
        const stored = localStorage.getItem(key);
        try {
            return stored ? (JSON.parse(stored) as T) : initialValue;
        } catch {
            return initialValue;
        }
    });

    // Sinkronisasi ke localStorage
    useEffect(() => {
        if (typeof window === "undefined") return;
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    // 🔄 Dengarkan event localstorage-update (tab yang sama)
    useEffect(() => {
        const handleLocalChange = (e: CustomEvent) => {
            if (e.detail.key === key) {
                setValue(e.detail.value ?? initialValue);
            }
        };
        window.addEventListener("localstorage-update", handleLocalChange as EventListener);
        return () => window.removeEventListener("localstorage-update", handleLocalChange as EventListener);
    }, [key]);

    // 🔧 CRUD helper
    const addItem = (item: T[number]) => {
        const newValue = [...value, item] as T;
        setValue(newValue);
        useLocalStorage.set(key, newValue);
    };

    const updateItem = (
        identifier: keyof T[number],
        matchValue: any,
        newData: Partial<T[number]>
    ) => {
        const newValue = value.map((item) =>
            item[identifier] === matchValue ? { ...item, ...newData } : item
        ) as T;
        setValue(newValue);
        useLocalStorage.set(key, newValue);
    };

    const deleteItem = (identifier: keyof T[number], matchValue: any) => {
        const newValue = value.filter((item) => item[identifier] !== matchValue) as T;
        setValue(newValue);
        useLocalStorage.set(key, newValue);
    };

    const remove = () => useLocalStorage.remove(key);
    const clear = () => useLocalStorage.clear();

    return [value, setValue, { addItem, updateItem, deleteItem, remove, clear }] as const;
}
