const Ingrediensliste = ({ liste, id }: { liste: string[]; id: string }) => {
  return (
    <>
      <button
        onClick={() => {
          navigator.clipboard.writeText(liste.join("\n"));
        }}
      >
        Kopier dette
      </button>
      <ul>
        {liste.map((el, index) => {
          return <li key={`Ingrediensliste-${id}-${index}`}>{el}</li>;
        })}
      </ul>
    </>
  );
};

export default Ingrediensliste;
