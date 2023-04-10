import React from 'react'
import { Stacked, Pie, Button, LineChart, SparkLine } from '../component';
import { useStateContext } from '../context/ContextProvider'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { earningData } from '../data/dummy';


const Dashboard = () => {

  const { currentColor, currentMode } = useStateContext();

  return (


<div className="mt-20">


<div className="flex m-3 flex-wrap justify-center gap-1 items-center">



    {earningData.map((item) => (
      <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
          <p className="text-sm text-gray-400  mt-1">{item.date}</p>
      <p className="text-sm text-gray-400  mt-1">{item.duration}</p>
        <p className="mt-3">
          <span className="text-lg font-semibold">{item.amount}</span>
        </p>
        
      </div>
    ))}

    
  </div>

<div>

</div>

</div>

  )
}

export default Dashboard