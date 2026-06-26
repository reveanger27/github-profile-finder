function SkeletonCard () {
    return (
        <div className="bg-slate-800 border border-emerald-900 flex flex-col gap-3 px-4 py-2 mb-4 rounded-2xl w-full max-w-md items-center shadow-lg shadow-emerald-900/30">
            <div className="w-20 h-20 rounded-full bg-slate-700 animate-pulse mt-4" />
            <div className="h-4 w-32 rounded bg-slate-700 animate-pulse" />
            <div className="h-2 w-25 rounded bg-slate-700 animate-pulse"/>
            <div className="h-2 w-25 rounded bg-slate-400 text-center animate-pulse" />
            <div className="h-1 w-20 rounded bg-slate-500 animate-pulse" />
            <div className="h-1 w-20 rounded bg-slate-700 text-center animate-pulse"/>

            <div className="flex gap-3 w-full mt-2">
                <div className="flex-1 h-14 rounded-2xl bg-slate-700 animate-pulse" />
                <div className="flex-1 h-14 rounded-2xl bg-slate-700 animate-pulse" />
                <div className="flex-1 h-14 rounded-2xl bg-slate-700 animate-pulse" />
            </div>
        </div>

    )
}

export default SkeletonCard;