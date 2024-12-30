import React, { createContext } from "react";

const AuthContext = createContext({});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	// Add your authentication logic here

	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
