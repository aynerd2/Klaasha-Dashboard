import React from 'react';
import { useStateContext } from '../context/ContextProvider'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BsArrowDownShort } from "react-icons/bs"
import LineChart from "../component/Chart/LineChart"
import AreaChat from '../component/Chart/AreaChat';





const Dashboard = () => {

  const { currentColor, currentMode } = useStateContext();

  const [currency, setCurrency] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };





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



      <div className="flex m-3 justify-between items-center">

        <div className="flex justify-center items-center">

          <p className='text-black dark:text-white text-lg font-body font-bold'>Sales</p>
          <p className='text-rose-500 text-lg font-body font-bold mx-1'>7 days</p>
          <p className='text-black dark:text-white text-lg font-body font-bold mx-1'>30 days</p>

          <select id="currency" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/12 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={currency} onChange={handleChange}>
            <option selected>USD</option>
            <option value={"EUR"}>EUR</option>
            <option value={"GBP"}>GBP</option>
            <option value={"CAD"}>CAD</option>
          </select>

          <select id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/5 p-1 mx-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={email} onChange={handleEmailChange}>
            <option selected>Email</option>
            <option value={"Klasha@gmail.com"}>Klasha@gmail.com</option>
            <option value={"Klasha@gmail.com"}>Klasha@gmail.com</option>
            <option value={"Klasha@gmail.com"}>Klasha@gmail.com</option>
          </select>

          <div>
            <button className="bg-gray-100 text-black font-bold py-2 px-4 gap-1 rounded-xl inline-flex items-center border border-gray-500">
              <BsArrowDownShort style={{ fontSize: '1em' }} />
              <span className='font-body text-xs font-semibold'>Download report</span>
            </button>
          </div>

        </div>

        <div className="bg-rose-500 h-44 dark:text-white dark:bg-rose-500 md:w-56 p-4 rounded">
          <p className="text-sm font-body font-bold text-white mt-1">KlashaWire - send money to businesses globally from Africa</p>
          <button className="bg-black text-white font-bold mt-12 p-2 rounded-md inline-flex items-center border border-gray-500" style={{ marginRight: '10px' }}>
            <span className="text-xs font-body font-bold">Send a Wire</span>
          </button>
        </div>

      </div>



    </div>

  )
}

export default Dashboard