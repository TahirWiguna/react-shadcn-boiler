import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

const menu = [
    {
        title: "General",
        items: [
            {
                title: "Dashboard",
                url: "/docs",
            },
            {
                title: "Installation",
                url: "/docs/installation",
            },
            {
                title: "Theming",
                url: "/docs/theming",
            },
            {
                title: "CLI",
                url: "/docs/cli",
            },
            {
                title: "Typography",
                url: "/docs/components/typography",
            },
        ],
    },
    {
        title: "General",
        items: [
            {
                title: "Dashboard",
                url: "/docs",
            },
            {
                title: "Installation",
                url: "/docs/installation",
            },
            {
                title: "Theming",
                url: "/docs/theming",
            },
            {
                title: "CLI",
                url: "/docs/cli",
            },
            {
                title: "Typography",
                url: "/docs/components/typography",
            },
        ],
    },
    {
        title: "General",
        items: [
            {
                title: "Dashboard",
                url: "/docs",
            },
            {
                title: "Installation",
                url: "/docs/installation",
            },
            {
                title: "Theming",
                url: "/docs/theming",
            },
            {
                title: "CLI",
                url: "/docs/cli",
            },
            {
                title: "Typography",
                url: "/docs/components/typography",
            },
        ],
    },
    {
        title: "General",
        items: [
            {
                title: "Dashboard",
                url: "/docs",
            },
            {
                title: "Installation",
                url: "/docs/installation",
            },
            {
                title: "Theming",
                url: "/docs/theming",
            },
            {
                title: "CLI",
                url: "/docs/cli",
            },
            {
                title: "Typography",
                url: "/docs/components/typography",
            },
        ],
    },
];

const Layout = () => {
    return (
        <>
            <div className="relative flex min-h-screen flex-col">
                <Header menu={menu} />
                <div className="flex-1">
                    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                        <Sidebar menu={menu} />
                        <Main />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
