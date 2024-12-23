import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { ProtectedRoute } from "./protected";
import { PublicOnlyRoute } from "./public";
import { PATHS } from "./paths";

// Pages
import { Home } from "@/pages/Home";
import { Menu } from "@/pages/Menu";
import { LoginForm } from "@/pages/auth/LoginForm";
import { RegisterForm } from "@/pages/Register";
import { Profile } from "@/pages/Profile";
import { Cart } from "@/pages/Cart";
import { Orders } from "@/pages/Orders";

export const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: PATHS.HOME,
				element: <Home />,
			},
			{
				path: PATHS.MENU,
				element: <Menu />,
			},
			{
				element: <PublicOnlyRoute />,
				children: [
					{
						path: PATHS.LOGIN,
						element: <LoginForm />,
					},
					{
						path: PATHS.REGISTER,
						element: <Register />,
					},
				],
			},
			{
				element: <ProtectedRoute />,
				children: [
					{
						path: PATHS.PROFILE,
						element: <Profile />,
					},
					{
						path: PATHS.CART,
						element: <Cart />,
					},
					{
						path: PATHS.ORDERS,
						element: <Orders />,
					},
				],
			},
		],
	},
]);
