import React, { createContext, useContext, useState, useEffect } from "react";
import { User, AuthContextType, RegisterData } from "@/types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		// Check localStorage for existing session
		const storedUser = localStorage.getItem("user");
		if (storedUser) {
			setUser(JSON.parse(storedUser));
			setIsAuthenticated(true);
		}
	}, []);

	const login = async (email: string, password: string) => {
		try {
			// Implement API call here
			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) throw new Error("Login failed");

			const userData = await response.json();
			setUser(userData);
			setIsAuthenticated(true);
			localStorage.setItem("user", JSON.stringify(userData));
		} catch (error) {
			console.error("Login error:", error);
			throw error;
		}
	};

	const logout = () => {
		setUser(null);
		setIsAuthenticated(false);
		localStorage.removeItem("user");
	};

	const register = async (userData: RegisterData) => {
		try {
			// Implement API call here
			const response = await fetch("/api/auth/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(userData),
			});

			if (!response.ok) throw new Error("Registration failed");

			const newUser = await response.json();
			setUser(newUser);
			setIsAuthenticated(true);
			localStorage.setItem("user", JSON.stringify(newUser));
		} catch (error) {
			console.error("Registration error:", error);
			throw error;
		}
	};

	const value = {
		user,
		isAuthenticated,
		login,
		logout,
		register,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export default AuthProvider;
