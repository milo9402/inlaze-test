import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<>ruta Login/Crear cuenta</>}/>
            <Route path='/new-post' element={<>Crear post</>}/>
            <Route path='/my-posts' element={<>ruta Listado de Post</>}/>
            <Route path='/all-post' element={<>ruta Listado de todos los Post</>}/>
            <Route path='/*' element={<> Pagina no encontrada - 404</>}/>
          </Routes>
      </BrowserRouter>


  );
}

export default App;