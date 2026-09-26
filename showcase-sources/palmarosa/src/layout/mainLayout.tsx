// src/layout/MainLayout.tsx
import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="layout-wrapper">
            <Navbar />
            <div className="layout-content">{children}</div>
            <Footer />
        </div>
    );
};

export default MainLayout;
