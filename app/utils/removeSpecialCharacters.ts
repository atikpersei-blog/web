export default function removeSpecialCharacters(text: string | undefined): string {
  if (typeof text != 'string') {
    return '';
  }
  return text.toLowerCase().replaceAll(' ', '-').replaceAll('%20', '-').replaceAll(/[^a-zA-Z0-9가-힣 _-]/g, '');
}