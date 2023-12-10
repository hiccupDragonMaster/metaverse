import storeSlices from "./*/*.slice.js"

// Minimal check to see if imported slice has all properties of an actual slice
const isValid = slice => {
  const sliceProps = [
    "actions",
    "caseReducers",
    "name",
    "reducer",
    "getInitialState"
  ]
  // console.log("isValidSlide=>", slice)
  // console.log(
  //   "isValidSlide=>1",
  //   Object.keys(slice).every(prop => sliceProps.includes(prop))
  // )
  return Object.keys(slice).every(prop => sliceProps.includes(prop))
}

export const slices = storeSlices
  .filter(slice => slice.value && isValid(slice.value))
  .map(slice => slice.value)

export const connectors = slices.reduce((acc, slice) => {
  acc[slice.name] = slice.reducer
  return acc
}, {})
