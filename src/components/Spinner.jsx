import '../sass/components/_spinner.sass';

export const Spinner = () => {
  return (
    <div className='spinner'>
      <div className='spinner__container'>
        <div className='spinner__line'></div>
        <div className='spinner__line'></div>
        <div className='spinner__line'></div>
        <div className='spinner__circle'>&#9679;</div>
      </div>
    </div>
  );
};
