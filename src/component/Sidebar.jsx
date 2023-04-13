import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy'
import { useStateContext } from '../context/ContextProvider'
import {BiHelpCircle} from 'react-icons/bi'
import {AiOutlineLeft} from 'react-icons/ai'




const Sidebar = () => {



  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'

  return (

    <div className='ml-3 h-screen 
    md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>

      {

        activeMenu && (<>

          <div className='flex justify-between items-center'>
            <Link to='/' onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex'>
              <img src='https://klasha.com/_next/static/media/logo-black.681f8ca0.svg' />
            </Link>

            <TooltipComponent content="Menu" position='BottomCenter'>

              <button type='button' onClick={() => setActiveMenu(!activeMenu)}
                style={{ color: currentColor }}
                className='text-xl  rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div className='mt-10'>

            {links.map((items) => (

              <div key={items.title}>
                <p className='text-gray-400 m-3 mt-4'>{items.title}</p>

                {items.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize font-body">{link.name}</span>
                  </NavLink>
                ))}

              </div>



            ))}


          </div>






        </>)


      }



      <div className='flex-col ml-3 mt-20 justify-between items-center'>
        <div>
          <button className="bg-rose-500 hover:bg-rose-400 text-white font-bold py-2 px-4 gap-2 mb-5 rounded-full inline-flex items-center">
           <BiHelpCircle style={{ fontSize: '1.5em' }}/>
            <span className='font-body font-semibold'>Support</span>
          </button>
        </div>

        
        <div>
          <button 
          className="bg-gray-100 hover:bg-gray-100 text-black font-bold py-2 px-4 gap-2 rounded inline-flex items-center border border-gray-500"
          onClick={() => setActiveMenu(!activeMenu)}>
           <AiOutlineLeft style={{ fontSize: '1.5em' }}/>
            <span className='font-body font-semibold'>Hide Panel</span>
          </button>
        </div>
      </div>


    </div>
  )
}

export default Sidebar