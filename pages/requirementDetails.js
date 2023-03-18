import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getGridData } from "./api/trustApis";
const RequirementDetails = () => {
  const router = useRouter();
  // grid data api state
  const [gridData, setGridData] = useState([]);
  console.log("only basic info", gridData);
  useEffect(() => {
    getGridData(
      router?.query?.citizenID,
      router?.query?.countryID,
      router?.query?.visaCategoryID,
      setGridData
    );
  }, [
    router?.query?.citizenID,
    router?.query?.countryID,
    router?.query?.visaCategoryID,
  ]);
  const backToHome = () => {
    router.push("/");
  };
  return (
    <div className="requirement-details bg-custom-dark py-5">
      <h4 className="text-center">
        <p className="text-center">
          {" "}
          <strong>
            {router.query?.countryName} {router.query?.visaCategoryName}
          </strong>{" "}
          visa from <strong>{router.query?.citizenOf}</strong>
        </p>
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
            <div className="p-2">
              <h2 className="text-center shadow-none p-3 bg-light rounded">
                Basic Information
              </h2>
              <h5>
                {gridData[0]?.basic_info?.map((vasicInfo) => (
                  <div key={vasicInfo?.id}>
                    <p>{vasicInfo?.content}</p>
                  </div>
                ))}
              </h5>
              {/*  */}
              {/*  */}
              <h2 className="text-center shadow-none p-3 bg-light rounded">
                Check List
              </h2>
              <h5>
                {gridData[0]?.check_list?.map((checkList) => (
                  <div key={checkList?.id}>
                    <p className="mb-2">
                      <strong>{checkList?.name}</strong>
                    </p>
                    <p>{checkList?.content}</p>
                  </div>
                ))}
              </h5>
              {/*  */}
              {/*  */}
              <h2 className="text-center shadow-none p-3 bg-light rounded">
                Visa FAQ
              </h2>
              <h5>
                {gridData[0]?.visa_faq?.map((visaFaq) => (
                  <div key={visaFaq?.id}>
                    <p className="mb-2">
                      Question: <strong>{visaFaq?.question}</strong>
                    </p>
                    <p>Answer: {visaFaq?.answer}</p>
                  </div>
                ))}
              </h5>
              {/*  */}
              {/*  */}
              <h2 className="text-center shadow-none p-3 bg-light rounded">
                Visa Fee
              </h2>
              <h5>
                {gridData[0]?.visa_fee?.map((visaFee) => (
                  <div key={visaFee?.id} className="border-bottom">
                    <p>
                      <strong>Amount:</strong> {visaFee?.amount}
                    </p>
                    <p>
                      <strong>Person:</strong> {visaFee?.person}
                    </p>
                    <p>
                      <strong>Vat:</strong> {visaFee?.vat}%
                    </p>
                    <p>
                      <strong>Service:</strong> {visaFee?.service?.name} (Fee-{" "}
                      {visaFee?.service?.amount})
                    </p>
                    <p>
                      <strong>Process Time:</strong>{" "}
                      {visaFee?.prcesseTime?.days} days
                    </p>
                  </div>
                ))}
              </h5>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequirementDetails;
