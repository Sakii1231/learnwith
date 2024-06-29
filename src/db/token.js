// src/lib/token.js

const TOKEN_KEY = 'tokenData';

export function saveToken(token, expiry) {
	if (typeof window !== 'undefined') {
		localStorage.setItem(TOKEN_KEY, JSON.stringify({ token, expiry }));
	}
}

export function getToken() {
	if (typeof window !== 'undefined') {
		const tokenData = localStorage.getItem(TOKEN_KEY);
		return tokenData ? JSON.parse(tokenData) : null;
	}
	return null;
}

export function clearToken() {
	if (typeof window !== 'undefined') {
		localStorage.removeItem(TOKEN_KEY);
	}
}
