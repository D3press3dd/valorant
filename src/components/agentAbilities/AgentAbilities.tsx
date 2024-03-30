type Abilities = {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
};
export function AgentAbilities(abilities): JSX.Element {
    console.log(abilities,"abilities")
  return (
    <section
      style={{
        display: 'flex',
      }}
    >
      <p style={{color:"blue"}}>{abilities.displayName}</p>
    </section>
  );
}
