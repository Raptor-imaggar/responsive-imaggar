import {
  FiHome,
  FiInfo,
  FiUsers,
  FiPhone,
  FiBriefcase,
  FiSliders,
  FiBox,
} from 'react-icons/fi';

import personImage from './person.png';

const headerMenu = [
  {
    name: { en: 'Home', tamil: 'முகப்பு' },
    url: '/',
    icon: <FiHome />,
  },
  {
    name: { en: 'About', tamil: 'எங்களை பற்றி' },
    url: '/about',
    icon: <FiInfo />,
    submenu: [
      { name: { en: 'Why Imaggar', tamil: 'தயாரி' }, url: '/sub1', image: personImage },
      { name: { en: 'Partnership', tamil: 'தயாரி' }, url: '/sub2', image: personImage },
      { name: { en: 'About Us', tamil: 'தயாரி' }, url: '/sub3', image: personImage },
    ],
  },
  {
    name: { en: 'Contacts', tamil: 'தொடர்பு கொள்ள' },
    url: '/contact',
    icon: <FiPhone />,
    submenu: [
      { name: { en: 'contact1', tamil: 'தயாரி' }, url: '/sub1', image: personImage },
      { name: { en: 'Call', tamil: 'தயாரி' }, url: '/sub2', image: personImage },
      { name: { en: 'Bot', tamil: 'தயாரி' }, url: '/sub3', image: personImage },
    ],
  },
  {
    name: { en: 'Careers', tamil: 'பணியாளர் வேலைகள்' },
    url: '/careers',
    icon: <FiBriefcase />,
    submenu: [
      { name: { en: 'Intership', tamil: 'தயாரி' }, url: '/sub1', image: personImage },
      { name: { en: 'Job', tamil: 'தயாரி' }, url: '/sub2', image: personImage },
    ],
  },
  {
    name: { en: 'Services', tamil: 'சேவைகள்' },
    url: '/services',
    icon: <FiSliders />,
    submenu: [
      { name: { en: 'Maas', tamil: 'தயாரி' }, url: '/sub1', image: personImage },
      { name: { en: 'Baas', tamil: 'தயாரி' }, url: '/sub2', image: personImage },
      { name: { en: 'SDaas', tamil: 'தயாரி' }, url: '/sub3', image: personImage },
      { name: { en: 'VMaas', tamil: 'தயாரி' }, url: '/sub2', image: personImage },
    ],
  },
  {
    name: { en: 'Products', tamil: 'தயாரிப்புகள்' },
    url: '/products',
    icon: <FiBox />,
    submenu: [
      { name: { en: 'SITE', tamil: 'தயாரி' }, url: '/sub1', image: personImage },
      { name: { en: 'CORE', tamil: 'தயாரி' }, url: '/sub2', image: personImage },
      { name: { en: 'TRADE', tamil: 'தயாரி' }, url: '/sub3', image: personImage },
      { name: { en: 'VOICE', tamil: 'தயாரி' }, url: '/sub2', image: personImage },
      { name: { en: 'CARE', tamil: 'தயாரி' }, url: '/sub2', image: personImage },
    ],
  },
];

export default headerMenu;
