module.exports = function check(str, bracketsConfig) {
    const newBracketsConfig = bracketsConfig.map((e) => e.join(""));

    for (let i = 0; i < newBracketsConfig.length; ) {
        if (str.includes(newBracketsConfig[i])) {
            str = str.replace(newBracketsConfig[i], "");
            i = 0;
        } else {
            i++;
        }
    }

    return str ? false : true;
}
