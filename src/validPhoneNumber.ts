export function validPhoneNumber(phoneNumber: string) {
  return phoneNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{4})$/) ? true : false
}
