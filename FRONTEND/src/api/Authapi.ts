import axios from "axios";

const url: string = "http://localhost:2233/api";

export const registerSchool = async (data: any) => {
  try {
    return await axios.post(`${url}/create-school`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const verifySchool = async (schoolID: any) => {
  try {
    return await axios.post(`${url}/verify-school/${schoolID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const loginSchool = async (data: any) => {
  try {
    return await axios.post(`${url}/login-school`, data).then((res) => {
      return res;
    });
  } catch (error) {
    return error;
  }
};
export const viewOne = async (schoolID: any) => {
  try {
    return await axios.get(`${url}/view-one-school/${schoolID}`).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};
export const createSession = async (schoolID: any, data: any) => {
  try {
    return await axios
      .post(`${url}/create-session/${schoolID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const createannouncement = async (schoolID: any, data: any) => {
  try {
    return await axios
      .post(`${url}/create-announcement/${schoolID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const viewallannounce = async (schoolID: any) => {
  try {
    return await axios
      .get(`${url}/view-announcement/${schoolID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const viewasession = async (schoolID: any) => {
  try {
    return await axios
      .get(`${url}/view-one-session/${schoolID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const updateSchoolname = async (schoolID: any, data: any) => {
  try {
    return await axios
      .patch(`${url}/update-schoolname/${schoolID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const updateSchooladdress = async (schoolID: any, data: any) => {
  try {
    return await axios
      .patch(`${url}/update-address/${schoolID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const createClass = async (schoolID: any, data: any) => {
  try {
    return await axios
      .post(`${url}/create-class/${schoolID}`, data)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
export const readClass = async (schoolID: any) => {
  try {
    return await axios
      .get(`${url}/view-schoolclasses/${schoolID}`)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
