import { CharacterInfo } from "./CharacterInfo";

interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

export const CharacterList = ({ characters }: { characters: Character[] }) => {

    return characters.length ? (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {characters.map((char) => (
                <CharacterInfo key={char.id} character={char} />
            ))}
        </div>
    ) : (
        <p>No characters found. Try another name.</p>
    );
};