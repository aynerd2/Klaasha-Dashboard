import React from 'react';
import { useStateContext } from '../context/ContextProvider'





const Dashboard = () => {

  const { currentColor, currentMode } = useStateContext();


  return (


    <div className="mt-20">


      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">


        <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-8 pt-9 rounded">
          <p className="text-sm text-gray-400  mt-1">Today's sales</p>
          <p className="mt-3">
            <span className="text-lg font-semibold">₦1,652.50</span>
          </p>

        </div>

        <div className="bg-black h-44 dark:text-white dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded">
          <p className="text-sm text-white dark:text-white mt-1">24 Aug - 01 Sep 21</p>
          <div>

          </div>
          <p className="text-sm text-white dark:text-white mt-1">This week</p>
          <p className="mt-3">
            <span className="text-lg font-semibold dark:text-white text-white">₦1,652.50</span>
          </p>

        </div>

        <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded">
          <p className="text-sm text-gray-400  mt-1">24 Aug - 01 Sep 21</p>
          <div>graph</div>
          <p className="text-sm text-gray-400  mt-1">This week</p>
          <p className="mt-3">
            <span className="text-lg font-semibold">₦1,652.50</span>
          </p>

        </div>

        <div className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded">
          <div>graph</div>
          <p className="text-sm text-gray-400  mt-1">24 Aug - 01 Sep 21</p>
          <p className="text-sm text-gray-400  mt-1">This week</p>
          <p className="mt-3">
            <span className="text-lg font-semibold">₦1,652.50</span>
          </p>

        </div>

      </div>



      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">

<div>graph here</div>


<div className="bg-rose-500 h-44 dark:text-white dark:bg-rose-500 md:w-56 p-4 rounded">
          <p className="text-sm font-body font-bold text-white  mt-1">
            KlashaWire - send money to businesses globally from Africa</p>
         
  
            <button class="bg-black text-white font-bold mt-12 py-1 px-2 rounded-md inline-flex items-center border border-gray-500" style={{ marginRight: '10px' }}>
                        <span class="text-s font-body font-bold">Send a Wire</span>
              </button>
        </div>

      </div>

    </div>

  )
}

export default Dashboard