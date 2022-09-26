import React, { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";

const List = () => {
  const url = "http://localhost:8080/fhir/Patient";

  const [patient, setPatient] = useState([]);

  const getData = () => {
    return axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Amrut Sagar </td>
          <td>24</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Vyshnasree </td>
          <td>19</td>
          <td>Female</td>
        </tr>
      </tbody>
    </table>
  );
};

export default List;
