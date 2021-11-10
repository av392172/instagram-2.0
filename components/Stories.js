import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";


function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    const { data: session } = useSession();

    useEffect(() => {
        const Suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        // console.log(Suggestions);
        setSuggestions(Suggestions);
    }, [])
    return (
        <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thumb-black scrollbar-thin">
            {session && (<Story img={session.user.image} username={session.user.username} />)}
            {suggestions.map(profile => (
                <Story
                    key={profile.id}
                    img={profile.avatar}
                    username={profile.username}
                />
            ))}
        </div>
    )
}

export default Stories
