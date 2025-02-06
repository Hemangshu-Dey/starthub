import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

const Home = async ({ searchParams }: { searchParams: { query?: string } }) => {
  const query = searchParams.query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Adrian" },
      _id: 1,
      description: "This is the description",
      image:
        "https://images.unsplash.com/photo-1505533321630-975218a5f66f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robot",
      title: "We Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <p className="tag">Pitch, Vote and Grow</p>

        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={index} post={post} />
            ))
          ) : (
            <p className="no-result">No results found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
