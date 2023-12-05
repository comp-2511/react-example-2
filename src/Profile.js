import { useOutletContext, useParams } from "react-router-dom";

function Profile() {
  const { profileID } = useParams();
  const dummy = useOutletContext();
  console.log(dummy);
  return (
    <>
      <h1>Profile for person {profileID}</h1>
      <h4>This is the parameter from context: {dummy}</h4>
    </>
  );
}

export default Profile;
