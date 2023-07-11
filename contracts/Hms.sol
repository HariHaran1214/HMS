//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract HMS {
    mapping(string => InPatient) inPatient;
    event message(string message);
    struct InPatient{
        string pid;
        int age;
        string fullname;
        string gender;
        string Address;
        int phone;
        string email;
        string docid;
        string docnote;
        string wardtype;
        int wardno;
        int noofadmitteddays;
        string dateofadmitted;
        string dateofdischarge;
        string labname;
        string testresults;
        string prescription;
    }
    InPatient ip;
    uint ipCount = 1;

    mapping(string => OutPatient) outPatient;
    struct OutPatient{
        string pid;
        string fullname;
        int age;
        string gender;
        string Address;
        int phone;
        string email;
        string docid;
        string docnote;
        string prescribtion;
    }
    OutPatient op;
    uint opCount = 1;

    mapping(string => Doctor) doctor;
    struct Doctor{
        string did;
        string fullname;
        int age;
        string gender;
        string Address;
        int phone;
        string email;
        string qualification;
        string speciality;
    }
    Doctor d;
    uint docCount = 1;

    function RegisterIp1(
        string memory _pid,
        string memory _fullname,
        int _age,
        string memory _gender,
        string memory _Address,
        int _phone,
        string memory _email,
        string memory _docid,
        string memory _docnote,
        string memory _wardtype,
        int _wardno
        ) public {
            ip.pid = _pid;
            ip.age = _age;
            ip.fullname = _fullname;
            ip.gender = _gender;
            ip.Address = _Address;
            ip.phone = _phone;
            ip.email = _email;
            ip.docid = _docid;
            ip.docnote = _docnote;
            ip.wardtype = _wardtype;
            ip.wardno = _wardno;

            inPatient[_pid] = ip;
    }

    function RegisterIp2(
        string memory _pid,
        int _noofadmitteddays,
        string memory _dateofadmitted,
        string memory _dateofdischarge,
        string memory _labname,
        string memory _testresults,
        string memory _prescription
        ) public returns(string memory) {
            ip.noofadmitteddays =  _noofadmitteddays;
            ip.dateofadmitted =  _dateofadmitted;
            ip.dateofdischarge = _dateofdischarge;
            ip.labname =  _labname;
            ip.testresults =  _testresults;
            ip.prescription =  _prescription;
            ipCount += 1;

            inPatient[_pid] = ip;
            emit message("Added succesfully");
            return "Added Succesfully";
        }

    function ViewIp(string memory _pid) public view returns(InPatient memory){
        return inPatient[_pid];
    }

    function ipc() public view returns(uint){
        return ipCount;
    }

    function RegisterOp(
        string memory _pid,
        string memory _fullname,
        int _age,
        string memory _gender,
        string memory _Address,
        int _phone,
        string memory _email,
        string memory _docid,
        string memory _docnote,
        string memory _prescription
        ) public {
            op.pid = _pid;
            op.age = _age;
            op.fullname = _fullname;
            op.gender = _gender;
            op.Address = _Address;
            op.phone = _phone;
            op.email = _email;
            op.docid = _docid;
            op.docnote = _docnote;
            op.prescribtion = _prescription;

            outPatient[_pid] = op;
            opCount += 1;
            emit message("Added succesfully");
    }

    function ViewOp(string memory _pid) public view returns(OutPatient memory){
        return outPatient[_pid];
    }

    function opc() public view returns(uint){
        return opCount;
    }

    function RegisterDoc(
        string memory _did,
        string memory _fullname,
        int _age,
        string memory _gender,
        string memory _Address,
        int _phone,
        string memory _email,
        string memory _qualification,
        string memory _speciality
        ) public {
            d.did = _did;
            d.age = _age;
            d.fullname = _fullname;
            d.gender = _gender;
            d.Address = _Address;
            d.phone = _phone;
            d.email = _email;
            d.qualification = _qualification;
            d.speciality = _speciality;

            doctor[_did] = d;
            docCount += 1;
            emit message("Added succesfully");
    }

    function ViewDoc(string memory _did) public view returns(Doctor memory){
        return doctor[_did];
    }

    function docount() public view returns(uint){
        return docCount;
    }
}