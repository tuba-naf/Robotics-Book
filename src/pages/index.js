// import React from 'react';
import Layout from '@theme/Layout';
import { FloatingChatbot } from '@site/src/components/Chatbot.jsx';

export default function Home() {
  return (
    <Layout title="Physical AI & Humanoid Robotics Course" description="Build robots that see, think, and move IRL!">
      <main style={{ textAlign: 'center', padding: '6rem 1rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🤖 Physical AI & Humanoid Robotics</h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>
          Curious how AI can step out of screens and interact with the real world?  
          This book unpacks how robots <strong>see, think, plan, and move</strong> — just like living systems do.  
          Perfect if you want to <em>understand the intelligence behind humanoid robots</em> without needing to build one yourself.
        </p>
      </main>

      {/* Floating chatbot */}
      <FloatingChatbot />
    </Layout>
  );
}
