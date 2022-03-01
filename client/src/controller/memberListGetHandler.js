import { useEffect } from 'react';
const MemberListGetHandler = ( setMembers ) => { 
    useEffect(() => {
        fetch("http://localhost:8000/members")
        .then(res => res.json())
        .then(data => setMembers(data));
    }, []);
}

export default MemberListGetHandler;