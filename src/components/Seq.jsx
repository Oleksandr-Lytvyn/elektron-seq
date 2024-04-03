import { useContext } from 'react';
import { MyContext } from '../contextProvider/context';

export const Seq = () => {
  const { value } = useContext(MyContext);

  const preStyle = {
    whiteSpace: 'pre-wrap', // Позволяет переносить строки внутри <pre>
    fontFamily: 'monospace', // Используется моноширинный шрифт для сохранения отступов
  };
  return (
    <>
      <pre style={preStyle}>{JSON.stringify(value.seq, null, 2)}</pre>
    </>
  );
};
