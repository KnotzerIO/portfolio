import { DragControls, motion } from "framer-motion";


export default function Card({
    children,
    className = "",
    colSpan = 1,
    rowSpan = 1,
    glowColor = "blue",
    delay = 0.2,
    controls,
}) {
    const glowColors = {
        blue: "bg-blue-600/10 group-hover:bg-blue-600/20",
        purple: "bg-purple-600/10 group-hover:bg-purple-600/20",
        green: "bg-green-600/10 group-hover:bg-green-600/20",
        cyan: "bg-cyan-600/10 group-hover:bg-cyan-600/20",
        fuchsia: "bg-fuchsia-600/10 group-hover:bg-fuchsia-600/20",
        pink: "bg-pink-600/10 group-hover:bg-pink-600/20",
        indigo: "bg-indigo-600/10 group-hover:bg-indigo-600/20",
    };

    const colSpanClasses = {
        1: "",
        2: "md:col-span-2",
        3: "md:col-span-3",
        4: "md:col-span-4",
    };

    const rowSpanClasses = {
        1: "",
        2: "md:row-span-2",
    };

    return (
        <motion.div
            className={`
        group relative col-span-1 row-span-1 
        overflow-hidden rounded-3xl border border-white/10 
        bg-black/40 backdrop-blur-xl p-6
        bg-gradient-to-b from-white/10 to-white/5
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_5px_15px_rgba(0,0,0,0.15)]
        hover:bg-black/50 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_20px_rgba(0,0,0,0.2)]
        ${colSpanClasses[colSpan]} ${rowSpanClasses[rowSpan]} ${className}
      `}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay },
                },
            }}
            whileHover={{ scale: 1.02 }}
        >
            <div
                className={`absolute h-20 w-20 rounded-full blur-[30px] transition-colors duration-300 -right-10 -top-10 ${glowColors[glowColor]}`}
            />

            <div
                className={`absolute h-20 w-20 rounded-full blur-[30px] transition-colors duration-300 -left-10 -bottom-10 ${glowColors[glowColor]}`}
            />

            {children}
        </motion.div>
    );
}
