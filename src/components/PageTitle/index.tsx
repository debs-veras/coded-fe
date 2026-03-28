import { useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaHome,
  FaList,
} from 'react-icons/fa';

export type PageMeta = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

type PageConfig = {
  match: RegExp;
  data?: PageMeta;
  build?: (id?: string) => PageMeta;
};

interface PageTitleProps {
  onChange?: (page: PageMeta) => void;
}

export default function PageTitle({ onChange }: PageTitleProps) {
  const location = useLocation();

  const config: PageConfig[] = useMemo(
    () => [
      {
        match: /^\/dashboard\/?$/,
        data: {
          name: 'Bem-vindo de volta',
          description: 'Aqui está um resumo da sua jornada acadêmica',
          icon: <FaHome />,
        },
      },
    ],
    []
  );

  const currentPage: PageMeta = useMemo(() => {
    const path = location.pathname;

    for (const item of config) {
      const match = path.match(item.match);
      if (!match) continue;
      if (item.data) return item.data;
      if (item.build) return item.build(match[1]);
    }

    return {
      name: 'Página',
      description: 'Navegue pelo blog',
      icon: <FaList />,
    };
  }, [location.pathname, config]);

  useEffect(() => {
    document.title = `${currentPage.name}`;
    onChange?.(currentPage);
  }, [currentPage, onChange]);

  return (
    <div className="flex flex-col">
      <div className="text-xl flex gap-2 items-center">
        <span className="text-primary">{currentPage.icon}</span>
        <h1 className="font-semibold text-primary">{currentPage.name}</h1>
      </div>

      <p className="text-sm text-gray-500">{currentPage.description}</p>
    </div>
  );
}
