export const normalizePhoneNumber = (phoneNumberString?: string) => {
  if (!phoneNumberString) {
    return "";
  }

  return phoneNumberString
    .replace(/[^\d]/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)/, "$1");
};
