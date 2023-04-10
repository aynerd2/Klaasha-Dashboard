import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
// import { Button, Footer, Navbar, Notifications, Sidebar, ThemeSettings, UserProfile } from './component'
import { Button, Footer, Navbar, Notifications, Sidebar, ThemeSettings, UserProfile } from './component'
import { Analytics, Balances, Checkout, Dashboard, Exchange, Marketing, PaymentLinks, Transactions, Wire } from './pages'
import './App.css'
import { useStateContext } from './context/ContextProvider';

const App = () => {

      const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

      useEffect(() => {
            const currentThemeColor = localStorage.getItem('colorMode');
            const currentThemeMode = localStorage.getItem('themeMode');
            if (currentThemeColor && currentThemeMode) {
                  setCurrentColor(currentThemeColor);
                  setCurrentMode(currentThemeMode);
            }
      }, []);


      return (
            <div className={currentMode === 'Dark' ? 'dark' : ''}>
                  <BrowserRouter>
                        <div className='flex relative dark:bg-main-dark-bg'>

                              {/* This handles the Theme settings */}
                              <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                                    <TooltipComponent content='Settings' position='Top'>
                                          <button
                                                type="button"
                                                onClick={() => setThemeSettings(true)}
                                                style={{ background: currentColor, borderRadius: '50%' }}
                                                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
                                          >
                                                <FiSettings />
                                          </button>
                                    </TooltipComponent>

                              </div>

                              {activeMenu ? (
                                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-side-bg'>
                                          <Sidebar />
                                    </div>
                              ) : (

                                    <div className='w-0 dark:bg-secondary-dark-bg'>
                                          <Sidebar />
                                    </div>
                              )}


                              <div

                                    className={
                                          `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
                        ${activeMenu

                                                ? ' md:ml-72 w-full'
                                                : 'flex-2'}`}>

                                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                                          <Navbar />

                                    </div>


                                    <div>

                                          {themeSettings && (<ThemeSettings />)}

                                          <Routes>
                                                {/* Main Pages */}
                                                <Route path='/' element={<Dashboard />} />
                                                <Route path='/dashboard' element={<Dashboard />} />
                                                <Route path='/balances' element={<Balances />} />
                                                <Route path='/transactions' element={<Transactions />} />
                                                <Route path='/analytics' element={<Analytics />} />
                                                <Route path='/marketing' element={<Marketing />} />
                                                <Route path='./exchange' element={<Exchange />} />

                                                {/* Accept payments */}
                                                <Route path='/checkout' element={<Checkout />} />
                                                <Route path='/paymentlink' element={<PaymentLinks />} />

                                                {/* Send payments */}
                                                <Route path='/wire' element={<Wire />} />


                                          </Routes>
                                    </div>
                              </div>

                        </div>

                  </BrowserRouter>
            </div>
      );
};

export default App;