import React, { useState } from 'react';

import { ReactComponent as MenuIcon } from 'assets/icons/menu_icon.svg';
import Navbar from 'components/Navbar';
import SideMenu from 'components/SideMenu';

export default function Homepage() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="max-h-[100vh] detail-page flex flex-col">
      <button
        type="button"
        className="absolute md:hidden right-5 top-5 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <Navbar />
      <div className="flex overflow-y-hidden h-full">
        <SideMenu toggle={toggleMenu} page="detail" />
        <div className="bg-gdscGrey-100 overflow-y-scroll flex-1 p-10 text-2xl font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, autem
          odio itaque neque numquam natus modi reprehenderit officiis
          praesentium! Itaque earum architecto nulla a autem reprehenderit
          sequi, tenetur et dolore? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Fuga, autem odio itaque neque numquam natus modi
          reprehenderit officiis praesentium! Itaque earum architecto nulla a
          autem reprehenderit sequi, tenetur et dolore? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Fuga, autem odio itaque neque
          numquam natus modi reprehenderit officiis praesentium! Itaque earum
          architecto nulla a autem reprehenderit sequi, tenetur et dolore?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, autem
          odio itaque neque numquam natus modi reprehenderit officiis
          praesentium! Itaque earum architecto nulla a autem reprehenderit
          sequi, tenetur et dolore? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Fuga, autem odio itaque neque numquam natus modi
          reprehenderit officiis praesentium! Itaque earum architecto nulla a
          autem reprehenderit sequi, tenetur et dolore? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Fuga, autem odio itaque neque
          numquam natus modi reprehenderit officiis praesentium! Itaque earum
          architecto nulla a autem reprehenderit sequi, tenetur et dolore?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, autem
          odio itaque neque numquam natus modi reprehenderit officiis
          praesentium! Itaque earum architecto nulla a autem reprehenderit
          sequi, tenetur et dolore? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Fuga, autem odio itaque neque numquam natus modi
          reprehenderit officiis praesentium! Itaque earum architecto nulla a
          autem reprehenderit sequi, tenetur et dolore? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Fuga, autem odio itaque neque
          numquam natus modi reprehenderit officiis praesentium! Itaque earum
          architecto nulla a autem reprehenderit sequi, tenetur et dolore?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, autem
          odio itaque neque numquam natus modi reprehenderit officiis
          praesentium! Itaque earum architecto nulla a autem reprehenderit
          sequi, tenetur et dolore? Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Fuga, autem odio itaque neque numquam natus modi
          reprehenderit officiis praesentium! Itaque earum architecto nulla a
          autem reprehenderit sequi, tenetur et dolore? Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Fuga, autem odio itaque neque
          numquam natus modi reprehenderit officiis praesentium! Itaque earum
          architecto nulla a autem reprehenderit sequi, tenetur et dolore?
        </div>
      </div>
    </div>
  );
}
