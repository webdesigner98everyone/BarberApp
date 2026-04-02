import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface Configuracion {
  nombre_barberia: string;
  moneda: string;
  simbolo: string;
  separador_miles: string;
  separador_decimal: string;
}

const defaultConfig: Configuracion = {
  nombre_barberia: 'The Barber',
  moneda: 'COP',
  simbolo: '$',
  separador_miles: '.',
  separador_decimal: ','
};

const ConfigContext = createContext<Configuracion>(defaultConfig);

export const useConfig = () => useContext(ConfigContext);

export const formatearPrecio = (valor: number, config: Configuracion): string => {
  const partes = Math.round(valor).toString().split('');
  let resultado = '';
  partes.reverse().forEach((d, i) => {
    if (i > 0 && i % 3 === 0) resultado = config.separador_miles + resultado;
    resultado = d + resultado;
  });
  return `${config.simbolo}${resultado}`;
};

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<Configuracion>(defaultConfig);

  useEffect(() => {
    api.get('/configuracion')
      .then(({ data }) => setConfig(data))
      .catch(() => {});
  }, []);

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}
