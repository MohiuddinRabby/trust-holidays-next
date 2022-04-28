import Axios from "axios";

export const getCountries = async (setter) => {
  try {
    const res = await Axios.get(`http://198.187.30.144/api/Country`);

    if (res.status === 200 && res?.data) {
      const newData = res?.data?.map((item) => {
        return { value: item?.countryID, label: item?.countryName };
      });
      setter(newData);
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const getVisaCategories = async (setter) => {
  try {
    const res = await Axios.get(`http://198.187.30.144/api/VisaCategory`);

    if (res.status === 200 && res?.data) {
      const newData = res?.data?.map((item) => {
        return { value: item?.visaCategoryID, label: item?.categoryName };
      });
      setter(newData);
    }
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
