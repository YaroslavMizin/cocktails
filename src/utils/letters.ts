export enum letters {
    a = "a",
    b = "b",
    c = "c",
    d = "d",
    e = "e",
    f = "f",
    g = "g",
    h = "h",
    i = "i",
    j = "j",
    k = "k",
    l = "l",
    m = "m",
    n = "n",
    o = "o",
    p = "p",
    q = "q",
    r = "r",
    s = "s",
    t = "t",
    u = "u",
    v = "v",
    w = "w",
    y = "y",
    z = "z"
}

export const lettersArray: string[] = Object.values(letters);

export const next = (title?: string) => {
    if(title) {
        const current = lettersArray.indexOf(title);
        return current === lettersArray.length -1 ? lettersArray[0] : lettersArray[current + 1]
    }
}