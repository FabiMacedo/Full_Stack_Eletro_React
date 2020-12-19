const Header = () => {
    return (
        <header className="bg-danger">
            <nav className="navbar nav align-items-center justify-content-between">
                <a href="index.html" className="navbar-brand nav-link text-light">
                <img width="40" src="components/imagens/fs-icon.png" alt="Full Stack Eletro"/></a>
                <a href='product.html' className="navbar-item nav-link text-light">Nossos Produtos</a>
                <a href="store.html" className="navbar-item nav-link text-light">Nossas Lojas</a>
                <a href="contact.html" className="navbar-item nav-link text-light">Fale Conosco</a>
            </nav>
        </header>
    );
}