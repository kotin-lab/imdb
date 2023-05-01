import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  let genre = searchParams.genre || 'fetchTranding';
  genre = genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week';
  const apiUrl = `https://api.themoviedb.org/3/${genre}?api_key=a${API_KEY}&language=en-US&page=1`;
  
  const res = await fetch(apiUrl, {
    next: {
      revalidate: 10000
    }
  });

  if (!res.ok) {
    // This will be caught by the error page 
    // and passed to the page as props
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const results = data.results;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Results results={results} />
    </main>
  )
}
