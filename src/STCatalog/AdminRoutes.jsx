import { Routes, Route } from "react-router-dom";

const AdminRoutes = () => (
    <Routes>
        <Route path="countries" element="countries" />
        <Route path="tournaments" element="Tournaments" />
        <Route path="*" element="Admin" />
    </Routes>
);

export default AdminRoutes;