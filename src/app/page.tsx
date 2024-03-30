import data from '@/mocks/agents.json';
import { AgentCard } from '../components/agentCard/AgentCard';

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
            </div>
          );
        })}
      </div>
    </>
  );
}
