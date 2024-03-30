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
    <div className="agent-card" data-name={name} data-country={country}>
      <img className="agent-card-background__person" src={formattedImaged} alt={name} />
      <img className="agent-card-background" src={background || ""} alt="" />
      <h2 style={{ color:"red"}}>{name}</h2>
    </div>
  );
}
