import { Login, ProtectedRoute } from "../_components";

export default function LoginPage() {
  return (
    <ProtectedRoute type="guest">
      <Login />
    </ProtectedRoute>
  );
}
