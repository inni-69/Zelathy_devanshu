import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [availabilityList, setAvailabilityList] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("dataList"));
    if (savedData) {
      setAvailabilityList(savedData);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto pt-10 px-4">
      {/* Profile Header */}
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center">
        My Profile
      </h1>

      {/* User Information Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          User Information
        </h2>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Name:
            </span>
            <p className="text-gray-900 dark:text-white">Devanshu Saran</p>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Email:
            </span>
            <p className="text-gray-900 dark:text-white">
              sarandevanshu@gmai.com
            </p>
          </div>
          <div className="flex justify-between">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Time Zone:
            </span>
            <p className="text-gray-900 dark:text-white">
              UTC-5 (Eastern Time)
            </p>
          </div>
        </div>
      </div>

      {/* Availability Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
          My Availability Schedules
        </h2>
        <div className="space-y-6">
          {availabilityList.length > 0 ? (
            availabilityList.map((schedule) => (
              <div
                key={schedule.id}
                className="border border-gray-300 dark:border-gray-700 rounded-lg p-5 hover:shadow-md dark:hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-gray-900"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {schedule.name}
                  </h3>
                  {schedule.isDefault && (
                    <span className="ml-2 text-sm bg-blue-500 text-white px-3 py-1 rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {schedule.message}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  <span className="font-semibold">Timezone:</span> {schedule.timezone}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 dark:text-gray-400 text-center">
              No availability schedules found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
