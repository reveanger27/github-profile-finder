function SearchBar ({query, setQuery, searchUser, resetSearch, darkMode}) {
    
    return (
        
        <div className="gap-2 flex flex-col w-full max-w-md mb-4">
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
                if(e.key === "Enter")
                searchUser(query);
            }}
            placeholder="Cari profile github..."
            className={`border border-slate-400 rounded-lg px-4 py-2 ${darkMode ? "placeholder-slate-400 bg-slate-800 text-white" : "bg-transparent placeholder-slate-500 text-black"} focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            />

            <div className="gap-2 flex mb-4 mt-3">
            <button
                onClick={() => searchUser(query)}
                className="flex-1 rounded-lg bg-emerald-500 px-4 py-2 hover:bg-emerald-600 text-white font-semibold cursor-pointer active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Cari
            </button>
            
            <button
                onClick={() => resetSearch(() => setQuery(""))}
                className="flex-1 rounded-lg bg-slate-600 hover:bg-slate-500 px-4 py-2 text-white font-semibold cursor-pointer active:scale-95 transition-all duration-150"
            >
                Reset
            </button>
            </div>
      </div>

    )
}

export default SearchBar;