import data from '@/mocks/agents.json';
import { AgentCard } from '../components/agentCard/AgentCard';
import { AgentAbilities } from '../components/agentAbilities/AgentAbilities';

export default function Home() {
  return (
    <>
      <h1>hola Lindsi</h1>
      <div
        style={{
          display: 'flex',
        }}
      >
        {data.data.map(value => {
          return (
            <div
              style={{
                margin: '80px',
              }}
            >
              <AgentCard
                name={value.displayName}
                country={value.displayName}
                agentBackgroundImg={value.fullPortraitV2}
                background={value.background}
              />
              <AgentAbilities abilities={value.abilities}/>
            </div>
          );
        })}
      </div>
    </>
  );
}
