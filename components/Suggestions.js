import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setSuggestions(
      [...Array(5)].map((_, i) => ({
        id: i,
        avatar: faker.internet.avatar(),
        username: faker.internet.userName(),
        company: faker.company.companyName(),
      }))
    );
    setLoading(false);
  }, []);

  if (!loading) {
    return (
      <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
          <h3 className="text-sm font-bold text-gray-400">
            Suggestions for you
          </h3>
          <button className="text-gray-600 font-semibold">See all</button>
        </div>

        {suggestions.map((profile) => (
          <div
            key={profile.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              src={profile.avatar}
              alt=""
              className="w-10 h-10 rounded-full border p-[2px]"
            />

            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm hover:underline cursor-pointer">
                {profile.username}
              </h2>
              <h3 className="text-xs text-gray-400">
                Works at {profile.company}
              </h3>
            </div>

            <button className="text-blue-400 text-xs font-bold">Follow</button>
          </div>
        ))}
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
}

export default Suggestions;
