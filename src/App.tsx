import { supabase } from './lib/supabase'

function App() {
  const isSupabaseConfigured = Boolean(supabase)

  return (
    <main className="min-h-screen w-full bg-[#FFEFF4] flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-[#FEE2E2] max-w-md w-full">
        <h1 className="text-3xl font-bold text-[#E11D48] tracking-tight">Nosso Refúgio</h1>
        <p className="mt-3 text-base text-gray-700">
          Aplicação iniciada e conectada ao Supabase com sucesso.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FEE2E2] text-[#DB2777]">
          <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
          Supabase {isSupabaseConfigured ? 'Pronto' : 'Desconectado'}
        </div>
      </div>
    </main>
  )
}

export default App
