

export default function Animal({ type, name, says }) {
  return (
    <div className="animalCard">
      <img className="card" alt={type} src={`/animals/${type}.svg`} height='100' />
      <p>{name}</p>
      <p>{says}</p>
    </div>
  );
}