import SvgHamburgerMenu from "../../../icons/icon-menu-hamburger";
import SvgLogoUala from "../../../icons/uala-logo";

interface HeaderProps {
  setDrawerOpen: (value: boolean) => void;
}

const Header = (props: HeaderProps) => {
  const { setDrawerOpen } = props;
  return (
    <nav className="fixed top-0 left-0 right-0 h-14 border-b border-gray-200 bg-white rounded-bl-[32px] flex items-center justify-between px-4 z-50">
      <button onClick={() => setDrawerOpen(true)} aria-label="Abrir menú">
        <SvgHamburgerMenu />
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <SvgLogoUala />
      </div>

      <div className="w-7" />

      {/* Borde inferior derecho cóncavo simulado */}

      <div className="absolute -bottom-[32px] right-0 z-10">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fondo blanco sin borde */}
          <path d="M32 32V0H0C17.6731 0 32 14.3269 32 32Z" fill="white" />

          {/* Solo curva con borde gris */}
          <path
            d="M32 32C32 14.3269 17.6731 0 0 0"
            fill="none"
            stroke="#E5E7EB"
            strokeWidth="1"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Header;
