import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [history, setHistory] = useState([]);

  const searchUser = async (username = query) => {
    if (!username) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data.message === "Not Found") {
        setError("Username tidak ditemukan!");
        setUser(null);
      } else {
        setUser(data);
        setHistory([username, ...history.filter(h => h !== username)].slice(0, 5));
      }
    } catch (err) {
      setError("Terjadi kesalahan. Cek koneksi internet kamu!");
    } finally {
      setLoading(false);
    }
  };

  const resetSearch = () => {
    if (user) {
      setIsClosing(true);
      setTimeout(() => {
        setQuery("");
        setUser(null);
        setError("");
        setIsClosing(false);
      }, 300); // sama kayak durasi animasi
    } else {
      setQuery("");
      setError("");
    }
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 flex flex-col items-center py-10 px-4">

      <h2 className="text-2xl font-bold mb-6 text-emerald-400 tracking-wide">
        Search Github Profile
      </h2>

      {/* Search Bar */}
      <div className="flex flex-wrap gap-2 w-full max-w-md mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") searchUser(); }}
          placeholder="Cari profil user..."
          className="flex-1 bg-slate-800 border border-slate-600 text-white placeholder-slate-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <button
          onClick={searchUser}
          disabled={loading}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg hover:bg-emerald-600 font-medium shadow-md shadow-emerald-500/30 active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Cari
        </button>
        <button
          onClick={resetSearch}
          className="bg-slate-700 text-slate-200 px-4 py-2 rounded-lg hover:bg-slate-600 active:scale-95 transition-all duration-150"
        >
          Reset
        </button>
      </div>

      <div>
        {history.length > 0 && (
          <div className="flex flex-col gap-2 w-full max-w-md mb-4">
            <p className="text-slate-400 text-xs">Pencarian terakhir:</p>
            <div className="flex gap-2 flex-wrap">
              {history.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setQuery(item);
                    searchUser(item);
                  }}
                  className="bg-emerald-800 text-white text-sm px-3 py-1 rounded-lg hover:bg-emerald-500 shadow-sm shadow-emerald-400/20 active:scale-95 transition-all duration-150"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Loading & Error */}
      {loading && <p className="text-slate-400">Loading...</p>}
      {error && <p className="text-red-400">{error}</p>}

      {/* User Card */}
      {user && (
        <div className={`${isClosing ? "animate-fadeSlideDown" : "animate-fadeSlideUp"} bg-slate-800 border border-emerald-900 rounded-2xl p-6 w-full max-w-md flex flex-col items-center gap-3 mt-4 shadow-lg shadow-emerald-900/30`}>
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full border-4 border-emerald-500 ring-4 ring-emerald-900"
          />
          {user.name && (
            <h2 className="text-xl font-bold text-white">{user.name}</h2>
          )}

            <h3 className="text-sm font-semibold text-slate-400">{user.login}</h3>

          {user.bio && (
            <p className="text-slate-400 text-sm text-center">{user.bio}</p>
          )}

          {user.location && (
            <p className="text-slate-500 text-sm text-center">📍 {user.location}</p>
          )}

          {user.blog && (
            <a
              href={user.blog}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 text-sm text-center hover:underline"
            >
              {user.blog}
            </a>
          )}

          {/* Stats */}
          <div className="flex gap-3 mt-2 w-full">
            <div className="flex-1 text-center bg-slate-900 rounded-xl py-3">
              <p className="font-bold text-lg text-emerald-400">{user.followers}</p>
              <p className="text-slate-400 text-xs">Followers</p>
            </div>
            <div className="flex-1 text-center bg-slate-900 rounded-xl py-3">
              <p className="font-bold text-lg text-emerald-400">{user.following}</p>
              <p className="text-slate-400 text-xs">Following</p>
            </div>
            <div className="flex-1 text-center bg-slate-900 rounded-xl py-3">
              <p className="font-bold text-lg text-emerald-400">{user.public_repos}</p>
              <p className="text-slate-400 text-xs">Repos</p>
            </div>
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 text-sm font-medium shadow-md shadow-emerald-500/30"
          >
            Lihat Profil GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default App;