import React from "react";
import { useParams } from "react-router-dom";

import FormInput from "../components/FormInput";

const MemberEditForm = ({ memberList }) => {
  const member = memberList[useParams()["id"]];
  const template = (
    <>
      <form>
        <FormInput placeHolder={member.name} />
        <FormInput placeHolder={member.discord_tag} />
        <FormInput placeHolder={member.team} />
        <FormInput placeHolder={member.role} />
        <FormInput placeHolder={member.year} />
      </form>
    </>
  );
  return member ? template : <></>;
};

export default MemberEditForm;
