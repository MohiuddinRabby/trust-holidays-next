import React, { useState } from "react";
import PackageListCards from "../components/PackageListCards";
import packageList from "../public/data/packageList";

const Packages = () => {
  const [packageData, setPackageData] = useState(packageList);
  return (
    <div className="py-5 packages bg-custom-dark">
      <div className="container-fluid">
        <h1 className="styled-header text-white text-center text-spacing-two pb-5">
          Tour Packages
        </h1>
        <div className="row">
          {packageData?.map((items) => (
            <div key={items?.id} className="col-md-3">
              <PackageListCards items={items}></PackageListCards>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
