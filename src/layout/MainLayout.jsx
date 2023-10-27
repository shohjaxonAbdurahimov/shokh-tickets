import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div>
      <Navbar />
      <hr className='mx-auto my-4 navbar-hr' />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout