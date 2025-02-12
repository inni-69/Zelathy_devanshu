import { useState } from "react";
import { LuCopy } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";

const times = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

const DayAvailability = () => {
  const [fridayEnabled, setFridayEnabled] = useState(false);
  const [saturdayEnabled, setSaturdayEnabled] = useState(false);
  const [fridayStart, setFridayStart] = useState("");
  const [fridayEnd, setFridayEnd] = useState("");
  const [saturdayStart, setSaturdayStart] = useState("");
  const [saturdayEnd, setSaturdayEnd] = useState("");

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-gray-900 dark:to-gray-800">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white text-center mb-6">
        Set Your Availability
      </h2>

      {/* Friday */}
      <div className="card bg-white dark:bg-gray-900 shadow-lg rounded-xl p-4 mb-4 transition-all hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={fridayEnabled}
                onChange={(e) => setFridayEnabled(e.target.checked)}
              />
              <span className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-200">
                Friday
              </span>
            </label>
          </div>
          {fridayEnabled && (
            <div className="flex items-center gap-3">
              <select
                className="select select-bordered select-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                value={fridayStart}
                onChange={(e) => setFridayStart(e.target.value)}
              >
                <option value="">Start Time</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <span className="text-gray-600 dark:text-gray-400">to</span>
              <select
                className="select select-bordered select-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                value={fridayEnd}
                onChange={(e) => setFridayEnd(e.target.value)}
              >
                <option value="">End Time</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <button className="btn btn-sm text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                <LuCopy className="w-4 h-4" />
              </button>
              <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-lg">
                <FaPlus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Saturday */}
      <div className="card bg-white dark:bg-gray-900 shadow-lg rounded-xl p-4 transition-all hover:shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={saturdayEnabled}
                onChange={(e) => setSaturdayEnabled(e.target.checked)}
              />
              <span className="ml-3 text-lg font-medium text-gray-700 dark:text-gray-200">
                Saturday
              </span>
            </label>
          </div>
          {saturdayEnabled && (
            <div className="flex items-center gap-3">
              <select
                className="select select-bordered select-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                value={saturdayStart}
                onChange={(e) => setSaturdayStart(e.target.value)}
              >
                <option value="">Start Time</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <span className="text-gray-600 dark:text-gray-400">to</span>
              <select
                className="select select-bordered select-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white"
                value={saturdayEnd}
                onChange={(e) => setSaturdayEnd(e.target.value)}
              >
                <option value="">End Time</option>
                {times.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <button className="btn btn-sm text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700">
                <LuCopy className="w-4 h-4" />
              </button>
              <button className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600 rounded-lg">
                <FaPlus className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DayAvailability;
