import './HeaderNav.css';

export function HeaderNav() {
    return (
        <header>
            <div id='header-blue-dark'>
                <div id='logo'>
                    <img id='imgLogo' src="src\assets\online-store.png" alt="logotipo" />
                    <p>CHEIN</p>
                </div>
                <div id='buscador'>Buscador</div>
                <ul id='ulLogo'>
                    <li>
                        <img className='icons' src="src\assets\user.png" alt="perfil de usuario" />
                        Usuario
                    </li>
                    <li>
                        <img className='icons' src="src\assets\carrito.png" alt="carrito de compras" />
                    </li>
                </ul>
            </div>
            <nav id='header-nav-blue-semi-dark'>
                <ul>
                    <li id='All'> <a>Todos</a> </li>
                    <li id='Promo'><a>Promociones</a></li>
                </ul>
            </nav>
        </header>
    );
  }