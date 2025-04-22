import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
    return (
        <>
            <center>
                <form>
                   <table>
                       <tr>
                           <th colspan='3' > <h1>School Admission Form</h1></th>
                       </tr>
                       <tr>
                           <td>Student's Name*</td>
                           <td><input placeholder='First' required /></td>
                           <td><input placeholder='Last' required/></td>
                       </tr>
                       <tr>
                           <td>Class you want to apply for*</td>
                           <td colspan='2'><input required/></td>
                       </tr>
                       <tr>
                           <td>Student's DoB*</td>
                           <td colspan='2'><input type="date" required/></td>
                       </tr>
                       <tr>
                           <td>Parent/Guardian Name*</td>
                           <td><input placeholder='First' required /></td>
                           <td><input placeholder='Last' required/></td>
                       </tr>
                       <tr>
                           <td>Current Address</td>
                           <td colspan='2'><input type="text"  placeholder='StreetAddress' required/></td>
                       </tr>
                       <tr>
                           <td> </td>
                           <td colspan='2'><input type="text"  placeholder='Street Address Line 2'/></td>
                       </tr>
                       <tr>
                           <td> </td>
                           <td><input type="text"  placeholder='City' required/></td>
                           <td><input type="text"  placeholder='Region' required/></td>
                       </tr>
                       <tr>
                           <td> </td>
                           <td ><input type="text"  placeholder='Postal/Zip Code' required/></td>
                           <td ><input type="text"  placeholder='Country' required/></td>
                       </tr>
                       <tr>
                           <td>Phone*</td>
                           <td colspan='2'><input type="tel"  placeholder='620700824' required/></td>
                       </tr>
                       <tr>
                           <td>Email*</td>
                           <td colspan='2'><input type="email" required/></td>
                       </tr>
                   </table>
                </form>
            </center>
        </>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(
    <App />
);