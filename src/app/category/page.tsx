import { ProtectedRoute, Category } from "../_components";

export default function CategoryPage() {
  return (
    <ProtectedRoute type="login">
      <Category />
    </ProtectedRoute>
  );
}
