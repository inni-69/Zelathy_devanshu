import ListComponent from "./ListComponent";

const MyAvailibility = ({
  data,
  deleteItem,
  toggleDefault,
  duplicateAvailability,
}) => {

  return (
    <div className="mt-10">
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg">
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

export default MyAvailibility;
