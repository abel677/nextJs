export const getCurrentTimestamp = (): number => {
  const currentDate = new Date()

  return currentDate.getTime() / 1000
}

export const timestampToDate = (timestamp: number): Date => {
  const date = new Date(timestamp * 1000)

  return date
}
