import type { ReactNode } from 'react'

import FatalErrorPage from 'src/pages/FatalErrorPage';

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import { AuthProvider, useAuth } from './auth';

import './index.css';
import './scaffold.css';

interface AppProps {
  children?: ReactNode
}


const App = ({ children }: AppProps) => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <RedwoodApolloProvider useAuth={useAuth}>{children}</RedwoodApolloProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
