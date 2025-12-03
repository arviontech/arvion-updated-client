import Navbar from "@/components/shared/Navbar";


const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};


export default PublicLayout;