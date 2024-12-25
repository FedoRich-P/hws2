import React from 'react'

const up = <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 0L7.4641 4.5H0.535898L4 0Z" fill="black"/>
</svg>
const down = <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="black"/>
</svg>

const none = <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 5L0.535898 0.5L7.4641 0.5L4 5Z" fill="#ADABAC"/>
</svg>

// добавить в проект иконки и импортировать

const downIcon = down
// const downIcon = '[\\/]'
const upIcon = up
// const upIcon = '[/\\]'
const noneIcon = none
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up;
    } else if (sort === up) {
        return '';
    } else {
        return down;
    }
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    // return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = value;
    const down = `-${value}`;

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {icon} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
