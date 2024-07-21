import { ProtectedRoute, Verify } from "../_components";

export default function Home() {
  return (
    <ProtectedRoute type="unverified">
      <Verify />
    </ProtectedRoute>
  );
}
