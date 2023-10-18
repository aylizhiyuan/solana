import React from 'react'
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home/index'
import Detail from '@/pages/Detail/index'
// 假设想直接打开index.html，可直接使用hashRouter
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </HashRouter>
  )
}
export default App
