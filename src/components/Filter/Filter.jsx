import { useDispatch } from "react-redux";
import { changeFilter } from "redux/filter/filter.slice";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <section className={css.sectionFilter}>
      <h2 className={css.sectionHeader}>Find contacts by name</h2>
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleChange}
      />
    </section>
  );
};
