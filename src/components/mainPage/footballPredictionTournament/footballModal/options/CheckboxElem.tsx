import React, {useState} from 'react';

interface ICheckbox {
    text: string
}
const CheckboxElem = ({text}: ICheckbox) => {
    const [checkedStatus, setCheckedStatus] = useState(true)
    return (
        <div>
            <input
                type={'checkbox'}
                value={'name'}
                checked={checkedStatus}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setCheckedStatus(!checkedStatus)
                }}
            />
            <label htmlFor="name">{text}</label>
        </div>
    );
};

export default CheckboxElem;