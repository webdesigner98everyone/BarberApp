import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface Configuracion {
  nombre_barberia: string;
}

const defaultConfig: Configuracion = { nombre_barberia: 'The Barber' };

const ConfigContext = createContext<Configuracion>(defaultConfig);

export const useConfig = () => useContext(ConfigContext);

export const formatearPrecio = (valor: number): string => {
  const partes = Math.round(valor).toString().split('');
  let resultado = '';
  partes.reverse().forEach((d, i) => {
    if (i > 0 && i % 3 === 0) resultado = '.' + resultado;
    resultado = d + resultado;
  });
  return `$${resultado}`;
};

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<Configuracion>(defaultConfig);

  useEffect(() => {
    api.get('/configuracion')
      .then(({ data }) => setConfig({ nombre_barberia: data.nombre_barberia }))
      .catch(() => {});
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}
