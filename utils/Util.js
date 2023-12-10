import moment from "moment"

function convertToNumber(item) {
  if (item === null || item === undefined) {
    return 0
  }
  const number = Number(item)
  if (number === NaN) {
    return 0
  }
  return number
}

export const parseJSON = (opts, defaults) => {
  if (opts !== null && typeof opts === "object") {
    return opts
  }
  defaults = defaults || null
  try {
    defaults = JSON.parse(opts)
  } catch (e) {}
  return defaults
}

export const nowCustom = () => {
  return Date.now()
}

const Util = {
  convertToNumber
}

export const validateEmail = mail => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true
  }
  return false
}

export const formatTime = ({
  time = moment().valueOf(),
  currentFormat = "",
  targetFormat = "DD-MM-YYYY"
}) => {
  return currentFormat
    ? moment(time, currentFormat).format(targetFormat)
    : moment(time).format(targetFormat)
}

export default Util
