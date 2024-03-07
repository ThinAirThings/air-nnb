


export const tryCatch = <T, R>(callback: (input: T) => R) => {

    try {
        return callback;
    } catch (error) {
        console.log(error);
        return error;
    }
}