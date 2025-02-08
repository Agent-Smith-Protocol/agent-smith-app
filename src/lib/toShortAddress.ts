export const toShortAddress = (address: string | undefined, leftChars = 4, rightChars = 4) => {
  if (!address) {
    return ''
    // throw new Error('Invalid address')
  }

  if (leftChars + rightChars >= address.length) {
    return address
  }

  const leftPart = address.substring(0, leftChars)
  const rightPart = address.substring(address.length - rightChars)

  return `${leftPart}...${rightPart}`
}