import Image from 'next/image';

export default function Header() {
  return (
    <header className="site-header" id="site-header">
      <div className="header-container">
        <a href="#" className="brand-logo" aria-label="Inievo Technologies Home">
          <Image
            src="https://res.cloudinary.com/dtaaamnmf/image/upload/v1781266972/inievo_full_logo_png_akmlws.png"
            alt="Inievo Technologies Logo"
            width={500}
            height={75}
          />
        </a>
        {/* Add navigation markup if needed */}
      </div>
    </header>
  );
}
