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

//     <div className="mt-12">

//       <div className="flex gap-10 flex-wrap justify-center">

//         {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">


//           <div className="flex justify-between">
//             <p className="font-semibold text-xl">Sales overview</p>  <div className="flex items-center gap-4">
//             </div>

//           </div>


//           <div className="mt-10 flex gap-10 flex-wrap justify-center">

//             <div className=" border-r-1 border-color m-4 pr-10">
//               <div>
//               <p className="text-gray-500 mt-1">Today's sales</p>
//                 <p>
//                   <span className="text-3xl font-semibold">₦1,652.50</span>
//                 </p>
                
//               </div>
//             </div>


//           </div>

//         </div> */}


// <div className="flex flex-col md:flex-row">

// <div className="flex flex-col md:w-1/8 p-2">
//     <div className="bg-white rounded-lg shadow-md p-6 h-full w-full flex-grow">

//       <div className="flex justify-between items-center mb-4">
//         <span className="text-sm text-gray-500">24 Aug - 01 Sep 21</span>
//       </div>
//       <div className="flex-grow">
//         <div className="bg-gray-200 rounded-lg h-32 w-full"></div>
//       </div>
//       <div className="flex justify-between items-end mt-4">
//         <span className="text-sm text-gray-500">This Week</span>
//       </div>
//       <div className="flex justify-between items-end mt-4">
//         <span className="text-lg font-medium text-blue-600">₦1,652.50</span>
//       </div>
//     </div>
//   </div>

//   <div className="flex flex-col md:w-1/8 p-2">
//     <div className="bg-white rounded-lg shadow-md p-6 h-full w-full flex-grow">

//       <div className="flex justify-between items-center mb-4">
//         <span className="text-sm text-gray-500">24 Aug - 01 Sep 21</span>
//       </div>
//       <div className="flex-grow">
//         <div className="bg-gray-200 rounded-lg h-32 w-full"></div>
//       </div>
//       <div className="flex justify-between items-end mt-4">
//         <span className="text-sm text-gray-500">This Week</span>
//       </div>
//       <div className="flex justify-between items-end mt-4">
//         <span className="text-lg font-medium text-blue-600">₦1,652.50</span>
//       </div>
//     </div>
//   </div>


//   <div className="flex flex-col md:w-1/8 p-2">
//     <div className="bg-white rounded-lg shadow-md p-6 h-full w-full flex-grow">

//       <div className="flex justify-between items-center mb-4">
//         <span className="text-sm text-gray-500">24 Aug - 01 Sep 21</span>
//       </div>
//       <div className="flex-grow">
//         <div className="bg-gray-200 rounded-lg h-32 w-full"></div>
//       </div>
//       <div className="flex justify-between items-end mt-4">
//         <span className="text-sm text-gray-500">This Week</span>
//       </div>
//       <div className="flex justify-between items-end mt-4">
//         <span className="text-lg font-medium text-blue-600">₦1,652.50</span>
//       </div>
//     </div>
//   </div>


//   <div className="flex flex-col md:w-1/8 p-2">

//     <div className="bg-white rounded-lg shadow-md p-6 h-full w-full flex-grow">

//       <div className="flex justify-between items-center mb-4">
//         <span className="text-sm text-gray-500">24 Aug - 01 Sep 21</span>
//       </div>
//       <div className="flex-grow">
//         <div className="bg-gray-200 rounded-lg h-32 w-full"></div>
//       </div>
//       <div className="flex justify-between items-end mt-4">
//         <span className="text-sm text-gray-500">This Week</span>
//       </div>
//       <div className="flex justify-between items-end mt-4">
//         <span className="text-lg font-medium text-blue-600">₦1,652.50</span>
//       </div>
//     </div>

//   </div>

//       </div>
//     </div>
//   </div>


<div className="mt-24">

{/* <div className="flex flex-wrap lg:flex-nowrap justify-center ">

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-50 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
    
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-gray-400">Today's sales</p>
        <p className="text-2xl">$63,448.78</p>
      </div>
    </div>
  
  </div>


  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-50 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
    
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-gray-400">24 Aug - 01 Sep 21</p>
        

        <div>

        </div>
        <p>This week</p>
        <p className="text-2xl">$63,448.78</p>
      </div>
    </div>
  
  </div>


  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-50 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
    
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-gray-400">24 Aug - 01 Sep 21</p>
        

        <div>

        </div>
        <p>This Month</p>
        <p className="text-2xl">$63,448.78</p>
      </div>
    </div>
  
  </div>

  <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-50 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
    
    <div className="flex justify-between items-center">
      <div>
        <p className="font-bold text-gray-400">24 Aug - 01 Sep 21</p>
        

        <div>

        </div>
        <p>Last month</p>
        <p className="text-2xl">$63,448.78</p>
      </div>
    </div>
  
  </div>


</div> */}


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

</div>

  )
}

export default Dashboard