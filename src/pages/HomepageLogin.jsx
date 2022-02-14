import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { SHOW_URL_MODAL } from 'action-types';
import { ReactComponent as MenuIcon } from 'assets/icons/menu.svg';
import Footer from 'components/Footer';
import ModalUrl from 'components/ModalUrl';
import NavBar from 'components/Navbar';
import UrlInputBoxAndTitle from 'components/UrlInputBoxAndTitle';

export default function HomepageLogin() {
  const { shortenedUrl } = useSelector((state) => state.urlWithSlug);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { UrlModal } = useSelector((state) => state.showModal);
  const { shortenedUrl } = useSelector((state) => state.url);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };
  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);
  return (
    <div
      aria-hidden="true"
      className="flex flex-col relative justify-center md:items-center bg-mobile-background md:bg-blue md:bg-contain"
      onClick={hideModal}
      onKeyDown={closeOnEscapeKeyDown}
    >
      <button
        type="button"
        className="absolute md:hidden right-5 top-3 z-50"
        onClick={handleToggleMenu}
      >
        <MenuIcon className="w-10 h-10" />
      </button>
      <NavBar home />
      <div className="flex h-full mt-[-130px]">
        <div className="md:hidden">
          <SideMenu toggle={toggleMenu} page="user-home" />
        </div>
        <div className="ml-[1.25rem] mt-[135px] mb-[288px] md:mt-[152px] md:mb-[276px] w-full">
          <UrlInputBoxAndTitle loggedIn />
        </div>
      </div>
      <ModalUrl
        title="My Modal"
        onClose={() => dispatch({
          type: SHOW_URL_MODAL,
          payload: false,
        })}
        show={UrlModal}
        shortenedUrl={shortenedUrl}
      />
      <Footer />
    </div>
  );
}
