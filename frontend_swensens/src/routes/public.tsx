// src/routes/public.tsx
export const PublicOnlyRoute = () => {
	const { isAuthenticated } = useAuth();
	return isAuthenticated ? <Navigate to={PATHS.HOME} replace /> : <Outlet />;
};
