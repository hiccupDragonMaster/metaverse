import axios from "axios"

export const resetPasswordApi = async email => {
  try {
    const res = await axios.post("/rest-auth/password/reset/", {
      email: email
    })

    return res?.data
  } catch (error) {
    // console.log(JSON.stringify(error, null, 2))

    // return error?.response?.status;
    return error?.message
  }
}
