import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const globalStreak = writable(0);
export const language = writable('en');
export const currency = writable('en');
export const manualRates = { id: 15800, eu: 0.92, en: 1 };

// Ambil data dari localStorage kalau ada, kalau nggak ada pakai array kosong
const storedRecipes = browser ? JSON.parse(localStorage.getItem('cookedRecipes') || '[]') : [];

export const cookedRecipes = writable(storedRecipes);

// Setiap kali store berubah, simpan ke localStorage
if (browser) {
    cookedRecipes.subscribe((value) => {
        localStorage.setItem('cookedRecipes', JSON.stringify(value));
    });
}