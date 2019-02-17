const length = 100
const createData = () => {
  const obj = {}

  for (let index = 0; index < length; index++) {
    obj[`amount-${index}`] = { id: `amount-${index}`, amount: 0 }
  }

  return obj
}

export default createData
