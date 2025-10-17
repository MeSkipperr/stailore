export function splitArrayWithWrap<T>(array: T[], size: number): T[][] {
    const result: T[][] = [];

    for (let i = 0; i < array.length; i += size) {
        let chunk = array.slice(i, i + size);

        // jika kurang dari size, tambahkan dari awal
        if (chunk.length < size) {
            const needed = size - chunk.length;
            chunk = chunk.concat(array.slice(0, needed));
        }

        result.push(chunk);
    }

    return result;
}
export function splitArrayAutoSize<T>(array: T[], count: number): T[][] {
    const result: T[][] = [];

    // hitung size otomatis berdasarkan panjang array & jumlah grup
    const size = Math.ceil(array.length / count);

    for (let i = 0; i < count; i++) {
        const start = i * size;
        let chunk = array.slice(start, start + size);

        // jika kurang dari size, tambahkan dari awal (wrap)
        if (chunk.length < size) {
            const needed = size - chunk.length;
            chunk = chunk.concat(array.slice(0, needed));
        }

        result.push(chunk);
    }

    return result;
}
