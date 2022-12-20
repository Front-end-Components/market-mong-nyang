import Button from '../Button';
import style from './infoList.module.scss';

export const InfoList = ({ label, input, button }) => {
  const { name, value, type, required, onChange, placeholder, checkInput } = input;
  const isError = value?.length !== 0 && checkInput && checkInput.isConfirm === false;

  return (
    <section className={style.inputList}>
      <section className={style.inputList_label}>
        {label}
        {required && <span className={style.required}>*</span>}
      </section>
      <section className={style.inputList_input}>
        <input
          name={name}
          value={value}
          type={type ?? 'text'}
          onChange={onChange}
          placeholder={placeholder}
          className={isError ? `${style.inputError}` : null}
        />
        {isError && <span className={style.errorMsg}>{checkInput.errorMessage}</span>}
      </section>
      <section className={style.inputList_button}>
        {button && <Button name={button.name} onClick={button.onClick} />}
      </section>
    </section>
  );
};
