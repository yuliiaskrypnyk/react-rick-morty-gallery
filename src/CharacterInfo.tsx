interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
}

export const CharacterInfo = ({character}: { character: Character }) => {
    return (
        <div>
            <img src={character.image} alt={character.name} width={150}/>
            <h3  style={{width: "150px",}}>{character.name}</h3>
            <p>{character.species} - {character.status}</p>
        </div>
    );
};