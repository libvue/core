export default function useNumber(value, decimals = 2, method = 'floor') {
    const operator = Number.parseInt(`1${new Array(decimals).fill(0).join().replace(',', '')}`, 10);
    return (Math[method](value * operator) / operator).toFixed(decimals);
}
