import axios from "axios"

export const loginApi = async (payload, setIsLoading) => {
  try {
    setIsLoading(true)
    const res = await axios.post("/rest-auth/login/", payload)
    const data = await getProfileDetails(res?.data?.user?.id)

    const modifiedRes = {
      ...res?.data
      // data
    }

    if (res?.data?.key) {
      setIsLoading(false)
      axios.defaults.headers.common.Authorization = `Token ${res?.data?.key}`
      return res?.data
    }

    // if (res?.status === 200) {
    //   //   axios.defaults.headers.common.Authorization = `Bearer ${res?.data?.token}`

    //   return res?.data
    // }
  } catch (error) {
    setIsLoading(false)
    // console.log(JSON.stringify(error?.response, null, 2))
    // return error?.response?.status;
    // return error?.message
    return error?.response?.data
  }
}

export const getProfileDetails = async id => {
  try {
    const res = await axios.get(`/api/v1/profile/${id}/`)
    return res?.data?.profile
  } catch (error) {
    // return error?.response?.status;
    return error?.message
  }
}
