import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img 
          src="/BST-LOGO-NEW.svg" 
          alt="BST Logo" 
          className="header-logo"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
    </header>
  )
} 