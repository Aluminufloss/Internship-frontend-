export function checkFormType(formType: string): boolean {
  return formType === "Login" ? true : false;
}

export function getUserFromLocaleStorage(): string {
  console.log(localStorage.getItem("user"));
  return localStorage.getItem("user") ?? "User";
}

export function getAccessTokenFromDB(): string {
  return localStorage.getItem("token") ?? "";
}