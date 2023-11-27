import "./Header.css"

interface HeaderProps {
    children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
    return (
        <>
            <div id="layout-wrapper">
                <div id="page-topbar">
                    <div className="layout-width">
                        <div className="navbar-header">
                            <div className="d-flex">
                                <div className="navbar-brand-box horizontal-logo">
                                    <a href="/" className="logo logo-dark">
                                        <span className="logo-sm">
                                            <img src="template/dist/imags/bbb.png" alt="" height="85" />
                                        </span>
                                        <span className="logo-lg">
                                            <img src="template/dist/imags/bbb.png" alt="" height="85" />
                                        </span>
                                    </a>

                                    <a href="/" className="logo logo-light">
                                        <span className="logo-sm">
                                            <img src="template/dist/imags/bbb2.png" alt="" height="70" />
                                        </span>
                                        <span className="logo-lg">
                                            <img src="template/dist/imags/bbb2.png" alt="" height="70" />
                                        </span>
                                    </a>
                                </div>

                                <button type="button" className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger" id="topnav-hamburger-icon">
                                    <span className="hamburger-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </button>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>

            <div id="removeNotificationModal" className="modal fade zoomIn" tabIndex={-1} aria-hidden="true">

            </div>

            <div className="app-menu navbar-menu">


                <div id="scrollbar">
                    <div className="container-fluid">

                        <div id="two-column-menu">
                        </div>
                        <ul className="navbar-nav" id="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link menu-link" href="/participante" role="button" aria-expanded="false" aria-controls="sidebarDashboards">
                                Participante
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="/prova" role="button" aria-expanded="false" aria-controls="sidebarCharts">Prova
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="/edicao" role="button" aria-expanded="false" aria-controls="sidebarCharts">Edição
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="/indicacao" role="button" aria-expanded="false" aria-controls="sidebarCharts">Indicação
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="/votacao" role="button" aria-expanded="false" aria-controls="sidebarCharts">Votação
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="/eliminacao" role="button" aria-expanded="false" aria-controls="sidebarCharts">Eliminação
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link menu-link" href="/eventoespecial" role="button" aria-expanded="false" aria-controls="sidebarCharts">Evento Especial
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="main-content">

                <div className="teste">
                    <div className="">

                        <div className="">
                            <div className="">
                                <div className="">
                                    {children}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div id="preloader">
                <div id="status">
                    <div className="spinner-border text-primary avatar-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

        </>
    )
}