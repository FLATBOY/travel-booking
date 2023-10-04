
import Image from 'next/image'
import styles from './page.module.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '@/pages/home/Home.js'
import List from '@/pages/list/List'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/hotels" element={<List/>}/>
        </Routes>
      </BrowserRouter>
  
  )
}
