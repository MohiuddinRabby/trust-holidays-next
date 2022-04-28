import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getGridData } from "./api/trustApis";
const RequirementDetails = () => {
  const router = useRouter();
  // grid data api state
  const [gridData, setGridData] = useState();
  console.log(gridData);
  useEffect(() => {
    getGridData(
      router?.query?.countryID,
      router?.query?.visaCategoryID,
      setGridData
    );
  }, [router?.query?.countryID, router?.query?.visaCategoryID]);
  const backToHome = () => {
    router.push("/");
  };
  return (
    <div className="requirement-details bg-custom-dark py-5">
      <h4 className="text-center">
        <strong>{router.query?.countryName}</strong> visa from Bangladesh
      </h4>
      <div className="container">
        <div className="row py-2">
          <div className="col-md-12 requirement-bg">
            <h5 className="py-2">
              <strong>{router?.query?.visaCategoryName}</strong> Requirements
            </h5>
            <button
              className="btn custom-primary-btn btn-sm"
              onClick={backToHome}
            >
              see others
            </button>
            <div className="pb-2">
              {gridData?.map((posts) => (
                <li key={posts?.visaInfoID} className="py-2">
                  <strong>{posts?.infoName} :</strong> {posts?.description}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementDetails;
