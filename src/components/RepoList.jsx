function RepoList ({repos, darkMode}) {
    return (
        <div className="gap-2 mt-2">
            <p className="text-xs text-slate-500 text-center">Repositories :</p>
            <div className="gap-2 flex flex-wrap w-full max-w-md mt-2">
                {repos.map((repo) => (
                    <a
                        key={repo.id}
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className={`${darkMode ? "bg-slate-700 text-emerald-400 border-slate-600 hover:border-emerald-500 hover:bg-slate-600" : "bg-emerald-300 border-emerald-300 text-slate-600 hover:bg-emerald-400 hover:border-emerald-400"} rounded-lg px-3 py-1 text-sm border transition-all duration-150`}
                    >
                        {repo.name}
                    </a>
                ))}
            </div>
        </div>   
    )
}

export default RepoList;