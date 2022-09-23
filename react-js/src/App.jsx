import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [stage, setStage] = useState("Account");
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    pass: "",
    confirmPass: "",
    adress: "",
    unit: "",
    country: "america",
    city: "",
    zip: "",
    company: "",
    cellNumber: "",
    sendNotifs: false,
    shareInfo: false,
    notifPref: "",
  });

  function formSubmit(e) {
    event.preventDefault(e);
  }

  const accPage = (
    <div>
      <div className="flex justify-between h-[60px]">
        <div className="flex flex-col">
          <label className="text-[10px]">First Name</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="10"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[10px]">Last Name</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="10"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Username</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="30"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Email Address</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="30"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between h-[60px] mt-[25px]">
          <div className="flex flex-col">
            <label className="text-[10px]">Password *</label>

            <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
              <div className="h-[25px] w-[25px] bg-[#6C757D]" />
              <input
                type="text"
                size="10"
                className="translate-x-[7px] bg-[#E0E0E0] outline-none"
                onChange={(input) =>
                  setInfo((x) => (x.firstName = input.target.value))
                }
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-[10px]">Confirm Password *</label>

            <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
              <div className="h-[25px] w-[25px] bg-[#6C757D]" />
              <input
                type="text"
                size="10"
                className="translate-x-[7px] bg-[#E0E0E0] outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[35px]">
        <div></div>
        <div className="cursor-pointer" onClick={() => setStage("Address")}>
          <span className="pl-[30px] pr-[30px] pt-[10px] pb-[10px] bg-[#6C757D] rounded-lg text-white">
            Next Step <FontAwesomeIcon icon={"arrow-right"} />
          </span>
        </div>
      </div>
    </div>
  );

  const addPage = (
    <div>
      <div className="flex justify-between h-[60px]">
        <div className="flex flex-col">
          <label className="text-[10px]">Address *</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="10"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[10px]">Apartment, Suite, etc.</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="10"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Country *</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/3 items-center p-[10px]">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <select
              id="country"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
              value={info.country}
            >
              <option value="america">America</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">City *</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/3 items-center p-[10px]">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="3"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Zipcode*</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/3 items-center p-[10px]">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="3"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Company</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="30"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Phone Number</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="30"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[35px]">
        <div className="cursor-pointer" onClick={() => setStage("Account")}>
          <span className="pl-[30px] pr-[30px] pt-[10px] pb-[10px] bg-white border-[#6C757D] border-2 text-[#6C757D] rounded-lg text-white">
            <FontAwesomeIcon icon={"arrow-left"} /> Next Step
          </span>
        </div>
        <div className="cursor-pointer" onClick={() => setStage("Preferences")}>
          <span className="pl-[30px] pr-[30px] pt-[10px] pb-[10px] bg-[#6C757D] rounded-lg text-white">
            Next Step <FontAwesomeIcon icon={"arrow-right"} />
          </span>
        </div>
      </div>
    </div>
  );

  const prePage = (
    <div>
      <div className="flex justify-between h-[60px]">
        <div className="flex flex-col">
          <label className="text-[10px]">Address *</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="10"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-[10px]">Apartment, Suite, etc.</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="10"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Country *</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/3 items-center p-[10px]">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <select
              id="country"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
              value={info.country}
            >
              <option value="america">America</option>
              <option value="canada">Canada</option>
              <option value="mexico">Mexico</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">City *</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/3 items-center p-[10px]">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="3"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Zipcode*</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/3 items-center p-[10px]">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="3"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Company</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="30"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col mt-[25px]">
          <label className="text-[10px]">Phone Number</label>

          <div className="flex bg-[#E0E0E0] h-[50px] basis-1/2 items-center p-[10px] w-1/1">
            <div className="h-[25px] w-[25px] bg-[#6C757D]" />
            <input
              type="text"
              size="30"
              className="translate-x-[7px] bg-[#E0E0E0] outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[35px]">
        <div className="cursor-pointer" onClick={() => setStage("Address")}>
          <span className="pl-[30px] pr-[30px] pt-[10px] pb-[10px] bg-white border-[#6C757D] border-2 text-[#6C757D] rounded-lg text-white">
            <FontAwesomeIcon icon={"arrow-left"} /> Next Step
          </span>
        </div>
        <div className="cursor-pointer" onClick={() => setStage("Preferences")}>
          <span className="pl-[30px] pr-[30px] pt-[10px] pb-[10px] bg-[#6C757D] rounded-lg text-white">
            Register
          </span>
        </div>
      </div>
    </div>
  );

  let progressOne = undefined;
  if (stage === "Account") {
    progressOne = (
      <p className="border-2 border-solid border-[#FFC107] bg-white rounded-full pl-[9px] pr-[9px] text-2xl text-[#FFC107]">
        1
      </p>
    );
  } else {
    progressOne = (
      <p className="border-2 border-solid border-black bg-white rounded-full pl-[9px] pr-[9px] text-2xl">
        1
      </p>
    );
  }

  let progressTwo = undefined;
  if (stage === "Address") {
    progressTwo = (
      <p className="border-2 border-solid border-[#FFC107] bg-white rounded-full pl-[9px] pr-[9px] text-2xl text-[#FFC107]">
        2
      </p>
    );
  } else {
    progressTwo = (
      <p className="border-2 border-solid border-black bg-white rounded-full pl-[9px] pr-[9px] text-2xl">
        2
      </p>
    );
  }

  let progressThree = undefined;
  if (stage === "Preferences") {
    progressThree = (
      <p className="border-2 border-solid border-[#FFC107] bg-white rounded-full pl-[9px] pr-[9px] text-2xl text-[#FFC107]">
        3
      </p>
    );
  } else {
    progressThree = (
      <p className="border-2 border-solid border-black bg-white rounded-full pl-[9px] pr-[9px] text-2xl">
        3
      </p>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center bg-[#E5E5E5] h-screen">
      <div className="form bg-[#F2F2F2] w-[450px] h-[602px]">
        <h1 className="pt-[15px] text-[32px] absolute translate-x-[159.5px] font-[600]">
          {stage}
        </h1>

        <div className="bg-white mt-[79px] ml-[10px] mr-[10px] mb-[10px] h-[513px] w-[430px] flex flex-col rounded-lg">
          <div className="mt-[10px] ml-[10px] mr-[10px] bg-[#F8F9FA] w-[410px] h-[76px] flex items-center gap-[22px] pl-[14px] pr-[14px]">
            {progressOne}
            <hr className="bg-[#343A40] w-[111px] h-0.5" />
            {progressTwo}
            <hr className="bg-[#343A40] w-[111px] h-0.5" />
            {progressThree}
          </div>

          <form action="" onSubmit={(e) => formSubmit(e)} className="m-[20px]">
            {stage == "Account" && accPage}
            {stage == "Address" && addPage}
            {stage == "Preferences" && prePage}
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
