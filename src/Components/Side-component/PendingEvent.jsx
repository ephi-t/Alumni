import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { CiSearch } from "react-icons/ci";

const PendingEvent = () => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const data = [
    {
      id: 1,
      title: "Annual Meeting",
      time: "2024-10-15 10:00 AM",
      location: "New York City",
    },
    {
      id: 2,
      title: "Charity Run",
      time: "2024-11-01 8:00 AM",
      location: "Addis Ababa",
    },
    {
      id: 3,
      title: "Tech Conference",
      time: "2024-12-05 9:30 AM",
      location: "Bahir Dar",
    },
  ];

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="flex gap-2">
        <Button
          label="Verify"
          className="p-button-success bg-teal-500 p-2 text-white"
        />
        <Button label="Decline" className=" bg-red-500 p-2 text-white" />
        <Button
          label="View"
          className=" bg-blue-500 p-2 text-white"
          onClick={() => handleView(rowData)}
        />
      </div>
    );
  };

  const handleView = (rowData) => {
    // Implement navigation to the detail component with rowData
    console.log("View details for:", rowData);
    // You can use React Router to navigate to the detail page
    // navigate(`/event-details/${rowData.id}`);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-6 ">Pending Event</h2>

      <div className="relative mb-4 w-[25%]">
        <InputText
          placeholder="Search Events..."
          onInput={(e) => {
            setFilters({
              ...filters,
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            });
          }}
          className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
        />
        <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
          <CiSearch />
        </span>
      </div>

      <DataTable
        className="rounded-lg bg-cyan-400"
        value={data}
        filters={filters}
        paginator
        rows={1}
        rowsPerPageOptions={[5, 10, 20]}
      >
        <Column field="id" header="ID" sortable />
        <Column field="title" header="Event Title" sortable />
        <Column field="time" header="Event Time" sortable />
        <Column field="location" header="Event Location" sortable />
        <Column body={actionBodyTemplate} header="Actions" />
      </DataTable>
    </div>
  );
};

export default PendingEvent;

// import React, { useState, useEffect } from "react";
// import { DataTable } from "primereact/datatable";
// import { Column } from "primereact/column";
// import { InputText } from "primereact/inputtext";
// import { Button } from "primereact/button";
// import { FilterMatchMode } from "primereact/api";
// import { CiSearch } from "react-icons/ci";
// import { useNavigate } from "react-router-dom"; // for navigation
// import axios from "axios"; // to make API requests

// const PendingEvent = () => {
//   const [filters, setFilters] = useState({
//     global: { value: null, matchMode: FilterMatchMode.CONTAINS },
//   });

//   // State for storing pending events fetched from the API
//   const [pendingEvents, setPendingEvents] = useState([]);
//   const [loading, setLoading] = useState(true); // for loading state
//   const navigate = useNavigate(); // for programmatic navigation

//   // Fetch pending events from the API when the component mounts
//   useEffect(() => {
//     const fetchPendingEvents = async () => {
//       try {
//         const response = await axios.get(
//           "https://your-api-endpoint.com/pending-events"
//         );
//         setPendingEvents(response.data); // assuming the API returns an array of events
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching pending events:", error);
//         setLoading(false);
//       }
//     };

//     fetchPendingEvents();
//   }, []); // empty dependency array ensures this runs only once after the component mounts

//   // Handle event verification
//   const handleVerify = async (rowData) => {
//     try {
//       // Make API request to verify the event
//       await axios.put(
//         `https://your-api-endpoint.com/events/${rowData.id}/verify`
//       );

//       // Remove the event from the list after verification
//       const updatedEvents = pendingEvents.filter(
//         (event) => event.id !== rowData.id
//       );
//       setPendingEvents(updatedEvents);

//       console.log("Event verified:", rowData);
//     } catch (error) {
//       console.error("Error verifying the event:", error);
//     }
//   };

//   // Handle event decline
//   const handleDecline = async (rowData) => {
//     try {
//       // Make API request to decline the event
//       await axios.delete(`https://your-api-endpoint.com/events/${rowData.id}`);

//       // Remove the event from the list after deletion
//       const updatedEvents = pendingEvents.filter(
//         (event) => event.id !== rowData.id
//       );
//       setPendingEvents(updatedEvents);

//       console.log("Event declined:", rowData);
//     } catch (error) {
//       console.error("Error declining the event:", error);
//     }
//   };

//   // Handle view event details
//   const handleView = (rowData) => {
//     // Navigate to event details page (replace `/event-details/${rowData.id}` with the actual route)
//     navigate(`/event-details/${rowData.id}`);
//   };

//   const actionBodyTemplate = (rowData) => {
//     return (
//       <div className="flex gap-2">
//         <Button
//           label="Verify"
//           className="p-button-success bg-teal-500 p-2 text-white"
//           onClick={() => handleVerify(rowData)}
//         />
//         <Button
//           label="Decline"
//           className="bg-red-500 p-2 text-white"
//           onClick={() => handleDecline(rowData)}
//         />
//         <Button
//           label="View"
//           className="bg-blue-500 p-2 text-white"
//           onClick={() => handleView(rowData)}
//         />
//       </div>
//     );
//   };

//   if (loading) {
//     return <p>Loading pending events...</p>; // display a loading message while fetching
//   }

//   return (
//     <div className="w-full">
//       <div className="relative mb-4 w-[25%]">
//         <InputText
//           placeholder="Search Events..."
//           onInput={(e) => {
//             setFilters({
//               ...filters,
//               global: {
//                 value: e.target.value,
//                 matchMode: FilterMatchMode.CONTAINS,
//               },
//             });
//           }}
//           className="p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
//         />
//         <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
//           <CiSearch />
//         </span>
//       </div>

//       <DataTable
//         value={pendingEvents}
//         filters={filters}
//         paginator
//         rows={5}
//         rowsPerPageOptions={[5, 10, 20]}
//         className="rounded-lg bg-cyan-400"
//       >
//         <Column field="id" header="ID" sortable />
//         <Column field="title" header="Event Title" sortable />
//         <Column field="time" header="Event Time" sortable />
//         <Column field="location" header="Event Location" sortable />
//         <Column body={actionBodyTemplate} header="Actions" />
//       </DataTable>
//     </div>
//   );
// };

// export default PendingEvent;
