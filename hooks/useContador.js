import { useState } from "react";

export function useContador() {
  const [valor, setValor] = useState(0);

  const incrementar = () => setValor(valor + 1);
  const reiniciar = () => setValor(0);

  return { valor, incrementar, reiniciar };
}