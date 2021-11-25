import '../sass/components/_button.sass';

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className='button'>
      {children}
    </button>
  );
};
