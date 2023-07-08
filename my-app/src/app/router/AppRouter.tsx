import {createBrowserRouter} from "react-router-dom";
import MainPage from "../../main/Main.page";
import RecipePage from "../../recipe/Recipe.page";
import ProfilePage from "../../profile/Profile.page";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/recipe',
        element: <RecipePage/>
    },
    {
        path: '/profile',
        element: <ProfilePage/>
    }
]);

 export default router;