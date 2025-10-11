import { BASE_RATE_CURRENCY } from "@/config";
import { Currency } from "@/models/cart";

/**
 * Convert price from IDR to USD or keep as IDR.
 * 
 * @param currency - "IDR" or "USD"
 * @param priceIDR - Price value in Indonesian Rupiah
 * @param rateDifference - Difference in exchange rate (example: 0.02 = +2%)
 * @returns Converted price number
 */
export function convertCurrency(
    currency: Currency,
    priceIDR: number,
    rateDifference: number = 0
): number {
    // Nilai tukar dasar: 1 USD = 15,500 IDR (bisa disesuaikan)
    const baseRate = BASE_RATE_CURRENCY;

    if (currency === "IDR") {
        return priceIDR; 
    }

    // Hitung nilai tukar dengan penyesuaian rateDifference
    const adjustedRate = baseRate + baseRate * rateDifference;

    // Konversi IDR ke USD
    const priceUSD = priceIDR / adjustedRate;

    // Bulatkan ke 2 desimal
    return parseFloat(priceUSD.toFixed(2));
}
