import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    setLoading(true);
    setSuggestions(
      [...Array(20)].map((_, i) => ({
        id: i,
        username: faker.internet.userName(),
        avatar: faker.internet.avatar(),
      }))
    );
    setLoading(false);
  }, []);

  if (!loading) {
    return (
      <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {session && (
          <Story img={session?.user.image} username={session?.user.username} />
        )}

        {suggestions.map((profile) => (
          <Story
            key={profile.id}
            img={profile.avatar}
            username={profile.username}
          />
        ))}
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
}

export default Stories;
