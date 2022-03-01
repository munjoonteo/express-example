import React from 'react';
import FormInput from './FormInput';
import { useParams } from 'react-router-dom';



const editUserData = (jsonBody) => { 
  fetch("http://localhost:8000/member", {
  method: 'PUT',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },

    body: JSON.stringify({
    id: jsonBody.id,
    name: jsonBody.name,
    discord_tag: jsonBody.discord_tag,
    team: jsonBody.team,
    role: jsonBody.role,
    year: parseInt(jsonBody.year),
  })
  })
}

const MemberEditForm = ( { memberList } ) => {
  const member = memberList[useParams()["id"]];
  const template = (<>
                  <form>
                   <FormInput placeHolder = {member.name}/>
                   <FormInput placeHolder = {member.discord_tag}/>
                   <FormInput placeHolder = {member.team}/>
                   <FormInput placeHolder = {member.role}/>
                   <FormInput placeHolder = {member.year}/>
                  </form>
                 </>);
  return (member ? template : <></>);
}

export default MemberEditForm;