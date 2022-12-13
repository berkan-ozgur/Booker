import { useState } from "react";
import Menu from "./Menu";
import {
    FaBars,
    FaUserPlus,
    FaSignInAlt,
    FaChevronLeft,
    FaChevronRight
} from "react-icons/fa";
import Register from "./SideBarRegister";
import Login from "./SideBarLogin";

const tabs = [
    {
        text: "menu",
        icon: <FaBars />,
        content: <Menu />
    },
    {
        text: "login",
        icon: <FaSignInAlt />,
        content: <Login />
    },
    {
        text: "register",
        icon: <FaUserPlus />,
        content: <Register />
    }
];

const NavHeader = ({ activeTab, onTabClicked, onSidebarActived }: any) => {
    return (
        <>
            <div className="sidebar__header">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => {
                            onTabClicked(index);
                            onSidebarActived();
                        }}
                        className={`sidebar__header-item ${activeTab === index ? "active" : ""
                            }`}
                    >
                        {tab.icon}
                    </button>
                ))}

                <div
                    className="underline"
                    style={{ translate: `${activeTab * 100}%` }}
                />
            </div>
        </>
    );
};

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [sidebarIsActive, setSidebarIsActive] = useState(false);

    const handleTabClicked = (tab: any) => {
        setActiveTab(tab);
    };

    const handleSidebarActive = () => {
        setSidebarIsActive(true);
    };

    return (
        <div className={`sidebar ${sidebarIsActive ? "active" : ""}`}>
            <div
                className="sidebar__icon"
                onClick={() => setSidebarIsActive(!sidebarIsActive)}
            >
                {sidebarIsActive ? <FaChevronLeft /> : <FaChevronRight />}
            </div>
            <NavHeader
                activeTab={activeTab}
                onTabClicked={handleTabClicked}
                onSidebarActived={handleSidebarActive}
            />
            <div className="sidebar__tab">
                <div
                    className="sidebar__tab-wrapper"
                    style={{
                        translate: `-${activeTab === 0 ? 0 : (activeTab / tabs.length) * 100
                            }%`
                    }}
                >
                    {tabs.map((tab, index) => (
                        <div className="sidebar__tab-content" key={index}>
                            {activeTab === index && <div>{tab.content}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
