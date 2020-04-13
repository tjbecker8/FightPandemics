import React from "react";
import { Popover, WhiteSpace } from "antd-mobile";
import ProfilePic from "../components/Picture/ProfilePic";
import LinkedinIcon from "../components/Icon/Linkedin-blue";
import TwitterIcon from "../components/Icon/Twitter-blue";
import Menu from "../components/Icon/menu";
import Edit from "../components/Icon/edit";
import Title from "../components/Title/Title";
import styled from "styled-components";
const offerHelpInactive = require("../assets/help-gesture-unselected.svg");
const needHelpInactive = require("../assets/thermometer-unselected.svg");

// dummy data props,context, redux etc
const firstName = "Cees";
const lastName = "Wang";
const about = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit";
const email = "ceeswang@Test.com";
const location = "NY, USA";
const needHelp = true;
const Item = Popover.Item;

const SectionHeader = (props) => (
  <Title
    style={{
      color: "#939393",
      fontWeight: "lighter",
      fontSize: "1.5rem",
      textAlign: "left",
    }}
    {...props}
  />
);
const EditIcon = styled(Edit)`
  color: #425af2;
  align-self: flex-end;
  margin-right: 2rem;
  margin-top: 2rem;
`;
const MenuIcon = styled(Menu)`
  color: #ffffff;
  margin-right: 2rem;
  margin-top: 3rem;
  float: right;
`;
const BackgroundHeader = styled.div`
  height: 23vh;
  left: 0;
  right: 0;
  background-color: #425AF2;
  border-bottom=right-radius: 30px;
  position: relative;
};
`;
const popover = (props) => {
  return (
    <Popover
      mask
      overlay={[
        <Item key="editAccountInfo" value="Edit Account Information">
          Edit Account Information
        </Item>,
        <Item
          key="editProfile"
          value="Edit Profile"
          style={{ whiteSpace: "nowrap" }}
        >
          Edit Profile
        </Item>,
      ]}
      align={{
        overflow: { adjustY: 0, adjustX: 0 },
        offset: [0, 10],
      }}
      onSelect={(opt) =>
        opt.key === "editAccountInfo"
          ? props.history.push("/edit-account")
          : props.history.push("/edit-profile")
      }
    >
      <EditIcon />
    </Popover>
  );
};

function getInitials(firstName, lastName) {
  // function to get the initials given firstname and last name
  return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
}

export const Profile = (props) => {
  // dummy data props,context, redux etc
  return (
    <div style={profile}>
      <BackgroundHeader>
        <MenuIcon />
      </BackgroundHeader>
      <div style={userInfoStyle} className="userInfo">
        {popover(props)}
        <ProfilePic noPic={true} initials={getInitials(firstName, lastName)} />
        <div style={{ color: "#000000", fontSize: "1.5rem" }}>{`${
          firstName + " " + lastName
        }`}</div>
        <div style={{ color: "#77869E", fontSize: "1rem" }}>{email}</div>
        <div style={{ color: "#5A6FF4", fontSize: "1.5rem" }}>{location}</div>
        <div style={iconsContainer}>
          <div style={statusContainer}>
            <img
              style={statusImgStyle}
              src={needHelp ? needHelpInactive : offerHelpInactive}
            />
            <div style={statusTextStyle}>
              {needHelp ? "I need help" : "I want to help"}
            </div>
          </div>
          <div style={{ flex: "1" }}></div>
          <LinkedinIcon style={iconStyle} />
          <TwitterIcon style={iconStyle} />
        </div>
      </div>
      <WhiteSpace />
      <div style={sections}>
        <section>
          <SectionHeader title="About" />
          <WhiteSpace />
          <div style={aboutStyle}> {about}</div>
        </section>
        <WhiteSpace />
        <section>
          <SectionHeader title="My Activity" />
          <WhiteSpace />
        </section>
      </div>
    </div>
  );
};

//styling

const profile = {
  backgroundColor: "#F9F9F9",
  height: "100vh",
  width: "100vw",
  maxWidth: "100%",
  maxHeight: "100%",
  flexDirection: "row",
};

const userInfoStyle = {
  backgroundColor: "#FFFFFF",
  marginTop: "-13vh",
  left: "0",
  right: "0",
  marginLeft: "2.5rem",
  marginRight: "2.5rem",
  borderRadius: "10px",
  position: "relative",
  zIndex: "8",
  filter: "drop-shadow(#00000012 5px 0px 5px)",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
};

const sections = {
  display: "flex",
  marginLeft: "2.5rem",
  marginRight: "2.5rem",
  flexDirection: "column",
};

const aboutStyle = {
  backgroundColor: "#FFFFFF",
  borderRadius: "5px",
};

const initialsStyle = {
  marginBottom: "1rem",
  borderRadius: "50%",
  border: "0.2rem solid #425AF2",
  color: "#425AF2",
  fontSize: "3rem",
  lineHeight: "6rem",
  width: "6rem",
  textAlign: "center",
  backgroundColor: "rgba(66, 90, 245, 0.04)",
};

const iconsContainer = {
  marginTop: "1rem",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-between",
};

const statusContainer = {
  alignSelf: "left",
  display: "flex",
  flexDirection: "column",
  width: "30%",
  border: "0.1rem solid #6C80FF",
  borderRadius: "0.2rem",
  textAlign: "center",
  alignItems: "center",
  marginLeft: "1rem",
  marginBottom: "1rem",
};

const statusImgStyle = {
  marginTop: "1rem",
  marginBottom: "0.5rem",
  width: "35%",
};

const statusTextStyle = {
  fontSize: "0.8rem",
};

const iconStyle = {
  alignSelf: "flex-end",
  width: "10%",
  marginRight: "1rem",
  marginBottom: "1rem",
};
