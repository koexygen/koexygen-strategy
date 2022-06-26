import React, { Fragment } from 'react';
import logo from '../../assets/img/icon.png';
import './Popup.scss';

import { Menu, Popover, Transition } from '@headlessui/react'
import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const user = {
  name: 'Whitney Francis',
  email: 'whitney@example.com',
  imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#' },
  { name: 'Jobs', href: '#' },
  { name: 'Applicants', href: '#' },
  { name: 'Company', href: '#' },
]
const breadcrumbs = [
  { name: 'Jobs', href: '#', current: false },
  { name: 'Front End Developer', href: '#', current: false },
  { name: 'Applicants', href: '#', current: true },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]
const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#' },
  { name: 'coverletter_front_end_developer.pdf', href: '#' },
]
const eventTypes = {
  applied: { icon: UserIcon, bgColorClass: 'bg-gray-400' },
  advanced: { icon: ThumbUpIcon, bgColorClass: 'bg-blue-500' },
  completed: { icon: CheckIcon, bgColorClass: 'bg-green-500' },
}
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: 'Applied to',
    target: 'Front End Developer',
    date: 'Sep 20',
    datetime: '2020-09-20',
  },
  {
    id: 2,
    type: eventTypes.advanced,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    date: 'Sep 22',
    datetime: '2020-09-22',
  },
  {
    id: 3,
    type: eventTypes.completed,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    date: 'Sep 28',
    datetime: '2020-09-28',
  },
  {
    id: 4,
    type: eventTypes.advanced,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    date: 'Sep 30',
    datetime: '2020-09-30',
  },
  {
    id: 5,
    type: eventTypes.completed,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    date: 'Oct 4',
    datetime: '2020-10-04',
  },
]
const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Popup = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-amber-700 text-2xl">
          gamarjoba vnaxot ra aris
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
