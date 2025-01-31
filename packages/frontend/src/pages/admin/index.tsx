import React from "react";
import Container from "../../components/ui/Container";
import Underliner from "../../components/ui/Underliner";
import CategoryForm from "./CategoryForm";
import CarForm from "./CarForm";

function AdminPage() {
  return (
    <Container>
      <div className="py-4">
        <h2 className="text-center">Admin Dashboard</h2>
        <Underliner />
      </div>
      <div>
        <h4 className="py-3">Add Category</h4>
        <CategoryForm />
        <h4 className="py-3">Add Car</h4>
        <CarForm />
      </div>
    </Container>
  );
}

export default AdminPage;
