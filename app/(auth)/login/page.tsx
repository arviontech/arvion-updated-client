import LoginForm from '@/components/modules/auth/LoginForm';

export default function LoginPage() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-white">
            {/* Background decorative elements - matching hero section */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
                <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-blue-50/60 rounded-full blur-2xl" />
            </div>

            {/* Login Form Container */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
                <LoginForm />
            </div>
        </div>
    );
}
