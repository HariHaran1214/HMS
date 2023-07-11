import Sidebar from "../../../components/panels/Sidebar";
import React from 'react'
import Card from "../../../components/cards/Card";
import AddP from "../../../assets/doctor.png";
import View from "../../../assets/patientrec.png";

function Maindoc() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container h-[90vh] flex justify-center items-center mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
          <Card image={AddP} title='Add Doctor' link='/adddoc' linktext='Register' />
          <Card image={View} title='View Doctor' link='/viewdoc' linktext='View' />
        </div>
      </div>
    </div>
  )
}

export default Maindoc