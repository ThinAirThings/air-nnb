

export const tryCatch = async <T, R>(callback: (input: T) => Promise<R>, params: T): Promise<R | Error> => {
    try {
        return await callback(params);
    } catch (error) {
        console.log(error);
        return error as Error;
    }
}