function HistoryChips({ history, setQuery, searchUser }) {
  return (
    
    <div>
        <div className="gap-2 flex flex-col max-w-md mb-4">
            <p className="text-slate-500 text-xs">Pencarian terakhir</p>
            <div className="gap-2 flex flex-wrap mb-4">
                {history.map((item) => (
                    <button
                        key={item}
                        onClick={() => {
                            setQuery(item);
                            searchUser(item);
                        }}
                        className="rounded-lg px-3 py-1 bg-emerald-500 hover:bg-emerald-600 cursor-pointer active:scale-95 transition-all duration-150"
                    >
                        {item}
                    </button>
                ))}

            </div>
        </div>
    </div>

  );
}

export default HistoryChips;