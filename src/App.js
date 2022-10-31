import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';

const App = () => {
  const links = [
    {
      id: 1,
      title: 'Twitter Link',
      url: 'https://twitter.com/Vicky_marz',
    },
    {
      id: 2,
      title: 'Zuri Team',
      url: 'https://training.zuri.team/',
    },
    {
      id: 3,
      title: 'Zuri Books',
      url: 'https://books.zuri.team/',
    },
    {
      id: 4,
      title: 'Python Books',
      url: 'https://books.zuri.team/python-for-beginners?ref_id=process.env.REACT_APP_NOT_SECRET_CODE',
    },
    {
      id: 5,
      title: 'Background Check for Coders',
      url: 'https://background.zuri.team/',
    },
    {
      id: 6,
      title: 'Design Books',
      url: 'https://books.zuri.team/design-rules',
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage links={links} />} />
      </Routes>

    </>
  );
};

export default App;
