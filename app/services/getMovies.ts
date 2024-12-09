import type { TimeWidow } from "../types/TimeWidow";

export const getMovies = async (timeWidow: TimeWidow, language: string) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/trending/movie/${timeWidow}?language=${language}`,
		{
			headers: {
				method: "GET",
				Authorization: `Bearer ${process.env.API_KEY}`,
				"Content-Type": "application/json",
			},
		},
	);
	const data = await res.json();
	return data.results;
};
