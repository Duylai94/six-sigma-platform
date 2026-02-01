import { CourseSidebar } from "@/components/layout/CourseSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col lg:flex-row">
            {/* Sidebar - Desktop */}
            <CourseSidebar />

            {/* Main Content */}
            <div className="flex-1 lg:max-w-[calc(100vw-18rem)]">
                {children}
            </div>
        </div>
    );
}
