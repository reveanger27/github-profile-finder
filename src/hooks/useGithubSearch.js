import { useState } from "react";

export function useGithubSearch() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [history, setHistory] = useState([]);
    const [error, setError] = useState("");
    const [isClosing, setIsClosing] = useState(false);
    const [repos, setRepos] = useState([]);

    const searchUser = async (username) => {
        if(!username) return;
        setLoading(true);
        setError("");
        try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        if(data.message === "Not Found") {
            setError("User tidak ditemukan!");
            setUser(null);
        } else {
            setUser(data);
            
            const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
            const reposData = await reposResponse.json();
            setRepos(reposData);

            setHistory([username, ...history.filter(h => h !== username)].slice(0,5));

        };
        } catch (err) {
        setError("Terjadi kesalahan, cek koneksi internet anda!");
        } finally {
        setLoading(false);
        }
    };  

    const resetSearch = (callback) => {
        if(user) {
        setIsClosing(true);
        setTimeout(() => {
            setError("");
            setUser(null);
            setIsClosing(false);
            setRepos([]);
            callback(); // manggil fungsi yang dikirim dari App.jsx
        }, 300);
        }
    };
    
    return {
        user,
        loading,
        history,
        error,
        isClosing,
        searchUser,
        resetSearch,
        repos,
    };

}