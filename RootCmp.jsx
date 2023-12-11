// const Router = ReactRouterDOM.BrowserRouter
const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

import { AppHeader } from './cmps/AppHeader.jsx'
import { Team } from './cmps/Team.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { Vision } from './cmps/Vision.jsx'
import { About } from './pages/About.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { BookEdit } from './pages/BookEdit.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
    return (
        <Router>
            <section className="app main-layout">
                <AppHeader />
                <main>
                    <Routes>
                        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />}>
                            <Route path="/about/team" element={<Team />} />
                            <Route path="/about/vision" element={<Vision />} />
                        </Route>
                        <Route path="/Book" element={<BookIndex />} />
                        <Route path="/Book/:bookId" element={<BookDetails />} />
                        <Route path="/Book/edit/:bookId" element={<BookEdit />} />
                        <Route path="/Book/edit" element={<BookEdit />} />
                    </Routes>
                </main>
                <UserMsg />
            </section>
        </Router>
    )
}
