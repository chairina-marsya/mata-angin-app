import React, { useContext, useEffect, useState } from "react";
import NavbarTemplate from "../../component/templates/Navbar";
import { GlobalContext } from "../../context/global";


import { buttonGroupData, buttonAdminGroupData, buttonMenteeGroupData, buttonMentorGroupData } from "./formElement";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  const { loginInfo, dataMentor, dataMentee } = useContext(GlobalContext);
  const [buttonGroupUserData, setButtonGroupUserData] = useState(buttonAdminGroupData);
  const [userName, setUserName] = useState('Admin');
  const [userRole, setUserRole] = useState('Admin');

  useEffect(() => {
    if (loginInfo || dataMentor || dataMentee) {
      if (loginInfo.email.includes('mentee') || loginInfo.email.includes('Mentee') || dataMentee.firstName !== ''){
        setButtonGroupUserData(buttonMenteeGroupData)
        setUserRole('Mentee')
        if (dataMentee.firstName !== '') {
          setUserName(dataMentee.firstName)
        } else {
          setUserName('Mentee')
        }
      } else if (loginInfo.email.includes('mentor') || loginInfo.email.includes('Mentor') || dataMentor.firstName !== ''){
        setButtonGroupUserData(buttonMentorGroupData)
        setUserRole('Mentor')
        if (dataMentor.firstName !== '') {
          setUserName(dataMentor.firstName)
        } else {
          setUserName('Mentor')
        }
      } else {
        setButtonGroupUserData(buttonAdminGroupData)
        setUserName('Admin')
        setUserRole('Admin')
      }
    }
  }, [loginInfo, dataMentor, dataMentee]);
  

  const onClick = (id) => {
// 

    switch (id) {
      case "home":
        history.push("/");
        break;
      case "buttonRegistration":
        history.push("/register-mentee");
        break;
      case "buttonRegistMentor":
        history.push("/register-mentor");
        break;
      case "buttonLogin":
        history.push("/login");
        break;
      case "dashboardAdmin":
        history.push("/dashboard-admin");
      break;
      case "courseMentee":
        history.push("/course-mentee");
      break;
      case "courseMentor":
        history.push("/course-mentor");
      break;
      case "menteeList":
        history.push("/mentee-list");
      break;
      case "mentorList":
        history.push("/mentor-list");
      break;
      case "discussion":
        history.push("/discussion");
      break;
      case "feedback":
        history.push("/feedback");
      break;
      case "announcement":
        history.push("/announcement");
      break;
      case "subscription":
        history.push("/subscription");
      break;
      case "userListAdmin":
        history.push("/user-list");
      break;
      case "courseAdmin":
        history.push("/course-admin");
      break;
      case "discussionAdmin":
        history.push("/discussion-admin");
      break;
      case "feedbackAdmin":
        history.push("/feedback-admin");
      break;
      case "subsAdmin":
        history.push("/subscription-admin");
      break;
      case "announAdmin":
        history.push("/announcement-admin");
      break;
      default:
        break;
    }
  };

  return <NavbarTemplate buttonGroupData={buttonGroupData} onClick={onClick} buttonGroupUserData={buttonGroupUserData} userName={userName} role={userRole} />;
}
