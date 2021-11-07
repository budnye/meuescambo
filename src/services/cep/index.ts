import api from '../api';
interface AdressProps {
  cep: string;
}
export const getAddress = async ({ cep }: AdressProps) => {
  const uri = `${cep}/json/`;
  const response = await api.get(uri);
  return response.data;
};
