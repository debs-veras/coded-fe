import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  FiMail,
  FiLock,
  FiArrowLeft,
  FiEye,
  FiEyeOff,
  FiSun,
  FiMoon,
  FiUser,
  FiBookOpen,
  FiAlertCircle,
} from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

type Role = 'aluno' | 'professor';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
});

type LoginFormData = z.infer<typeof loginSchema>;

const VALID_ROLES: Role[] = ['aluno', 'professor'];

export default function Login() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const rawRole = searchParams.get('role');
  const validRoles = VALID_ROLES;
  const initialRole: Role = rawRole === 'professor' ? 'professor' : 'aluno';

  const [role, setRole] = useState<Role>(initialRole);
  const [showPassword, setShowPassword] = useState(false);

  const isAluno = role === 'aluno';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  useEffect(() => {
    if (rawRole !== null && !VALID_ROLES.includes(rawRole as Role))
      navigate('/', { replace: true });
  }, [rawRole, navigate]);

  const onSubmit = async (data: LoginFormData) => {
    console.log('Login as', role, data);
  };

  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    reset();
  };
  
  if (rawRole !== null && !validRoles.includes(rawRole as Role)) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-500 flex flex-col">
      {/* Top bar */}
      <header className="px-6 lg:px-12 py-4 flex items-center justify-between">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors group cursor-pointer"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Voltar ao início
        </button>

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
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-white dark:bg-[#0A0A0A] border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl shadow-gray-200/60 dark:shadow-none p-8 md:p-10">
            {/* Tab switcher */}
            <div className="flex gap-2 p-1 bg-gray-100 dark:bg-white/5 rounded-2xl mb-8">
              <button
                type="button"
                onClick={() => handleRoleChange('aluno')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isAluno
                    ? 'bg-white dark:bg-white/10 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                <FiUser className="w-4 h-4" />
                Aluno
              </button>
              <button
                type="button"
                onClick={() => handleRoleChange('professor')}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                  !isAluno
                    ? 'bg-white dark:bg-white/10 text-primary-600 dark:text-primary-400 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                }`}
              >
                <FiBookOpen className="w-4 h-4" />
                Professor
              </button>
            </div>

            {/* Header */}
            <div className="mb-8">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300 ${
                  isAluno
                    ? 'bg-primary-500/10 text-primary-700 dark:text-primary-400 border border-primary-500/20'
                    : 'bg-secondary-500/10 text-secondary-700 dark:text-secondary-400 border border-secondary-500/20'
                }`}
              >
                {isAluno ? (
                  <FiUser className="w-3 h-3" />
                ) : (
                  <FiBookOpen className="w-3 h-3" />
                )}
                {isAluno ? 'Portal do Aluno' : 'Portal do Professor'}
              </div>
              <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">
                Bem-vindo de volta
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {isAluno
                  ? 'Acesse sua conta para continuar seus estudos.'
                  : 'Acesse o painel de gestão de cursos e alunos.'}
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
              noValidate
            >
              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest"
                >
                  E-mail
                </label>
                <div className="relative">
                  <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder={
                      isAluno
                        ? 'aluno@ced.ce.gov.br'
                        : 'professor@ced.ce.gov.br'
                    }
                    {...register('email')}
                    className={`w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-400 dark:border-red-500 focus:border-red-400 focus:ring-red-400/20'
                        : 'border-gray-200 dark:border-white/10 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500/20'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-red-500">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest"
                  >
                    Senha
                  </label>
                  <button
                    type="button"
                    className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline cursor-pointer"
                  >
                    Esqueci minha senha
                  </button>
                </div>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    {...register('password')}
                    className={`w-full pl-11 pr-12 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${
                      errors.password
                        ? 'border-red-400 dark:border-red-500 focus:border-red-400 focus:ring-red-400/20'
                        : 'border-gray-200 dark:border-white/10 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-primary-500/20'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors cursor-pointer"
                    aria-label="Mostrar senha"
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-4 h-4" />
                    ) : (
                      <FiEye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="flex items-center gap-1.5 text-xs font-semibold text-red-500">
                    <FiAlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-2 w-full py-3.5 rounded-xl font-bold text-white text-sm shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
                  isAluno
                    ? 'bg-linear-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5'
                    : 'bg-linear-to-r from-secondary-600 to-secondary-500 hover:from-secondary-700 hover:to-secondary-600 shadow-secondary-500/25 hover:shadow-secondary-500/40 hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting
                  ? 'Entrando...'
                  : isAluno
                    ? 'Entrar no Portal do Aluno'
                    : 'Entrar como Professor'}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/5 text-center">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Problemas para acessar?{' '}
                <a
                  href="mailto:suporte@ced.ce.gov.br"
                  className="font-semibold text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Fale com o suporte
                </a>
              </p>
            </div>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-400 dark:text-gray-600 mt-6">
            © {new Date().getFullYear()} Centro de Educação a Distância do Ceará
          </p>
        </div>
      </main>
    </div>
  );
}
