// O número fica centralizado aqui. Mudou aqui, muda no site todo.
const PHONE_NUMBER = '553195287849';

const DEFAULT_MESSAGE =
  'Olá Hyagor! Vim pelo site da HKN. Estou precisando de ajuda com [Projeto / Obra / Regularização] e gostaria de um orçamento. Como funciona?';

// Essa função aceita uma mensagem personalizada (opcional).
// Se você não passar nada, ela usa a mensagem padrão.
export const getWhatsAppLink = (customMessage) => {
  const message = customMessage || DEFAULT_MESSAGE;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
};
