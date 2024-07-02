import React, { useState } from "react";

export function useLocalStorage<T>(item: string) {
    /*
    const [value, setValue] = useState<T | null>(JSON.parse(localStorage.getItem(item) ?? 'null'));

    const updateLocalStorage = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(item, JSON.stringify(newValue));
    }

    return { value, updateLocalStorage };


*/
}
export default useLocalStorage;
