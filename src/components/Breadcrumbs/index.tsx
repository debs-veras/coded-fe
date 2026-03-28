import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { type JSX } from 'react';
import { useUserStore } from '../../hooks/useUserStore';

interface BreadcrumbItem {
  name: string;
  path: string;
  icon: JSX.Element;
  active: boolean;
}

export default function Breadcrumbs() {
  const navigate = useNavigate();
  const { user } = useUserStore();

  let dashboardRoute = '/posts';
  if (user?.role === 'STUDENT') dashboardRoute = '/dashboard/aluno';
  else if (user?.role === 'TEACHER') dashboardRoute = '/dashboard/professor';
  else if (user?.role === 'ADMIN') dashboardRoute = '/users';

  function resolveBreadcrumbs(): BreadcrumbItem[] {
    return [
      {
        name: 'Dashboard',
        path: dashboardRoute,
        icon: <FaHome className="h-5 w-5" />,
        active: true,
      },
    ];
  }

  const breadcrumbs = resolveBreadcrumbs();

  return (
    <nav className="px-0 md:px-0">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        {breadcrumbs.map((item, index) => (
          <li key={`${item.path}-${index}`} className="flex items-center">
            {item.active ? (
              <span className="flex items-center gap-1 text-primary font-semibold bg-primary/10 dark:bg-primary/20 rounded px-2 py-1 cursor-default">
                {item.icon}
                {item.name}
              </span>
            ) : (
              <button
                onClick={() => navigate(item.path)}
                className="flex items-center gap-1 rounded px-2 py-1 bg-transparent hover:bg-blue-500/10 dark:hover:bg-blue-400/20 hover:text-blue-600 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-150 cursor-pointer"
                tabIndex={0}
              >
                {item.icon}
                {item.name}
              </button>
            )}
            {index < breadcrumbs.length - 1 && (
              <span className="mx-1 text-gray-300 dark:text-gray-600 select-none">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
