import Button from "../Button";
import style from "./infoList.module.scss";

export const InfoList = ({ label, input, button }) => {
  return (
    <section className={style.infoList}>
      <section className={style.infoList_label}>{label}</section>
      <section className={style.infoList_input}>
        <input
          name={input.name}
          value={input.value}
          type={input.type ?? "text"}
          onChange={input.onChange}
          placeholder={input.placeholder}
        />
      </section>
      <section className={style.infoList_button}>
        {button && <Button name={button.name} onClick={button.onClick} />}
      </section>
    </section>
  );
};
