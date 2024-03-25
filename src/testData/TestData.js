import { AiOutlineCalendar, AiOutlineDashboard, AiOutlineUser, AiOutlineInbox } from 'react-icons/ai';
import { GoTasklist } from 'react-icons/go';
import { GrYoga, GrNotification } from 'react-icons/gr';
import { FaRunning } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { MdOutlineRecommend } from 'react-icons/md';




import avatar from '../images/icons/avatar.jpg'



export const chatData = [
    {
      image: avatar,
      message: 'Roman Joined FuncFit',
      desc: 'Congratulate him',
      time: '9:08 AM',
    },
    {
      image: avatar,
      message: 'New message received',
      desc: 'Salma sent you new message',
      time: '11:56 AM',
    },
    {
      image: avatar,
      message: 'John passed a milestone',
      desc: 'Congratulate him',
      time: '4:39 AM',
    },
    {
      image: avatar,
      message: 'New message received',
      desc: 'Jolly sent you new message',
      time: '1:12 AM',
    },
  ];

  export const userProfileData = [
    {
      icon: <AiOutlineUser />,
      title: 'My Profile',
      desc: 'Account Settings',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
    },
    {
      icon: <AiOutlineInbox />,
      title: 'My Inbox',
      desc: 'View Messages',
      iconColor: 'rgb(0, 194, 146)',
      iconBg: 'rgb(235, 250, 242)',
    },
    {
      icon: <GrNotification />,
      title: 'Notifications',
      desc: 'View Notification',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
    },
  ];

  export const scheduleData = [
    {
      Id: 1,
    },
    {
      Id: 2,
    },
    {
      Id: 3,
    },
    {
      Id: 4,
    },
    {
      Id: 5,
    },
    {
      Id: 6,
    },
    {
      Id: 7,
    },
  ];

  export const links = [
    {
      title: 'Dashboard',
      links: [
        {
          name: 'daily routine',
          icon: <AiOutlineDashboard/>,
        },
        {
          name: 'intructor',
          icon: <GoTasklist />,
        },
        {
          name: 'calendar',
          icon: <AiOutlineCalendar />,
        },
        {
          name: 'Exercise',
          icon: <GiWeightLiftingUp />,
        },
        {
          name: 'Food Plan',
          icon: <AiOutlineCalendar />,
        },   
        {
          name: 'Recommendations',
          icon: <MdOutlineRecommend />,
        },
      ],
    },
  
    {
      title: 'Sceduled Events',
      links: [
        {
          name: 'cardio',
          icon: <FaRunning />,
        },
        {
          name: 'yoga',
          icon: <GrYoga />,
        },


  
      ],
    },
  ];