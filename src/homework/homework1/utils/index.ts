export const clx = (arrString: string[], obj?: Record<string, boolean | undefined>): string => {
    if (!arrString) {
        return ''
    }

    const newArr = [...arrString]

    for (const key in obj) {
        if (obj[key] === true) {
            newArr.push(key)
        }
    }
    return newArr.join(' ')
}