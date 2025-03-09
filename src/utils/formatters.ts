  export const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  }
  export const formatPhone = (phone: string) => {
    return phone.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, "+$1 ($2) $3-$4");
  };