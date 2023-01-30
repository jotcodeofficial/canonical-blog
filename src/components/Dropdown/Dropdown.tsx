import Select, { ActionMeta, SingleValue } from "react-select";
import Category from "../../types/category";
import "./Dropdown.scss";
import React from "react";

/*
 *  This is the dropdown select component. It is used to update the current category, and will inform the parent component.
 */

type Props = {
    options: Category[];
    selectedContentType: Category;
    handleChange:
        | ((
              newValue: SingleValue<Category>,
              actionMeta: ActionMeta<Category>
          ) => void)
        | undefined;
};

const Dropdown = ({ selectedContentType, options, handleChange }: Props) => {
    return (
        <div className="u-fixed-width u-align--right">
            <div className="p-form p-form--inline enclosing">
                <label
                    aria-label="Filter the resources by type"
                    className="p-form__label"
                >
                    Filter:{" "}
                </label>

                <Select
                    className="form-select"
                    value={selectedContentType}
                    onChange={handleChange}
                    options={options}
                />
            </div>
        </div>
    );
};

export default Dropdown;
