import React from 'react';

import "../../css/index.css"
import { Sidebar } from './Sidebar'

const Right = () => {
  return (
    <div  className="absolute right-0 top-0 z-[10000]">
      <Sidebar />
    </div>
  );
};

export default Right;
