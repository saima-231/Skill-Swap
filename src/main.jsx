import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './routes/router.jsx'
import AuthProvider from './Components/Provider/AuthProvider.jsx'
import Loading from './Components/Loading.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <Suspense fallback={<Loading></Loading>}>
   <RouterProvider router={router} />
</Suspense>   
 </AuthProvider>
  </StrictMode>,
)
