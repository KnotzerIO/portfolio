export default function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden text-white">
            <div>
                {/* Background decorative elements */}
                <div className="absolute top-[12.5%] left-1/4 h-40 w-40 rounded-full border border-white/10 backdrop-blur-sm" />
                <div className="absolute bottom-1/4 right-1/3 h-24 w-24 rounded-full border border-white/10 backdrop-blur-sm" />
                <div className="absolute right-[30%] bottom-1/3 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px] opacity-70" />
                <div className="absolute left-[30%] bottom-[30%] h-96 w-96 rounded-full bg-pink-600/20 blur-[100px] opacity-70" />
                <div className="absolute right-[40%] top-1/3 h-96 w-96 rounded-full bg-cyan-600/20 blur-[100px] opacity-70" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm backdrop-blur-md">
                    My Portfolio
                </div>
                <h1 className="mb-2 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-center">
                    Mark{" "}
                    <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-blue-500 bg-clip-text text-transparent">
                        Knotzer
                    </span>
                </h1>
                <h2 className="mb-4 tracking-tight text-center block text-white/70 mt-0 text-xl sm:text-2xl md:text-3xl font-light">
                    Software Engineer
                </h2>

                {/* Add a tagline with medium emphasis */}
                <p className="max-w-md text-center text-white/60 mb-8 text-base md:text-lg">
                    Building elegant solutions through clean, efficient code
                </p>
            </div>
        </div>
    );
}