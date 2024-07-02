import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
// import { BiLockOpen } from "react-icons/bi";
import { FaAngleLeft } from "react-icons/fa6";
// import { changePassword } from "../../apis/services/authService";
// import { addData } from "../../reduxStore/reducers/UsersReducer";
// import Cookies from "js-cookie";
// import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import UseFormHandler from "@/app/hooks/useFormHandler";
import AppInput from "../../organisms/AppInput";

const ChangePassword = ({ goBack }) => {
  const [disable, setDisabled] = useState(true)
  const [formError, setFormError] = useState("")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [confirmNewPassword, setConfirmNewPassword] = useState(false);
  const dispatch = useDispatch()
  const toggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPassword = () => {
    setConfirmNewPassword(!confirmNewPassword);
  };



  const passwordData = UseFormHandler({
    required: {
      current_password: "Please enter your password",
      password: "Please enter your new password",
      password_confirmation: "Please enter confirmation password",
    },
    initialValues: {
      current_password: "",
      password: "",
      password_confirmation: ""
    },
    onSubmit: async (value) => {
      setDisabled(true)
      // const { status, data } = await changePassword(value).catch(err => console.log(err));
      // if (status) {
      //   setFormError("")
      //   dispatch(addData(data))
      //   Cookies.set(data.data.api_token)
      //   goBack()
      //   toast.success(data.message);
      //   document.getElementsByTagName("input")[0].value = ""
      //   document.getElementsByTagName("input")[1].value = ""
      //   document.getElementsByTagName("input")[2].value = ""
      // }else{
      //   setFormError(data.message)
      // }
    }
  })


  return (
    <section className="flex flex-col h-full">
      <div className="text-center dark:text-white-1 md:hidden py-4 relative">
        <div onClick={() => goBack()} className="absolute p-2 top-3 cursor-pointer"><FaAngleLeft /></div>
        <div className="">Change Password</div>
      </div>
      <div className="hidden md:block dark:border-gray-500 border-[#CED2DA] border-b pb-4 mb-4">
        <span className="text-[18px] dark:text-white-1 font-semibold">Change Password</span>
        {/* <p className="text-[14px] text-[#344051] mt-1">
          Conveniently change password
        </p> */}
      </div>
      <div className="text-red-400 px-4 md:px-0 ">{formError}</div>
      <div className="px-4 space-y-6 pt-5 flex-grow md:px-0 md:w-[65%]">
        <AppInput type={"password"} label={"Current Password"} required name={"current_password"} />
        <AppInput type={"password"} label={"New Password"} required name={"new_password"} />
        <AppInput type={"password"} label={"Comfirm Password"} required name={"comfirm_password"} />
      </div>
      <div className="flex px-4 md:px-0 flex-col md:flex-row items-center gap-4 mt-6">
        <button disabled={disable} onClick={() => passwordData.submit()} className="bg-[#0095BE] disabled:bg-gray-200 dark:disabled:bg-gray-700 dark:disabled:text-gray-600  w-full md:w-auto py-3 px-5 font-semibold text-[#fff] rounded-lg">
          Save
        </button>
        <button className="font-semibold w-full md:w-auto text-[#344051]">Cancel</button>
      </div>
    </section>
  );
};

export default ChangePassword;
