export const generateUniqueId = () => {
  const timestamp = new Date().getTime();
  const random = Math.floor(Math.random() * 1000000);

  return `${timestamp}-${random}`;
};

export const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const hh = date.getHours();
  const ii = date.getMinutes();
  const ss = date.getSeconds();

  dd.toString().padStart(2, '0');
  mm.toString().padStart(2, '0');

  return `${dd}/${mm}/${yyyy} ${hh}:${ii}:${ss}`;
};
