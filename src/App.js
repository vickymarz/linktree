import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';

const App = () => {
  const links = [
    {
      id: 'twitter',
      title: 'Twitter Link',
      url: 'https://twitter.com/Vicky_marz',
    },
    {
      id: 'btn__zuri',
      title: 'Zuri Team',
      url: 'https://training.zuri.team/',
    },
    {
      id: 'books',
      title: 'Zuri Books',
      url: 'https://books.zuri.team/',
    },
    {
      id: 'book__python',
      title: 'Python Books',
      url: `https://books.zuri.team/python-for-beginners?ref_id=${process.env.REACT_APP_SLACK_USERNAME}`,
    },
    {
      id: 'pitch',
      title: 'Background Check for Coders',
      url: 'https://background.zuri.team/',
    },
    {
      id: 'book__design',
      title: 'Design Books',
      url: 'https://books.zuri.team/design-rules',
    },
    {
      id: 'contact',
      title: 'Contact Me',
      url: '/contact',
    },
  ];

  return (
    <Routes>
      <Route path="/" element={<Homepage links={links} />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
