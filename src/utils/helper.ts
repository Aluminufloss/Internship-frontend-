export function checkFormType(formType: string): boolean {
  return formType === "Login" ? true : false;
}

export function getUserFromLocaleStorage(): string {
  return localStorage.getItem("user") ?? "User";
}