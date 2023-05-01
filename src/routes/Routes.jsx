import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/category/:id",
				element: <Category></Category>,
				loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
			},
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