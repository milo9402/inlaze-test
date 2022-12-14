import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Login from 'pages/Login';
import AllPost from 'pages/AllPost';

import Layout from 'layout';
import PageNotFound from '../pages/PageNotFound';
import MyPost from '../pages/MyPost';
import NewPost from '../pages/NewPost';
import Cookies from 'universal-cookie';


function App() {
  const cookies = new  Cookies();
  const token = cookies.get('jwt-token');
  return (
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/new-post' element={<NewPost/>}/>
              <Route path='/my-posts' element={<MyPost/>}/>
              <Route path='/all-post' element={<AllPost/>}/>
              <Route path='/*' element={<PageNotFound/>}/>
            </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;