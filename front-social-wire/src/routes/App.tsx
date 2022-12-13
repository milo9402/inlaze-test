import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import Login from 'pages/Login';
import AllPost from 'pages/AllPost';

import Layout from 'layout';
function App() {
  return (
      <BrowserRouter>
        <Layout>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/new-post' element={<>Crear post</>}/>
              <Route path='/my-posts' element={<>ruta Listado de Post</>}/>
              <Route path='/all-post' element={<AllPost/>}/>
              <Route path='/*' element={<> Pagina no encontrada - 404</>}/>
            </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;