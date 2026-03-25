import { useState } from 'react';
import {
  FiArrowRight,
  FiPlay,
  FiAward,
  FiBookOpen,
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-gray-900 dark:text-gray-100 overflow-hidden font-sans selection:bg-secondary-500 selection:text-white transition-colors duration-500">
      <div className="relative z-10 w-full h-full">
        <header className="px-6 md:px-12 py-4 flex items-center justify-between backdrop-blur-2xl bg-white/60 dark:bg-[#050505]/60 border-b border-gray-200/50 dark:border-white/5 sticky top-0 z-50 transition-all duration-300 shadow-xs">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 bg-linear-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold select-none shadow-md shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300">
                CED
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                Ceará
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#cursos" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Cursos
              </a>
              <a href="#sobre" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Sobre o CED
              </a>
              <a href="#noticias" className="text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Inovação
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 cursor-pointer"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5" />
              ) : (
                <FiSun className="w-5 h-5" />
              )}
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <button className="px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all font-semibold text-sm shadow-sm cursor-pointer">
                Sou Professor
              </button>
              <button className="px-6 py-2.5 rounded-full bg-linear-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 transition-all font-semibold text-sm shadow-md shadow-primary-500/20 hover:shadow-primary-500/40 hover:-translate-y-0.5 cursor-pointer">
                Portal Aluno
              </button>
            </div>
            <button
              className="md:hidden p-2.5 text-gray-900 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 shadow-2xl px-6 py-8 flex flex-col gap-6 z-40 transition-colors duration-300">
            <div className="flex flex-col gap-4 mb-4 border-b border-gray-100 dark:border-white/5 pb-6">
              <a
                href="#cursos"
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Cursos
              </a>
              <a
                href="#sobre"
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sobre o CED
              </a>
              <a
                href="#noticias"
                className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inovação
              </a>
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Acessar Plataforma</p>
              <button className="w-full px-6 py-3.5 rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-colors font-bold text-base flex justify-center items-center gap-2">
                Sou Professor
              </button>
              <button className="w-full px-6 py-3.5 rounded-xl bg-linear-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 transition-colors font-bold text-base shadow-lg shadow-primary-500/25 flex justify-center items-center gap-2">
                Portal Aluno
                <FiArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* HERO */}
        <main className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20 md:pt-15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8 flex flex-col items-start z-10">
              <div className="inline-block px-5 py-2 rounded-full border border-secondary-600/30 dark:border-secondary-500/30 bg-secondary-500/10 text-secondary-700 dark:text-secondary-400 font-bold text-xs tracking-widest uppercase mb-10 backdrop-blur-sm shadow-sm dark:shadow-none transition-colors duration-500">
                Inovação Ceará
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-black leading-[0.95] tracking-tighter mb-8 text-gray-900 dark:text-white drop-shadow-sm dark:drop-shadow-xl transition-colors duration-500">
                EDUCAÇÃO <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 via-primary-500 to-secondary-500 dark:from-primary-400 dark:via-primary-500 dark:to-secondary-500">
                  SEM LIMITES.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mb-12 font-medium leading-normal drop-shadow-sm transition-colors duration-500">
                Rompendo as barreiras físicas do estado do Ceará para entregar
                qualificação e inclusão digital onde você estiver.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                <button className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full overflow-hidden hover:scale-105 hover:shadow-2xl hover:shadow-primary-600/20 dark:hover:shadow-primary-500/20 transition-all duration-300 cursor-pointer text-sm">
                  <div className="absolute inset-0 bg-primary-600 dark:bg-primary-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  <span className="relative z-10 flex items-center justify-center gap-3 transition-colors duration-300 group-hover:text-white">
                    NOSSOS CURSOS{' '}
                    <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
                <button className="flex items-center gap-3 px-6 py-3 text-gray-800 dark:text-white font-bold hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors group cursor-pointer text-sm">
                  <div className="w-12 h-12 rounded-full border border-gray-900/20 dark:border-white/20 flex items-center justify-center group-hover:border-secondary-500 dark:group-hover:border-secondary-400 group-hover:scale-110 bg-white/50 dark:bg-white/5 backdrop-blur-md transition-all drop-shadow-md dark:drop-shadow-none cursor-pointer">
                    <FiPlay className="ml-1 w-4 h-4" />
                  </div>
                  Conheça o CED
                </button>
              </div>
            </div>

            {/* Visual Element Right (Glass Card) */}
            <div className="lg:col-span-4 relative mt-16 lg:mt-0 perspective-1000 z-10 w-full max-w-sm mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-linear-to-br from-primary-600/20 to-secondary-500/10 dark:from-primary-500/20 dark:to-transparent rounded-3xl blur-2xl transform rotate-6 transition-colors duration-500"></div>
              <div className="relative w-full aspect-4/5 bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-3xl rounded-4xl p-10 flex flex-col justify-end transform hover:rotate-2 hover:scale-105 transition-all duration-500 group overflow-hidden shadow-2xl shadow-gray-200/50 dark:shadow-none">
                <div className="absolute top-0 right-0 p-8 text-7xl text-gray-900/5 dark:text-white/5 font-black tracking-tighter group-hover:text-primary-500/20 transition-colors duration-500">
                  +50k
                </div>
                <div className="w-20 h-20 bg-primary-600 dark:bg-primary-500 rounded-3xl flex items-center justify-center mb-8 shadow-2xl shadow-primary-500/40 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <FiAward className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight transition-colors duration-500">
                  Vidas Impactadas
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium text-lg leading-relaxed dark:mix-blend-screen transition-colors duration-500">
                  Histórias de sucesso construídas por todo o estado em nossa
                  década de atuação.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* BENTO GRID SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 pb-40">
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 auto-rows-auto xl:h-[600px]">
            {/* Box 1 */}
            <div className="md:col-span-2 md:row-span-2 bg-white dark:bg-[#0A0A0A] rounded-4xl p-12 flex flex-col justify-between group overflow-hidden relative border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-500 shadow-xl shadow-gray-100 dark:shadow-none">
              <div className="absolute inset-0 bg-linear-to-t from-primary-100/50 dark:from-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 w-24 h-24 rounded-3xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 backdrop-blur-md flex items-center justify-center mb-10 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <FiBookOpen className="w-10 h-10 text-primary-600 dark:text-primary-400 transition-colors duration-500" />
              </div>
              <div className="relative z-10 mt-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white leading-tight transition-colors duration-500">
                  Qualidade que transforma.
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-xl max-w-md leading-relaxed transition-colors duration-500">
                  Curadoria de conteúdos excepcionais criados por especialistas,
                  focados na realidade e demanda do mercado atual.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="md:col-span-2 md:row-span-1 bg-secondary-400 dark:bg-secondary-500 rounded-4xl p-12 text-black flex flex-col justify-center relative overflow-hidden group hover:bg-secondary-500 dark:hover:bg-secondary-400 transition-colors duration-500 shadow-xl shadow-secondary-500/20 dark:shadow-none">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-white opacity-40 dark:opacity-20 blur-3xl rounded-full transform translate-x-1/4 translate-y-1/4 group-hover:scale-150 transition-transform duration-700"></div>
              <h2 className="text-4xl font-black mb-4 relative z-10">
                Inclusão Total
              </h2>
              <p className="font-bold text-black/80 dark:text-black/70 text-xl max-w-lg relative z-10 leading-relaxed">
                Cobrimos os 184 municípios cearenses com polos tecnológicos e
                infraestrutura de ponta.
              </p>
            </div>

            {/* Box 3 */}
            <div className="md:col-span-1 md:row-span-1 bg-white dark:bg-[#111] rounded-4xl p-8 border border-gray-200 dark:border-white/5 shadow-xl shadow-gray-100 dark:shadow-none flex flex-col items-center justify-center text-center hover:bg-gray-50 dark:hover:bg-[#151515] hover:border-primary-500/20 dark:hover:border-primary-500/30 transition-all duration-300">
              <div className="text-7xl font-black text-primary-600 dark:text-primary-500 mb-3 bg-clip-text text-transparent bg-linear-to-br from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600">
                10
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-bold uppercase tracking-[0.2em] transition-colors duration-500">
                Anos de
                <br />
                Inovação
              </div>
            </div>

            {/* Box 4 */}
            <div className="md:col-span-1 md:row-span-1 bg-gray-900 dark:bg-[#111] rounded-4xl p-8 border border-transparent dark:border-white/5 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-primary-600 transition-all duration-300 shadow-xl dark:shadow-none">
              <div className="w-16 h-16 rounded-full bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 flex items-center justify-center mb-6 group-hover:bg-white group-hover:scale-[1.15] transition-transform duration-500">
                <FiArrowRight className="w-6 h-6 text-white group-hover:text-primary-600 transition-colors duration-300" />
              </div>
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-white">
                Ver Todos
                <br />
                Os Dados
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-white dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-white/10 py-12 transition-colors duration-500 mt-10 relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold select-none shadow-sm dark:shadow-none">
              CED
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Ceará
            </span>
          </div>

          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Centro de Educação a Distância do
            Ceará.
          </div>

          <div className="flex items-center gap-6 text-sm font-semibold text-gray-600 dark:text-gray-400">
            <a
              href="#"
              className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
            >
              Governo
            </a>
            <a
              href="#"
              className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
            >
              Ouvidoria
            </a>
            <a
              href="#"
              className="hover:text-primary-600 dark:hover:text-primary-500 transition-colors"
            >
              Transparência
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
