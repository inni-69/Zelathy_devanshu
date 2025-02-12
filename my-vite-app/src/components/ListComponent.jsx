import { CiGlobe } from "react-icons/ci";
import { extractTimezoneText } from "../utils/helper";
import { BsThreeDots } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { MdContentCopy, MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ListComponent = ({ availibilty, deleteItem, toggleDefault, duplicateAvailability }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => navigate(`${availibilty.id}`)}
    >
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <span className="text-gray-900 dark:text-white font-semibold text-xl">{availibilty.name}</span>
            {availibilty.isDefault && (
              <span className="bg-green-500 text-white text-sm font-medium px-2 py-1 rounded-md">
                Default
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-md">{availibilty?.message}</p>
          <p className="flex items-center text-gray-600 dark:text-gray-400 text-md">
            <CiGlobe className="mr-2" /> {extractTimezoneText(availibilty.timezone)}
          </p>
        </div>

        {/* Dropdown Menu */}
        <div className="relative">
          <details className="dropdown dropdown-end z-10" onClick={(e) => e.stopPropagation()}>
            <summary className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <BsThreeDots className="text-xl text-gray-600 dark:text-gray-400" />
            </summary>
            <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-200 dark:border-gray-700">
              {!availibilty.isDefault && (
                <li onClick={() => toggleDefault(availibilty.id)} className="p-3 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  <FaRegStar className="text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">Set as Default</span>
                </li>
              )}
              <li onClick={() => duplicateAvailability(availibilty.id)} className="p-3 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                <MdContentCopy className="text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">Duplicate</span>
              </li>
              <li onClick={() => deleteItem(availibilty.id)} className="p-3 flex items-center space-x-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                <MdDeleteOutline />
                <span>Delete</span>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default ListComponent;
