export const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000000);

  return `${timestamp}-${random}`;
};

export const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');
  const hh = date.getHours().toString().padStart(2, '0');
  const ii = date.getMinutes().toString().padStart(2, '0');
  const ss = date.getSeconds().toString().padStart(2, '0');

  return `${dd}/${mm}/${yyyy} ${hh}:${ii}:${ss}`;
};

export const formatDateToTime = (date: Date): string => {
  const hh = date.getHours().toString().padStart(2, '0');
  const ii = date.getMinutes().toString().padStart(2, '0');

  return `${hh}:${ii}`;
};
