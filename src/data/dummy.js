import React from 'react';
import { BsWallet2, BsMegaphone } from 'react-icons/bs';
import {TbBrandGoogleAnalytics} from 'react-icons/tb'
import {CgArrowsExchangeV} from 'react-icons/cg'
import {FiRefreshCcw} from 'react-icons/fi'
import {SlPieChart} from 'react-icons/sl'
import {MdOutlineShoppingCartCheckout} from 'react-icons/md'
import {RiLinksFill} from 'react-icons/ri'
import {GrTransaction} from 'react-icons/gr'
import {  FiCreditCard } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import avatar from './avatar.jpg';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import avatar4 from './avatar4.jpg';



export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
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
    name: 'Klasha-default',
    color: '#EF2C5A',
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


export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};


export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const chatData = [
  {
    image:
      avatar2,
    message: 'Roman Joined the Team!',
    desc: 'Congratulate him',
    time: '9:08 AM',
  },
  {
    image:
      avatar3,
    message: 'New message received',
    desc: 'Salma sent you new message',
    time: '11:56 AM',
  },
  {
    image:
      avatar4,
    message: 'New Payment received',
    desc: 'Check your earnings',
    time: '4:39 AM',
  },
  {
    image:
      avatar,
    message: 'Jolly completed tasks',
    desc: 'Assign her new tasks',
    time: '1:12 AM',
  },
];


export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};

const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];



export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];