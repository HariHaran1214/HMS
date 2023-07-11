import "hardhat/console.sol";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HMS", function () {
  let hms;

  beforeEach(async function () {
    const HMS = await ethers.getContractFactory("HMS");
    hms = await HMS.deploy();
    await hms.deployed();
  });

  describe("RegisterIp1", function () {
    it("should register an in-patient", async function () {
      await hms.RegisterIp1(
        1,
        "John Doe",
        "Male",
        "123 Main St",
        5551234,
        "johndoe@example.com",
        1,
        "Doctor's note",
        "Private",
        1
      );

      const patient = await hms.ViewIp("johndoe@example.com");

      expect(patient.fullname).to.equal("John Doe");
      expect(patient.gender).to.equal("Male");
      expect(patient.Address).to.equal("123 Main St");
      expect(patient.phone).to.equal(5551234);
      expect(patient.docid).to.equal(1);
      expect(patient.docnote).to.equal("Doctor's note");
      expect(patient.wardtype).to.equal("Private");
      expect(patient.wardno).to.equal(1);
    });
  });

  describe("RegisterIp2", function () {
    it("should register additional in-patient information", async function () {
      await hms.RegisterIp1(
        1,
        "John Doe",
        "Male",
        "123 Main St",
        5551234,
        "johndoe@example.com",
        1,
        "Doctor's note",
        "Private",
        1
      );

      await hms.RegisterIp2(
        "johndoe@example.com",
        5,
        "2022-01-01",
        "2022-01-06",
        "Lab A",
        "Test results",
        "Prescription"
      );

      const patient = await hms.ViewIp("johndoe@example.com");

      expect(patient.noofadmitteddays).to.equal(5);
      expect(patient.dateofadmitted).to.equal("2022-01-01");
      expect(patient.dateofdischarge).to.equal("2022-01-06");
      expect(patient.labname).to.equal("Lab A");
      expect(patient.testresults).to.equal("Test results");
      expect(patient.prescription).to.equal("Prescription");
    });
  });
});
