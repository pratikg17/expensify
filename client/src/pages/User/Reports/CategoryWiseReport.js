// import React, { useState, useEffect } from "react";
// import DefaultLayout from "../../../components/DefaultLayout";
// import {
//   Typography,
//   Container,
//   Box,
//   TextField,
//   Paper,
//   Button,
// } from "@mui/material";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import Spinner from "../../../components/Spinner";
// import { getCategoryWiseReport } from "../../../redux/actions/reportActions";
// import { useDispatch, useSelector } from "react-redux";
// import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";

// function CategoryWiseReport() {
//     const { categoryWise } = useSelector((state) => state.reportReducer);
//     const [error, setError] = useState("");
//     const dispatch = useDispatch();
//     const { loading } = useSelector((state) => state.alertsReducer);
//     const [expenses, setExpenses] = useState([]);
  
//     const date = new Date(),
//       y = date.getFullYear(),
//       m = date.getMonth();
//     const [firstDay, setFirstDay] = useState(new Date(y, m, 1));
//     const [lastDay, setLastDay] = useState(new Date(y, m + 1, 0));
  
//     const handleDateChange = (name) => (date) => {
//       if (name == "firstDay") {
//         setFirstDay(date);
//       } else {
//         setLastDay(date);
//       }
//     };
  
//     useEffect(() => {
//         const abortController = new AbortController();
//         const signal = abortController.signal;
//         if (categoryWise === null) {
//           let data = { firstDay: firstDay, lastDay: lastDay };
//           dispatch(getCategoryWiseReport(data, signal));
//         } else {
//           setExpenses(categoryWise);
//           console.log("categoryWise", categoryWise);
//         }
//         return function cleanup() {
//           abortController.abort();
//         };
//       }, [categoryWise]);
    
//       const searchClicked = () => {
//         let data = { firstDay: firstDay, lastDay: lastDay };
//         dispatch(getCategoryWiseReport(data));
//       };
    
//       const resetClicked = () => {
//         const date = new Date(),
//           y = date.getFullYear(),
//           m = date.getMonth();
    
//         setFirstDay(new Date(y, m, 1));
//         setLastDay(new Date(y, m + 1, 0));
//         let query = {
//           firstDay: new Date(y, m, 1),
//           lastDay: new Date(y, m + 1, 0),
//         };
//         dispatch(getCategoryWiseReport(query));
//       };
   
//       return (
//         <DefaultLayout>
//           {loading && <Spinner />}
//           <Container maxWidth="100%">
//             <Typography variant="h6" gutterBottom>
//               Category-wise expenditures
//             </Typography>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-around",
//                 p: 1,
//                 m: 1,
//                 bgcolor: "background.paper",
//                 borderRadius: 1,
//               }}
//             >
//               <LocalizationProvider dateAdapter={AdapterDateFns}>
//                 <DatePicker
//                   label="From..."
//                   showTodayButton
//                   value={firstDay}
//                   disableFuture
//                   onChange={handleDateChange("firstDay")}
//                   renderInput={(params) => <TextField {...params} />}
//                 />
//               </LocalizationProvider>
//               <LocalizationProvider dateAdapter={AdapterDateFns}>
//                 <DatePicker
//                   label="To..."
//                   showTodayButton
//                   value={lastDay}
//                   onChange={handleDateChange("lastDay")}
//                   renderInput={(params) => <TextField {...params} />}
//                 />
//               </LocalizationProvider>
//               <Box sx={{ p: 1, m: 2, justifyContent: "space-between" }}>
//                 <Button variant="contained" color="success" onClick={searchClicked}>
//                   FILTER
//                 </Button>
//                 &nbsp;
//                 <Button variant="contained" color="error" onClick={resetClicked}>
//                   RESET
//                 </Button>
//               </Box>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 p: 1,
//                 m: 1,
//                 bgcolor: "background.paper",
//                 borderRadius: 1,
//               }}
//               component={Paper}
//             >
//               <div style={{ width: 550, margin: "auto" }}>
//                 <svg viewBox="0 0 320 320">
//                   <VictoryPie
//                     standalone={false}
//                     data={expenses.monthAVG}
//                     innerRadius={50}
//                     theme={VictoryTheme.material}
//                     labelRadius={({ innerRadius }) => innerRadius + 14}
//                     labelComponent={
//                       <VictoryLabel
//                         angle={0}
//                         style={[
//                           {
//                             fontSize: "11px",
//                             fill: "#0f0f0f",
//                           },
//                           {
//                             fontSize: "10px",
//                             fill: "#013157",
//                           },
//                         ]}
//                         text={({ datum }) => `${datum.x}\n $${datum.y}`}
//                       />
//                     }
//                   />
//                   <VictoryLabel
//                     textAnchor="middle"
//                     style={{ fontSize: 12, fill: "#8b8b8b" }}
//                     x={175}
//                     y={170}
//                     text={`Spent \nper category`}
//                   />
//                 </svg>
//               </div>
//             </Box>
//           </Container>
//         </DefaultLayout>
//       );
//     }  
      
// export default CategoryWiseReport;
