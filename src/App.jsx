import React, { useState } from 'react'
import { Route,Routes,useNavigate } from 'react-router-dom'
import { login,checkLogin } from './services/auth.service';
import { connectWallet } from './services/contract.service';

//admin login
const AdminLogin = React.lazy(() => import('./pages/auth/adminLogin'));
const WalletConnect = React.lazy(() => import('./pages/auth/WalletConnect'));
//main pages
const Mainip = React.lazy(() => import('./pages/panels/InPatients/Mainip'));
const Mainop = React.lazy(()=>import('./pages/panels/outPatient/Mainop'));
const Maindoc = React.lazy(()=>import('./pages/panels/Doctor/Maindoc'));
const Mainad = React.lazy(()=>import('./pages/panels/Admin/Mainad'));
const Mainbc = React.lazy(()=>import('./pages/panels/bc/Mainbc'));

//add pages
const AddIp = React.lazy(()=>import('./pages/panels/InPatients/AddIp'));
const AddOp = React.lazy(()=>import('./pages/panels/outPatient/AddOp'));
const AddDoc = React.lazy(()=>import('./pages/panels/Doctor/AddDoc'));

//view pages
const ViewIp = React.lazy(()=>import('./pages/panels/InPatients/ViewIp'));
const ViewOp = React.lazy(()=>import('./pages/panels/outPatient/ViewOp'));
const ViewDoc = React.lazy(()=>import('./pages/panels/Doctor/ViewDoc'));

//pdf
const IpPdf = React.lazy(()=>import('./pages/panels/InPatients/IpDoc'));
const OpPdf = React.lazy(()=>import('./pages/panels/outPatient/OpDoc'));

//admin
const AddAdmin = React.lazy(()=>import('./pages/panels/Admin/AddAdmin'));

function App() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Routes>
      <Route path='/' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <WalletConnect connectWallet={connectWallet} navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/login' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <AdminLogin navigate={navigate} checkLogin={checkLogin} login={login} email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
        </React.Suspense>
      } />
      <Route path='/ip' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <Mainip navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/op' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <Mainop navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/doc' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <Maindoc navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/admin' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <Mainad navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/bc' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <Mainbc navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/addip' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <AddIp navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/ipdf' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <IpPdf navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/viewip' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <ViewIp navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/addop' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <AddOp navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/opdf' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <OpPdf navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/viewop' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <ViewOp navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/adddoc' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <AddDoc navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/viewdoc' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <ViewDoc navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
      <Route path='/addadmin' element={
        <React.Suspense fallback={<div className='h-screen flex justify-center items-center text-2xl font-extrabold'>Loading...</div>}>
          <AddAdmin navigate={navigate} checkLogin={checkLogin} />
        </React.Suspense>
      } />
    </Routes>
  )
}

export default App
