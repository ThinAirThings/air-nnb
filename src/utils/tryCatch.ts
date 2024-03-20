

export const tryCatch = async <R>(callback: () => Promise<R>): Promise<R | Error> => {
    try {
        return await callback();
    } catch (error) {
        console.log(error);
        return error as Error;
    }
}