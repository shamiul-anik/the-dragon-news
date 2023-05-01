import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Authentication/Login/Login";
import Registration from "../pages/Authentication/Registration/Registration";

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginLayout></LoginLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Navigate to="/category/0"></Navigate>
			},
			{
				path: 'login',
				element: <Login></Login>
			},
			{
				path: 'registration',
				element: <Registration></Registration>
			}
		]
	},
	{
		path: "/category",
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: ":id",
				element: <Category></Category>,
				loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
			}
		]
	},
	{
		path: "/news",
		element: <NewsLayout></NewsLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: ":id",
				element: <News></News>,
				loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
			}
		]
	}
]);