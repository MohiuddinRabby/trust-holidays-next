import Axios from "axios";
export const getCitizen = async (setter) => {
  try {
    const res = await Axios.get(`http://104.237.6.187/api/v1/visa/citizens/`);

    if (res.status === 200 && res?.data) {
      const newData = res?.data?.map((item) => {
        return { value: item?.id, label: item?.name };
      });
      setter(newData);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getCountries = async (setter) => {
  try {
    const res = await Axios.get(`http://104.237.6.187/api/v1/visa/travels`);

    if (res.status === 200 && res?.data) {
      const newData = res?.data?.map((item) => {
        return { value: item?.id, label: item?.en };
      });
      setter(newData);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getVisaCategories = async (setter) => {
  try {
    const res = await Axios.get(
      `http://104.237.6.187/api/v1/visa/visa-categories/`
    );

    if (res.status === 200 && res?.data) {
      const newData = res?.data?.map((item) => {
        return { value: item?.id, label: item?.name };
      });
      setter(newData);
    }
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
};

export const getGridData = async (countryID, visaCategoryID, setter) => {
  try {
    const res = await Axios.get(
      `http://198.187.30.144/api/VisaInfo/${countryID}/${visaCategoryID}`
    );

    if (res.status === 200 && res?.data) {
      setter(res?.data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

/*
http://104.237.6.187/api/v1/visa/visa-content?citizenCountry_id=1&travelCountry_id=356&visaCategory_id=2
http://104.237.6.187/api/v1/visa/visa-categories/
http://104.237.6.187/api/v1/visa/citizens/
http://104.237.6.187/api/v1/visa/travels
<div dangerouslySetInnerHTML={{ __html: item.content }} />
*/
