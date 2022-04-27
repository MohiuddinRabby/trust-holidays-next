import Axios from "axios";

export const getCountries = async (setter) => {
  try {
    const res = await Axios.get(`http://198.187.30.144/api/Country`);

    if (res.status === 200 && res?.data) {
      //   const newData = res?.data?.data?.map((item) => {
      //     return { value: item?._id, label: item?.division };
      //   });
      setter(newData);
    }
  } catch (error) {
    console.log(error.message);
  }
};
