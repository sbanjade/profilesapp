import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

export default function App() {
  return (
    <Authenticator>
      {({ user, signOut }) => (
        <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
          <h1>Profiles App</h1>
          <p>Signed in as: {user?.username}</p>
          <p>Built by Sachin Banjade</p>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  )
}