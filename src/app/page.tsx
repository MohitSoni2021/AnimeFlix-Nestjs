import HomeDashboard from '@/components/appDashboard/HomeDashboard';
import NavbarComponent from '@/components/common/Navbar';
import React from 'react'

function HomePage() {
  return ( 
    <>
      <NavbarComponent/>
      <HomeDashboard/>
    </>
   );
}

export default HomePage;