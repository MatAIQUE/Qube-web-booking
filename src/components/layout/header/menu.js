import Buttons from "../buttons/login";

const Menu = () => {
  return (
    <div className='col-6 text-right'>
      <Buttons
        content={global.config.globals.loginButton}
        css='border border-success rounded font-success bg-light py-1 px-3'
      />
    </div>
  );
};

export default Menu;
