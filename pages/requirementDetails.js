import React from "react";
import { useRouter } from "next/router";
const RequirementDetails = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="requirement-details bg-custom-dark py-5">
      <h1>This is requirement details {router.query?.citizenOf}</h1>
    </div>
  );
};

export default RequirementDetails;
