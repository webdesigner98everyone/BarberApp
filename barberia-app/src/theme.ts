export const theme = {
  colors: {
    background: '#1a1a1a',
    card: '#2a2a2a',
    gold: '#C9A84C',
    white: '#FFFFFF',
    gray: '#888888',
    lightGray: '#444444',
    error: '#ef4444',
    success: '#10b981',
    warning: '#f59e0b',
  },
  fontSize: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 18,
    xl: 24,
    xxl: 32,
  }
};

export const formatPrecio = (valor: number): string => {
  return `$${valor.toLocaleString('es-CO')}`;
};
