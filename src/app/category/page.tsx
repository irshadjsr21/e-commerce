import { ProtectedRoute } from "../_components";
import Category from "./_componenets/Category";

export default function CategoryPage() {
  return (
    <ProtectedRoute type="login">
      <Category />
    </ProtectedRoute>
  );
}
