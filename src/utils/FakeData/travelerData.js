import { IoMan, IoIosWoman } from 'react-icons/io';
import { FaChildReaching, FaBaby } from 'react-icons/fa';

export const travelers = [
  {
    id: 1,
    label: "Adult",
    value: "adult",
    remark: "12 years & above",
    icon: <IoMan />,
  },
  {
    id: 2,
    label: "Children",
    value: "children",
    remark: "From 5 to under 12",
    icon: <IoIosWoman />,
  },
  {
    id: 3,
    label: "Kids",
    value: "kids",
    remark: "From 2 to under 5",
    icon: <FaChildReaching />,
  },
  {
    id: 4,
    label: "Infants",
    value: "infants",
    remark: "Under 2 years",
    icon: <FaBaby />,
  },
];
