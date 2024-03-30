import "@/components/agentCard/agent-card.css"

interface AgentCardProps {
    name:string
    country:string
    agentBackgroundImg:string | null
    background:string | null
}

export function AgentCard({name,country,agentBackgroundImg,background}:AgentCardProps) {
  const formattedImaged = agentBackgroundImg || "hero.jpg"

  return (
    <section className="agent-card">
      <img className="agent-card-background__person" src={formattedImaged} alt={name} />
      <img className="agent-card-background" src={background || ""} alt="" />
      <h2 className="agent-card-name">{name}</h2>
    </section>
  );
}
