export const getUserDisplayName = user => {
  if (!user) return null
  const { email, phoneNumber, name } = user
  return name || email || phoneNumber || "User"
}
export const getUserAvatar = user => {
  if (!user) return null
  const { profile_image } = user
  return profile_image
}
