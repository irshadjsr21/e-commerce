import { ProtectedRoute, Signup } from "./_components";

export default function Home() {
  return (
    <ProtectedRoute type="guest">
      <Signup />
    </ProtectedRoute>
  );
}
