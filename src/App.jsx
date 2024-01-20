import Signin from './Component/Authentication/Signin/Signin'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Component/Home/Home'
import Writeblog from './Component/Write Blog/Writeblog'
import Eachblog from './Component/Blog/Eachblog'
import Signinadmin from './Component/Authentication/Signin/Admin/Signinadmin'
import Signupadmin from './Component/Authentication/Signup/Admin/SignupAdmin'
import Signup from './Component/Authentication/Signup/Signup'
import Signupauthor from './Component/Authentication/Signup/Author/Signupauthor'
import Signinauthor from './Component/Authentication/Signin/Author/Signinauthor'
import MyBlogs from './Component/Blog/My Blogs/MyBlogs'
import UpdateBlog from './Component/Blog/Update Blogs/UpdateBlogs'
import Explore from './Component/Blog/Explore/Explore'
import Checkout from './Component/Blog/Payment/Checkout'
import Success from './Component/Blog/Payment/Success'
import Cancel from './Component/Blog/Payment/Cancel'
import Landingpage from './Component/Landing Page/Landingpage'
import Loading from './Component/Loading/Loading'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/signinadmin' element={<Signinadmin/>}/>
        <Route path='/signinauthor' element={<Signinauthor/>}/>
        <Route path='/signupadmin' element={<Signupadmin/>}/>
        <Route path='/signupauthor' element={<Signupauthor/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/write_blog' element={<Writeblog/>}/>
        <Route path='/myblogs' element={<MyBlogs/>}/>
        <Route path='/viewblog/:id' element={<Eachblog/>}/>
        <Route path='/blog/:id' element={<UpdateBlog/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/checkout/:id' element={<Checkout/>}/>
        <Route path='/success/:id' element={<Success/>}/>
        <Route path='/cancel/:id' element={<Cancel/>}/>

        <Route path='/loading' element={<Loading/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App