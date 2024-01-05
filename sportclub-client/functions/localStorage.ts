export function addToLocalStorage(key: string, value: string): void {
    window.localStorage.setItem(key, value);
}

export function getFromLocalStorage(key: string): string | null {
    return window.localStorage.getItem(key);
}