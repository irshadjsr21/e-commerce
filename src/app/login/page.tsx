import { ProtectedRoute } from "../_components";
import Login from "./_components/Login";

export default function LoginPage() {
  return (
    <ProtectedRoute type="guest">
      <Login />
    </ProtectedRoute>
  );
}
