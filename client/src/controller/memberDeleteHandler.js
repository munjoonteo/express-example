const MemberDeleteHandler = (id) => {
  const refreshPage = () => window.location = "/";
    const data = { id: id };
    console.log("Deleted something")
    fetch("http://localhost:8000/member", {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify(data), 
    }).catch(err => {
      console.log(err);
    }); 
    
    refreshPage();
}

export default MemberDeleteHandler;