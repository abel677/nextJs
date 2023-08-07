export const expressionOnlyNumbers = /^[0-9]+$/

export const expressionFormatDateDDMMYYYY = /^\d{2}\/\d{2}\/\d{4}$/

export const expressionNoContentNone = /^(?!none$).*$/

export const expressionNumbersAndLetters = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/

export const expressionPhoneNumberAndCode = /^\+(?:[0-9]●?){6,14}[0-9]$/

export const expressionOnlyNumbersWithTwoDecimals = /^\d+(\.\d{1,2})?$/
