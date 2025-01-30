export async function tokenLoader() {
  const token = getAuthToken();

  return token;
}
