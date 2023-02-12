import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './Views/HomePage';
import AboutUs from './Views/AboutUs';
import NavBar from './Views/NavBar';
import ContactUs from './Views/ContactUs';
import Career from './Views/Career';
import FirstYear from './Views/AboutUsNav/FirstYear';
import SecondYear from './Views/AboutUsNav/SecondYear';
import ThirdYear from './Views/AboutUsNav/ThirdYear';
import FinalYear from './Views/AboutUsNav/FinalYear';
import Footer from './Views/Footer';
import ManufacuringProcess3 from './Views/Subjects/FinalYear/ManufacuringProcess3';
import Error from './Views/Error';
import CadCam from './Views/Subjects/FinalYear/CadCam';
import Mechatronics from './Views/Subjects/FinalYear/Mechatronics';
import Managment from './Views/Subjects/FinalYear/Managment';
import HeatTransfer from './Views/Subjects/ThirdYear/HeatTransfer';
import ThermoDynamics from './Views/Subjects/ThirdYear/Thermodynamics2';
import SignIn from './Views/Admin/SignIn';
import DashBoard from './Views/Admin/DashBoard';
import View from './Views/Admin/View';
const RoutingPage = () => {
  return (
    <div>
      <div>
     
     
      <Routes>
        <Route path='' element={ <NavBar />} >
         <Route path='' element={<HomePage />} />

        <Route path='/about' element={<AboutUs />} >

              {/* Routing For About Us Page */}
          <Route path='first' element={<FirstYear />}/>

          <Route path='second' element={<SecondYear />}/>

             {/* Routing For Third Year */}

          <Route path='third' element={<ThirdYear />}>
            <Route path='heatTransfer' element={<HeatTransfer />} />
            <Route path='atd1' element={<ThermoDynamics />} />
          </Route>

               {/* Routing For Final Year */}

          <Route path='final' element={<FinalYear />} >
            <Route path='mp3' element={<ManufacuringProcess3 />} />
            <Route path='cadcam' element={<CadCam />} />
            <Route path='managment' element={<Managment />} />
            <Route path='mechatronics' element={<Mechatronics />} />
          </Route>

        </Route>

        <Route path='/contact' element={<ContactUs />} />

        <Route path='/career' element={<Career />} />
      
        <Route path='/admin' element={<SignIn/>}>
           <Route path='dashBoard' element={<DashBoard />} /> 
        </Route>

        <Route path='*' element={<Error /> }/>
        </Route>
      </Routes>
      
      <Footer />
      
    </div>
    </div>
  )
}

export default RoutingPage
