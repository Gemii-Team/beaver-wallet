import { FaUserCircle, FaCog, FaSun, FaMoon } from "react-icons/fa";

interface IAsideProps {
    isDarkMode: boolean;
    setIsDarkMode: (isDarkMode: boolean) => void;
    isAsideExpanded: boolean;
    setIsAsideExpanded: (isAsideExpanded: boolean) => void;
    screenWidth: number;
}

const Sidebar = ({
    isDarkMode,
    setIsDarkMode,
    isAsideExpanded,
    setIsAsideExpanded,
    screenWidth,
}: IAsideProps) => {
    return (
        <aside
            className={`h-full flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white duration-300 ease-in-out ${
                isAsideExpanded || screenWidth >= 768 ? 'w-48 px-6' : 'w-16'
            }`}
            onMouseEnter={() => setIsAsideExpanded(true)}
            onMouseLeave={() => setIsAsideExpanded(false)}
        >
            <div className="h-10 w-full flex items-center justify-start rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
                <FaUserCircle className="h-6 w-6" />
                {(isAsideExpanded || screenWidth >= 768) && (
                    <span className="ml-4 font-medium">Profile</span>
                )}
            </div>

            <div className="h-10 w-full flex items-center justify-start rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
                <FaCog className="h-6 w-6" />
                {(isAsideExpanded || screenWidth >= 768) && (
                    <span className="ml-4 font-medium">Courses</span>
                )}
            </div>

            <div className="h-10 w-full flex items-center justify-start rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
                {isDarkMode ? <FaSun className="h-6 w-6" /> : <FaMoon className="h-6 w-6" />}
                {(isAsideExpanded || screenWidth >= 768) && (
                    <span className="ml-4 font-medium">Theme</span>
                )}
            </div>

            <div className="h-10 w-full flex items-center justify-start rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
                <FaCog className="h-6 w-6" />
                {(isAsideExpanded || screenWidth >= 768) && (
                    <span className="ml-4 font-medium">Configuration</span>
                )}
            </div>
        </aside>
    );
}

export default Sidebar;