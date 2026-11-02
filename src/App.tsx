import { supabase } from './lib/supabase'

function App() {
  const isSupabaseReady = Boolean(supabase)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold">Nosso Refúgio</h1>
      <p className="mt-2 text-sm">
        Supabase client initialized: {isSupabaseReady ? 'Sim' : 'Não'}
      </p>
    </div>
  )
}

export default App
