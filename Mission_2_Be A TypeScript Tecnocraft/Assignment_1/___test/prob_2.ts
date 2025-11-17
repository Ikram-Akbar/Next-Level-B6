{
    

const getLength = (params: string | any[]): number => {
    if (typeof params === "string" || Array.isArray(params)) {
        return params.length;
    }
    return 0;
};

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

}