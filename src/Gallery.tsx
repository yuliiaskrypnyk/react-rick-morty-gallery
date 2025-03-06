import { useState } from "react";
import { response } from "./response.ts";
import {CharacterList} from "./CharacterList.tsx";

export const Gallery = () => {
    const [characters] = useState(response.results);
    const [search, setSearch] = useState("");
    const [visibleCount, setVisibleCount] = useState(5);

    const filteredCharacters = characters.filter((char) =>
        char.name.toLowerCase().includes(search.toLowerCase()))
        .slice(0, visibleCount);

    return (
        <div>
            <h1>Rick & Morty Gallery</h1>
            <input
                type="text"
                placeholder="Search characters..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <CharacterList characters={filteredCharacters} />
            {visibleCount < characters.length && (
                <button onClick={() => setVisibleCount((prev) => prev + 5)}>
                    Show More
                </button>
            )}
        </div>
    );
};