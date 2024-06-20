export default async function ({ redirect }) {
  let token = sessionStorage.getItem("token");
  console.log("auth called");
  if (!token) {
    return redirect("/login");
  }
}
