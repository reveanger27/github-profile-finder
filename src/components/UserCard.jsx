import StatCard from "./StatCard";

function UserCard({ user, isClosing, darkMode }) {
  return (
    
        <div className={`${darkMode ? "bg-slate-800 border-emerald-900 shadow-emerald-900/30" : "bg-slate-50 border-slate-300 shadow-slate-900/30"} ${isClosing ? "animate-fadeSlideDown" : "animate-fadeSlideUp"} border flex flex-col gap-3 px-4 py-2 mb-4 rounded-2xl w-full max-w-md items-center shadow-lg`}>
          <img
            src={user.avatar_url}
            alt={user.login}
            className={`rounded-full w-25 h-25 mt-4 border-4 ring-4 ${darkMode ? "border-emerald-500 ring-emerald-900" : "border-slate-500 ring-slate-700"}`}
          />

          {user.name && (
            <h2 className={`font-bold text-xl text-center ${darkMode ? "text-white" : "text-slate-800"}`}>{user.name}</h2>
          )}

          {user.login && (
            <h3 className={`font-semibold text-sm ${darkMode ? "text-slate-400" : "text-slate-500"}`}>{user.login}</h3>
          )}

          {user.bio && (
            <h3 className="text-slate-500 text-center text-sm">{user.bio}</h3>
          )}
          
          {user.location && (
            <h3 className="text-sm text-slate-600">📍{user.location}</h3>
          )}

          {user.blog && (
            <a  
              href={user.blog}
              target="_blank"
              rel="noreferrer"
              className={`${darkMode ? "text-emerald-400" : "text-slate-400"} text-sm text-center hover:underline`}
            >
              {user.blog}
            </a>
          )}

          {/* Stats */}
          <div className="gap-3 flex w-full mt-2">
            <StatCard value={user.followers} label="Follower" darkMode={darkMode} />
            <StatCard value={user.following} label="Following" darkMode={darkMode} />
            <StatCard value={user.public_repos} label="Repos" darkMode={darkMode} />
          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 text-white hover:bg-emerald-600 rounded-2xl px-5 py-2 mt-2 text-sm cursor-pointer active:scale-95 transition-all duration-150 mb-4"
          >
            Lihat profil github
          </a>
        </div>
      

  );
}

export default UserCard;