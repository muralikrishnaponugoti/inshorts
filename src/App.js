import {createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from './pages/homePage.js';
import Specific from "./pages/specificPage.js";
import NewsList from "./components/newsList.js";
function App() {
  const router=createBrowserRouter([
    {path:'/',element:<HomePage/>,
      children:[
        {index:true,element:<NewsList/>},
        {path:'specific/:articleId',element:<Specific/>},
        {path:'/category/:category',element:<NewsList/>}
        
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
