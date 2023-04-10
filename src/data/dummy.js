import React from 'react';
import { BsWallet2, BsMegaphone } from 'react-icons/bs';
import {TbBrandGoogleAnalytics} from 'react-icons/tb'
import {CgArrowsExchangeV} from 'react-icons/cg'
import {FiRefreshCcw} from 'react-icons/fi'
import {SlPieChart} from 'react-icons/sl'
import {MdOutlineShoppingCartCheckout} from 'react-icons/md'
import {RiLinksFill} from 'react-icons/ri'
import {GrTransaction} from 'react-icons/gr'

import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';


import { BsBoxSeam } from 'react-icons/bs';
import { FiBarChart} from 'react-icons/fi';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);


export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);


export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];


export const links = [
  {
    title: 'Main pages',
    links: [
      {
        name: 'Dashboard',
        icon: <SlPieChart />,
      },

      {
        name: 'Balances',
        icon: <BsWallet2 />,
      },

      {
        name: 'Transactions',
        icon: <CgArrowsExchangeV />,
      },
      {
        name: 'Analytics',
        icon: <TbBrandGoogleAnalytics />,
      },

      {
        name: 'Marketing',
        icon: <BsMegaphone />,
      },

      {
        name: 'Exchange rates',
        icon: <FiRefreshCcw />,
      },
    ],
  },

  {
    title: 'Accept payments',
    links: [
      {
        name: 'Checkout',
        icon: <MdOutlineShoppingCartCheckout />,
      },
      {
        name: 'Payment Links',
        icon: <RiLinksFill />,
      },
    ],
  },
  {
    title: 'Send payments',
    links: [
      {
        name: 'Wire',
        icon: <GrTransaction />,
      },

    ],
  },
];



export const employeesGrid = [


  { 
    field: 'TransactionID',
    headerText: 'ID',
    width: '150',
    textAlign: 'Center' },

    { field: 'Source',
    headerText: 'Source',
    width: '100',
    textAlign: 'Center',
  },


  { field: 'Customername',
    headerText: 'Name',
    width: '100',
    textAlign: 'Center',
  },



  { field: 'Customeremail',
    headerText: 'email',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },



  { field: 'Amount',
    headerText: 'Amount',
    width: '100',
    textAlign: 'Center' },


  { field: 'Requestdate',
    headerText: 'Request date',
    width: '150',
    textAlign: 'Center' },

    { field: 'Status',
    headerText: 'Status',
    width: '100',
    textAlign: 'Center' },


];


export const employeesData = [
  {
    TransactionID: "GB124QWERTY12346",
    Source: 'GTB',
    Customername: 'Mike Owen',
    Customeremail: '0223337281',
    Amount: '$230.00',
    Requestdate: '24.08.2021',
    Status: 'Pending',
  },

  {
    TransactionID: "GB124QWERTY12346",
    Source: 'GTB',
    Customername: 'Mike Owen',
    Customeremail: '0223337281',
    Amount: '$230.00',
    Requestdate: '24.08.2021',
    Status: 'Pending',
  },


  {
    TransactionID: "GB124QWERTY12346",
    Source: 'GTB',
    Customername: 'Mike Owen',
    Customeremail: '0223337281',
    Amount: '$230.00',
    Requestdate: '24.08.2021',
    Status: 'Pending',
  },


  {
    TransactionID: "GB124QWERTY12346",
    Source: 'GTB',
    Customername: 'Mike Owen',
    Customeremail: '0223337281',
    Amount: '$230.00',
    Requestdate: '24.08.2021',
    Status: 'Pending',
  },


  {
    TransactionID: "GB124QWERTY12346",
    Source: 'GTB',
    Customername: 'Mike Owen',
    Customeremail: '0223337281',
    Amount: '$230.00',
    Requestdate: '24.08.2021',
    Status: 'Pending',
  },


  {
    TransactionID: "GB124QWERTY12346",
    Source: 'GTB',
    Customername: 'Mike Owen',
    Customeremail: '0223337281',
    Amount: '$230.00',
    Requestdate: '24.08.2021',
    Status: 'Pending',
  },
 
    {
      TransactionID: "GB124QWERTY12346",
      Source: 'GTB',
      Customername: 'Mike Owen',
      Customeremail: '0223337281',
      Amount: '$230.00',
      Requestdate: '24.08.2021',
      Status: 'Pending',
    },
  

 

];


export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];


export const earningData = [
  {
    
    amount: '4,396',
    duration: 'Products',
    date: '24 Aug - 01 Sep 21'
  },
  {
  
    amount: '₦1,652.50',
    duration: 'This week',
    date: '24 Aug - 01 Sep 21'
  },
  {
    amount: '₦1,652.50',
    duration: 'This month',
    date: '24 Aug - 01 Sep 21'
  },
  {
    amount: '₦1,652.50',
    duration: 'Last month',
    date: '24 Aug - 01 Sep 21'
  },
];



