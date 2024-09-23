// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./Component/Header/Header";
// import Sidebar from "./Component/Sidebar/Sidebar";
// import Dashboard from "./Components/Side-component/Dashboard";

// import UserManagement from "./Components/Side-component/UserManagement";

// import Main from "./Components/ui/Main";

// import AdminProfile from "./Components/Side-component/AdminProfile";

// import CreateEvent from "../Components/Side-component/CreateEvent";
// import CreateJob from "../Components/Side-component/CreateJob";
// import PendingEvent from "../Components/Side-component/PendingEvent";
// import ManageEvent from "../Components/Side-component/ManageEvent";
// import CreateDonation from "../Components/Side-component/CreateDonation";
// import CreateSurvey from "../Components/Side-component/CreateSurvey";

// function App() {
//   const [isSidebarOpen, setisSidebarOpen] = useState(false);

//   const toogleSidebar = () => {
//     setisSidebarOpen(!isSidebarOpen);
//   };
//   return (
//     <>
//       <Router>
//         <div className="font-quickSand">
//           <Header toogleSidebar={toogleSidebar} />
//           <Sidebar isSidebarOpen={isSidebarOpen} />

//           <Main>
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/profile" element={<AdminProfile />} />
//               <Route path="/job/createjob" element={<CreateJob />} />
//               <Route path="/userman" element={<UserManagement />} />
//               <Route path="/event/createevent" element={<CreateEvent />} />
//               <Route path="/event/pendingevent" element={<PendingEvent />} />
//               <Route path="/event/manageevent" element={<ManageEvent />} />
//               <Route path="/survey/createsurvey" element={<CreateSurvey />} />
//               <Route
//                 path="/donations/createdonation"
//                 element={<CreateDonation />}
//               />
//             </Routes>
//           </Main>
//         </div>
//       </Router>
//     </>
//   );
// }

// export default App;

// function App() {
//   const [isSidebarOpen, setisSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setisSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <Router>
//       <div>
//         {/* Landing Page Routes */}
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <NavBar />
//                 <Hero />
//               </>
//             }
//           />
//           <Route path="/createaccount" element={<CreateAccount />} />

//           {/* Dashboard Routes */}
//           <Route
//             path="/dashboard/*"
//             element={
//               <>
//                 <Header toggleSidebar={toggleSidebar} />
//                 <Sidebar isSidebarOpen={isSidebarOpen} />
//                 <Main> {/* Use the Main component here */}
//                   <Routes>
//                     <Route path="/" element={<Dashboard />} />
//                     <Route path="/profile" element={<AdminProfile />} />
//                     <Route path="/job/createjob" element={<CreateJob />} />
//                     <Route path="/event/createevent" element={<CreateEvent />} />
//                     <Route path="/event/pendingevent" element={<PendingEvent />} />
//                     <Route path="/event/manageevent" element={<ManageEvent />} />
//                     <Route path="/survey/createsurvey" element={<CreateSurvey />} />
//                     <Route
//                       path="/donations/createdonation"
//                       element={<CreateDonation />}
//                     />
//                   </Routes>
//                 </Main> {/* Dashboard routes wrapped in Main */}
//               </>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// import React from "react";
// import NavBar from "./Components/NavBar/NavBar";
// import Hero from "./Components/Hero/Hero";
// import Section from "./Components/Section";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CreateAccount from "./Components/CreateAccount";

// const App = () => {
//   return (
//     <div>
//       <Router>
//         <NavBar />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/createaccount" element={<CreateAccount />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;
