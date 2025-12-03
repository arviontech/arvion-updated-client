'use client';

import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar - Full Height */}
            <Sidebar />

            {/* Main Content Area - Offset by sidebar width */}
            <div className="flex-1 ml-64 flex flex-col">
                {/* Header - Sticky at top of main content area */}
                <DashboardHeader />

                {/* Page Content - Scrollable */}
                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
