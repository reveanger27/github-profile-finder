import { useState } from "react";
import { useGithubSearch } from "./hooks/useGithubSearch";
import UserCard from "./components/UserCard";
import HistoryChips from "./components/HistoryChips";
import SearchBar from "./components/SearchBar";
import SkeletonCard from "./components/SkeletonCard";
import RepoList from "./components/RepoList";

function App () {
  const [query, setQuery] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const {
    user,
    loading,
    history,
    error,
    isClosing,
    searchUser,
    resetSearch,
    repos,
  } = useGithubSearch();

  return (
    <div className={`${darkMode ? "bg-gradient-to-br from-slate-950 via-slate-850 to-emerald-900" : "bg-gradient-to-br from-slate-150 via-slate-350 to-emerald-300"} min-h-screen items-center px-6 py-10 flex flex-col`}>
      <div className="items-center justify-between flex w-full max-w-md mb-4">
        <h2 className="font-bold text-2xl tracking-wide text-emerald-400 px-4 py-2 mb-4">Github Profile Finder</h2>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full flex border border-slate-500 hover:border-slate-400 "
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Input n Button*/}
      <SearchBar query={query} setQuery={setQuery} searchUser={searchUser} resetSearch={resetSearch} darkMode={darkMode}/>

      {/* History */}
      {history.length > 0 && <HistoryChips history={history} searchUser={searchUser} setQuery={setQuery} />}
            
      {/* Loading-Error */}
      {loading && <SkeletonCard />}
      {error && <p className="text-red-500">{error}</p>}

      {/* User Card */}
      {user && <UserCard user={user} isClosing={isClosing} darkMode={darkMode} />}

      {/* Repos list */}
      {repos.length > 0 && <RepoList repos={repos} darkMode={darkMode}/>}
    </div>
  )

}

export default App;