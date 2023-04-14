import React from 'react';
import { BsArrowDownShort } from "react-icons/bs"
import {
  AreaChart, Area, XAxis,
  YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from 'recharts';




const data = [
  {
    name: '20 Aug',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '21 Aug',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '22 Aug',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '23 Aug',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '24 Aug',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '25 Aug',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '26 Aug',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const data2 = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];



const Dashboard = () => {


  const [currency, setCurrency] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };



  return (


    <div className="mt-20" >


      <div className="flex flex-col md:flex-row justify-center gap-2 items-center">
       
        <div className="bg-white h-56 dark:text-white dark:bg-secondary-dark-bg w-56 md:w-56 p-4 pt-4 rounded-xl" style={{ border: '1px solid black' }}>
          <p className="text-sm dark:text-white text-black mt-1">Today's sales</p>
          <p className="mt-3">
            <span className="text-lg dark:text-white font-semibold">₦1,652.50</span>
          </p>
        </div>

  
        <div className="bg-black h-56 dark:text-white dark:bg-secondary-dark-bg w-56 md:w-auto p-4 pt-4 rounded-xl" style={{ border: '1px solid black' }}>
          <p className="text-sm text-white dark:text-white mt-1">24 Aug - 01 Sep 21</p>

          <div>
            <ResponsiveContainer aspect={2}>
              <AreaChart
                data={data2}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area type="linear" dataKey="uv" stroke="#FFFFF" fill="#EF2C5A" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="text-sm text-white dark:text-white mt-1">This week</p>
          <p className="mt-3">
            <span className="text-lg font-semibold dark:text-white text-white">₦1,652.50</span>
          </p>

        </div>


        <div className="bg-white h-56 dark:text-white dark:bg-secondary-dark-bg w-56 md:w-auto p-4 pt-4 rounded-xl" style={{ border: '1px solid black' }}>
          <p className="text-sm text-black dark:text-white mt-1">24 Aug - 01 Sep 21</p>

          <div>
            <ResponsiveContainer aspect={2}>
              <AreaChart
                data={data2}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area type="linear" dataKey="uv" stroke="#FFFFF" fill="#EF2C5A" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="text-sm text-black dark:text-white mt-1">This month</p>
          <p className="mt-3">
            <span className="text-lg font-semibold dark:text-white text-black">₦1,652.50</span>
          </p>

        </div>


        <div className="bg-white h-56 dark:text-white dark:bg-secondary-dark-bg w-56 md:w-auto p-4 pt-4 rounded-xl" style={{ border: '1px solid black' }}>
          <p className="text-sm text-black dark:text-white mt-1">24 Aug - 01 Sep 21</p>

          <div>
            <ResponsiveContainer aspect={2}>
              <AreaChart
                data={data2}
                margin={{
                  top: 5,
                  right: 0,
                  left: 0,
                  bottom: 5,
                }}
              >
                <Area type="linear" dataKey="uv" stroke="#FFFFF" fill="#EF2C5A" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <p className="text-sm text-black dark:text-white mt-1">Last month</p>
          <p className="mt-3">
            <span className="text-lg font-semibold dark:text-white text-black">₦1,652.50</span>
          </p>

        </div>

      </div>


      <div className="flex flex-col md:flex-row justify-center items-center">


      <div className="flex-col mt-5 md:mr-10 justify-center gap-1 items-center hidden md:flex">

          <div class="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-0">
            <div class="flex items-center mb-2 sm:mb-0">
              <p class="text-black text-sm dark:text-white font-body font-bold mr-1">Sales</p>
              <p class="text-rose-500 text-sm font-body font-bold mr-1 sm:mr-2">7 days</p>
              <p class="text-black text-sm dark:text-white font-body font-bold sm:mr-2">30 days</p>
            </div>
            <div class="flex flex-col sm:flex-row items-center">
              <select id="currency"
                value={currency}
                onChange={handleChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-2 sm:mb-0 mr-2 sm:mr-4 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="CAD">CAD</option>
              </select>
              <select id="email"
                value={email}
                onChange={handleEmailChange}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mb-2 sm:mb-0 mr-2 sm:mr-4 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Klasha@gmail.com">Klasha@gmail.com</option>
                <option value="Klasha@gmail.com">Klasha@gmail.com</option>
                <option value="Klasha@gmail.com">Klasha@gmail.com</option>
              </select>
              <button class="bg-gray-100 text-black font-bold w-full sm:w-32 p-1 rounded-lg inline-flex items-center border border-gray-500">
                <BsArrowDownShort style={{ fontSize: '1em' }} />
                <span class="font-body text-xs font-semibold ml-1 sm:ml-0">Download report</span>
              </button>
            </div>
          </div>

          <ResponsiveContainer aspect={3} width={600} minWidth={300}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="uv" stroke="EF2C5A" fill="#EF2C5A" />
            </AreaChart>
          </ResponsiveContainer>

        </div>


        <div className="flex-col flex-wrap bg-rose-500 dark:text-white dark:bg-rose-500 md:w-48 p-4 rounded mt-5 md:mt-0 hidden md:flex">
          <p className="text-sm font-body font-bold text-white mt-1">KlashaWire - send money to businesses globally from Africa</p>
          <button className="bg-black text-white font-bold mt-12 p-2 rounded-md inline-flex items-center border border-gray-500">
            <span className="text-xs font-body font-bold">Send a Wire</span>
          </button>
        </div>


      </div>

    </div>

  )
}

export default Dashboard