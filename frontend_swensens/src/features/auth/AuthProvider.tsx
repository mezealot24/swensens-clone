import React, { createContext, useContext, useState } from "react";
import axios from "axios";

interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
}

interface RegisterFormData {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
}

interface AuthContextType {
	user: User | null;
	registerUser: (data: RegisterFormData) => Promise<void>;
	isAuthenticated: boolean;
	login: (email: string, password: string) => Promise<void>;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const login = async (email: string, password: string) => {
		try {
			const response = await axios.post("/api/auth/login", { email, password });
			setUser(response.data.user);
			setIsAuthenticated(true);
			localStorage.setItem("token", response.data.token);
		} catch (error) {
			console.error("Login failed:", error);
			throw error;
		}
	};

	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
		localStorage.removeItem("token");
	};

	const registerUser = async (data: RegisterFormData) => {
		try {
			const response = await axios.post("/api/auth/register", data);
			setUser(response.data.user);
			setIsAuthenticated(true);
			localStorage.setItem("token", response.data.token);
		} catch (error) {
			console.error("Registration failed:", error);
			throw error;
		}
	};

	return (
		<AuthContext.Provider
			value={{ user, isAuthenticated, login, logout, registerUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
