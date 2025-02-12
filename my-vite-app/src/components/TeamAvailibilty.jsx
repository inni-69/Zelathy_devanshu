const TeamAvailibility = () => {
    const schedules = [
      {
        id: 1,
        name: "Devanshu",
        schedule: "Mon 4:15am - 9:25am Tue 1:30pm - 5:00pm",
        timezone: "Asia/Kolkata"
      },
      {
        id: 2,
        name: "Piyush",
        schedule: "Sat 10:00pm - 2:00am Sun 10:00am - 2:00pm ",
        timezone: "Asia/Kolkata"
      }
    ];
  
    return (
      <div className="space-y-4">
        {schedules.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.schedule}
                </p>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  {item.timezone}
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default TeamAvailibility;