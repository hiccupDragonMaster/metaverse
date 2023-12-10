import axios from "axios"

export const signupApi = async (payload, setIsLoading) => {
  try {
    setIsLoading(true)
    const res = await axios.post("/rest-auth/registration/", payload)
    setIsLoading(false)
    return res?.data
  } catch (error) {
    setIsLoading(false)
    // console.log(JSON.stringify(error?.message, null, 2));
    // return error?.response?.status;
    return error?.message
  }
}
