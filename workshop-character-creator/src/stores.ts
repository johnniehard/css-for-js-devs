import { writable } from "svelte/store";

export const hatColor = writable<string>('pink')
export const headColor = writable<string>('red')
export const bodyColor = writable<string>('salmon')
export const legsColor = writable<string>('green')