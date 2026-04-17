import { useState, useEffect } from "react";
import apiClient from "../api/apiClient";


export default function ListModules() {
  const [modules, setModules] = useState([]);

  const fetchModules = async()=> {
    try {
      const response = await apiClient.get("/modules");
      setModules(response.data.data);

    } catch (e) {

    }
  }

  useEffect(() => {
    // call the function to fetch modules when the component mounts
    fetchModules();
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-gray-100 center p-24">
        <div>
          <h1 className="text-2xl text-black-600">list of modules</h1>
          <table className="table p-2 border-2 border-white-600 mt-4">
            <thead className="table-header-group border-2"><tr>
              <td className="px-3 font-bold">Module Name</td>
              <td className="px-3 font-bold">Module Code</td>
              <td className="px-3 font-bold">Module Description</td>
              <td className="px-3 font-bold">Module Trainer</td>
              <td className="px-3 font-bold">Created At</td>
              <td className="px-3 font-bold">Updated At</td>
              <td className="px-3 font-bold">Actions</td>
              
              </tr>
            </thead>
            <tbody className="table-bady border
             -2 border-white-600  ">
         
             {modules.map((module) => {
  return (
    <tr key={module.id} className="table-row border-3-bottom border-blue-600">
      <td className="table-cell border-2">{module.moduleName}</td>
      <td className="table-cell border-2">{module.moduleCode}</td>
      <td className="table-cell border-2">{module.moduleDescription}</td>
      <td className="table-cell border-2">{module.moduleTrainer}</td>
      <td className="table-cell border-2">{module.createAt}</td>
      <td className="table-cell border-2">{module.updateAt}</td>
      
    <td>
      <button className="bg-yellow-600 text-white p-2 rounded-sm curson-pointed hover:opacity-80 ">edit</button>
      <button className="bg-red-600 text-white p-2 rounded-sm curson-pointed hover:opacity-80">delete</button>
    </td>
  
      </tr>
  );
})}
           </tbody>
          </table>
         
        </div>
        </div>
  );
}