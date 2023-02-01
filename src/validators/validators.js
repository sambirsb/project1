
export const requried = (value) => {
    if (value) return undefined
    return  "Це поле обовя'зкове"
}

export const MinMaxLength = (minLength, maxLength) => (value) => {
    if(value.length > maxLength) return 'Повинно бути менше' + maxLength + 'символів'
    else if(value.length < minLength) return 'Повинно бути більше' + minLength + 'символів'
    return undefined
}

export default requried