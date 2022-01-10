import NavBarHome from './navbarhome';
import NavBarLink from './navbarlink';

export default function NavBar() {
  return (
    <nav className="shadow-lg max-w-full h-fit w-full flex justify-center">
      <div className="flex content-center mx-[60px] my-[30px] w-full relative">
        <NavBarHome />
        <NavBarLink />
      </div>
    </nav>
  );
}
