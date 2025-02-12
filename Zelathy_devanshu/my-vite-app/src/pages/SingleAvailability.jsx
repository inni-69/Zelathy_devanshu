import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { MdDeleteOutline, MdOutlineInfo } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import DayAvailibility from "../components/DayAvailibility";
import Overrides from "../components/Overrides";

const timezoneOptions = [
  "Pacific/Midway -11:00 GMT",
  "Pacific/Pago_Pago -11:00 GMT",
  "Pacific/Honolulu -10:00 GMT",
  "America/Anchorage -9:00 GMT",
  "America/Los_Angeles -8:00 GMT",
  "America/Denver -7:00 GMT",
  "America/Chicago -6:00 GMT",
  "America/New_York -5:00 GMT",
  "Europe/London +0:00 GMT",
  "Asia/Dubai +4:00 GMT",
  "Asia/Kolkata +5:30 GMT",
  "Asia/Tokyo +9:00 GMT",
];

const SingleAvailability = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [availability, setAvailability] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [selectedTimezone, setSelectedTimezone] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("dataList"));
    if (savedData) {
      const item = savedData.find((item) => item.id === id);
      setAvailability(item);
    }
  }, [id]);

  const handleTimezoneChange = (event) => {
    const newTimezone = event.target.value;
    const updatedDataList = dataList.map((item) =>
      item.id === availability.id ? { ...item, timezone: newTimezone } : item
    );
    setDataList(updatedDataList);
    localStorage.setItem("dataList", JSON.stringify(updatedDataList));
    setSelectedTimezone(newTimezone);
    toast.success("Schedule updated successfully");
  };

  const toggleDefault = () => {
    const updatedDataList = dataList.map((item) =>
      item.id === availability?.id
        ? { ...item, isDefault: !item.isDefault }
        : { ...item, isDefault: false }
    );
    setDataList(updatedDataList);
    localStorage.setItem("dataList", JSON.stringify(updatedDataList));
    toast.success("Default status updated!");
  };

  const deleteAvailability = () => {
    const updatedDataList = dataList.filter((item) => item.id !== availability?.id);
    setDataList(updatedDataList);
    localStorage.setItem("dataList", JSON.stringify(updatedDataList));
    toast.success("Availability deleted successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft className="text-2xl" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {availability?.name}
          </h1>
        </div>

        {/* Availability Message */}
        <p className="mt-2 text-gray-600 dark:text-gray-400">{availability?.message}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left Section */}
          <div className="col-span-2 space-y-6">
            {/* Daily Availability */}
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Daily Availability</h2>
              <DayAvailibility />
            </div>

            {/* Overrides */}
            <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Overrides</h2>
              <Overrides availability={availability} />
            </div>
          </div>

          {/* Right Section - Settings */}
          <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-lg shadow">
            {/* Default Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">Set as Default</span>
              <input
                type="checkbox"
                className="toggle"
                defaultChecked={availability?.isDefault}
                onChange={toggleDefault}
              />
            </div>

            <hr className="my-4 border-gray-300 dark:border-gray-700" />

            {/* Timezone Selector */}
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Timezone</h2>
            <select
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              value={selectedTimezone}
              onChange={handleTimezoneChange}
            >
              <option value={availability?.timezone}>{availability?.timezone}</option>
              {timezoneOptions.map((timezone, index) => (
                <option key={index} value={timezone}>
                  {timezone}
                </option>
              ))}
            </select>

            <hr className="my-4 border-gray-300 dark:border-gray-700" />

            {/* Delete Button */}
            <button
              onClick={() => deleteAvailability(availability?.id)}
              className="w-full text-white bg-red-600 hover:bg-red-700 transition p-2 rounded-lg flex items-center justify-center gap-2"
            >
              <MdDeleteOutline className="text-xl" /> Delete Schedule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAvailability;
