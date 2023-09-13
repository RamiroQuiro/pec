import { MultiSelect } from "react-multi-select-component";

const SelectExample = ({ labelSpan, options, selected, setSelected }) => {
  return (
    <div className=" relative px-5 z-20">
      <p className="text-primary-textGris text-xs mb-0.5 w-full text-right ">
        {labelSpan}
      </p>
      <MultiSelect
        className="h-2 text-xs text-primary-textGris z-20 w-full"
        options={options}
        hasSelectAll={false}
        disableSearch
        value={selected}
        onChange={setSelected}
        labelledBy="Selecciona"
      />
    </div>
  );
};

export default SelectExample;
