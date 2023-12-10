import axios from "axios"
import { showToast } from "../../utils/ToastUtil"

export const logoutApi = async payload => {
  try {
    console.log(payload)
    const res = await axios.post("/rest-auth/login/", payload)

    return res?.data
  } catch (error) {
    // console.log(JSON.stringify(error, null, 2))
    // return error?.response?.status;
    return error?.message
  }
}

export const uploadPhoto = async (id, token, res, setFile) => {
  let data = new FormData()
  if (res?.assets?.[0]?.uri) {
    data.append("image", {
      uri: res?.assets?.[0]?.uri,
      name: res?.assets?.[0]?.fileName,
      type: res?.assets?.[0]?.type
    })
  }
  const config = {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type":
        "multipart/form-data; boundary=6ff46e0b6b5148d984f148b6542e5a5d",
      Authorization: `Token ${token}`
    },
    body: data
  }

  fetch(`https://silent-moon-34565.botics.co/api/v1/profile/${id}/`, config)
    .then(response => response.text())
    .then(result => {
      showToast("Upload successfully.", "green", 2, -1)
      setFile(JSON.parse(result))
    })
    .catch(error => console.log("error", error))
}
