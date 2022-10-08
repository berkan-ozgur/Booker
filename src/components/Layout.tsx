import Footer from "./Footer"
import Header from "./Header"

type Props = {
    title?: string;
    children: React.ReactNode;
}

const Layout = ({ children, title = "Booker" }: Props) => {
    return (
        <>
            <Header />
            <title>{title}</title>
            <main>
                <div className="container">{children}</div>
            </main>
            <Footer />
        </>
    )
}

export default Layout