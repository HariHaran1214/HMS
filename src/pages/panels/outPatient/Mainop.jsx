import Sidebar from "../../../components/panels/Sidebar";
import React from 'react'
import Card from "../../../components/cards/Card";
import AddP from "../../../assets/examination.png";
import View from "../../../assets/patientrec.png";

function Mainop() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container h-[90vh] flex justify-center items-center mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
          <Card image={AddP} title='Add Out Patient' link='/addop' linktext='Register' />
          <Card image={View} title='View Out Patient' link='/viewop' linktext='View' />
        </div>
      </div>
    </div>
  )
}

export default Mainop