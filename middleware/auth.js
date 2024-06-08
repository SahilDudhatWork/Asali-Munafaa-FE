// middleware/auth.js

export default function ({ redirect }) {
  // If the user is not authenticatedlet

  let token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
}
