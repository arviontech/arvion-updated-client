import OptimizedNavbar from "@/components/shared/OptimizedNavbar";
import Footer from "@/components/shared/Footer";
import { getNavigationData } from '@/services/navigation/NavigationService';


const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    const { services, navItems } = getNavigationData();

    return (
        <>
            <OptimizedNavbar services={services} navItems={navItems} />
            {children}
            <Footer />
        </>
    );
};


export default PublicLayout;