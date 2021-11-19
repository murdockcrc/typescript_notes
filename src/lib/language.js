// This is a legacy JS File. Needs to be encapsulated with a declaration file
export function emphasizeString(string, magnitude) {
  for (let i = 0; i < magnitude; i++) {
    string += "!"
  }

  return string
}