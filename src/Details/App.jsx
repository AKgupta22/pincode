import React from 'react'
import { BrowserRouter as BR, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import "../assest/css/style.css"
import Footer from './Footer'
import Pincode from './Pincode'
export default function App() {
    let Api_key=process.env.REACT_APP_RAPID_API
    return (
        <BR>
            <Navbar />
            <Routes>

                <Route path='/' element={<Pincode api={Api_key} />}></Route>
                <Route path='/pincode' element={<Pincode api={Api_key} />}></Route>
                <Route path='*' element={<Pincode api={Api_key} />}></Route>





            </Routes>
            <Footer />
        </BR>
    )
}
