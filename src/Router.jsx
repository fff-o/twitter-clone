import React from 'react'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Bookmark from './conponents/router/Bookmark';
import List from './conponents/router/List';
import Message from './conponents/router/Message';
import Notice from './conponents/router/Notice';
import Topic from './conponents/router/Topic';
import Profile from './conponents/router/Profile';
import Sidebar from './conponents/sidebar/Sidebar';
import Timeline from './conponents/timeline/Timeline';
import About from './conponents/router/About';
import Widgets from './conponents/widget/Widgets';

function Router() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path={`/`} element={<Timeline />} />
        <Route path={`/topic`} element={<Topic />} />
        <Route path={`/notice`} element={<Notice />} />
        <Route path={`/message`} element={<Message />} />
        <Route path={`/bookmark`} element={<Bookmark />} />
        <Route path={`/list`} element={<List />} />
        <Route path={`/profile`} element={<Profile />} />
        <Route path={`/about`} element={<About />} />
      </Routes>
      <Widgets />
    </BrowserRouter>
  )
}

export default Router