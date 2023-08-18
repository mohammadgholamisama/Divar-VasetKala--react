// Desktop
import AddAdvertisingPage from "./Pages/AddAdvertisingPage/AddAdvertisingPage";
import Home from "./Pages/Home/Home";
import ListPage from "./Pages/ListPage/ListPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SupportPage from "./Pages/SupportPage/SupportPage";
import UserAccountPage from "./Pages/UserAccountPage/UserAccountPage";

// Mobile
import HomeMobile from "./Mobile/MobilePages/HomeMobile/HomeMobile";
import MobileListPage from "./Mobile/MobilePages/MobileListPage/MobileListPage";
import MobileProductPage from "./Mobile/MobilePages/MobileProductPage/MobileProductPage";
import MobileUserAccountPage from "./Mobile/MobilePages/MobileUserAccountPage/MobileUserAccountPage";
import MobileChatListPage from "./Mobile/MobilePages/MobileChatListPage/MobileChatListPage"
import MobileGroupsPage from "./Mobile/MobilePages/MobileGroupsPage/MobileGroupsPage";
import MobileAddAdvertisingPage from "./Mobile/MobilePages/MobileAddAdvertisingPage/MobileAddAdvertisingPage";

function createDesktopRoutes() {
    return [
        { path: '/', element: <Home key={1} /> },
        { path: '/list/:listName', element: <ListPage key={2} /> },
        { path: '/login', element: <LoginPage key={3} /> },
        { path: '/support', element: <SupportPage key={4} /> },
        { path: '/product/:productID', element: <ProductPage key={5} /> },
        { path: '/user-account', element: <UserAccountPage key={6} /> },
        { path: '/add-advertising', element: <AddAdvertisingPage key={7} /> },
        { path: '*', element: <Home key={8} /> },  // Not Found Page
    ];
}

function createMobileRoutes() {
    return [
        { path: '/', element: <HomeMobile key={1} /> },
        { path: '/list/:listName', element: <MobileListPage key={2} /> },
        { path: '/product/:productID', element: <MobileProductPage key={3} /> },
        { path: '/login', element: <LoginPage key={4} /> },
        { path: '/user-account', element: <MobileUserAccountPage key={5} /> },
        { path: '/chat-list', element: <MobileChatListPage key={6} /> },
        { path: '/groups', element: <MobileGroupsPage key={7} /> },
        { path: '/add-advertising', element: <MobileAddAdvertisingPage key={8} /> },
        { path: '*', element: <HomeMobile key={8} /> },  // Not Found Page
    ];
}

const routes = window.innerWidth > 700 ? createDesktopRoutes() : createMobileRoutes();

export default routes;
