function StatCard ({value, label, darkMode}) {
    return (
        <div className={`flex-1 text-center rounded-2xl py-3 ${darkMode ? "bg-slate-900" : "bg-emerald-500"}`}>
            <p className={`text-xl font-bold ${darkMode ? "text-emerald-500" : "text-slate-100"}`}>{value}</p>
            <p className={`text-xs ${darkMode ? "text-slate-500" : "text-emerald-200"}`}>{label}</p>
        </div>
    )
}

export default StatCard;