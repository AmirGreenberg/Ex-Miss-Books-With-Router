const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {
    return (
        <header className="app-header full main-layout nav-bar">
                <Link className="logo" to="/">
                    Mister Book
                </Link>
            <nav className="nav-bar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Books</NavLink>
            </nav>
        </header>
    )
}
