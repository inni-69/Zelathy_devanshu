import ListComponent from "./ListComponent";

const MyAvailability = ({ data, deleteItem, toggleDefault, duplicateAvailability }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Availability</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((a) => (
          <ListComponent
            deleteItem={deleteItem}
            key={a.id}
            availibilty={a}
            toggleDefault={toggleDefault}
            duplicateAvailability={duplicateAvailability}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAvailability;
