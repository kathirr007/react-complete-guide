import logoImg from '@/assets/logo.jpg';

export function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>Delicious Food</h1>
      </div>
      <nav>
        <button type="button">
          Cart
        </button>
      </nav>
    </header>
  );
}
