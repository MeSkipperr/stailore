export type CartItem = {
    id: string;
    productId: string;
    productTypeId: string;
    productName: string;
    typeName: string;
    imageUrl: string;
    quantity: number;
    priceIDR: number;
    totalPriceIDR: number;
}

export type Currency = "USD" | "IDR"