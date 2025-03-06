import { useState } from "react";
import { response } from "./response.ts";
import {CharacterList} from "./CharacterList.tsx";

export const Gallery = () => {
    const [characters] = useState(response.results);

    return (
        <div>
            <h1>Rick & Morty Gallery</h1>
            <CharacterList characters={characters} />
        </div>
    );
};