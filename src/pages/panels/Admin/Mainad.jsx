import Sidebar from "../../../components/panels/Sidebar";
import React from 'react'
import Card from "../../../components/cards/Card";
import AddP from "../../../assets/user.png";
import View from "../../../assets/account.png";

function Mainad() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container h-[90vh] flex justify-center items-center mx-auto mt-12">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1">
          <Card image={AddP} title='Add Admin' link='/addadmin' linktext='Register' />
        </div>
      </div>
    </div>
  )
}

export default Mainad