import instance from "."

export const getUser = () => {
    const user = instance.get("/all-users");
    return user;
}

export const createUser = (payload) => {
    const user = instance.post("/sign-up", payload)
    return user;
}

export const loginUser = (payload) => {
    const user = instance.post("/log-in", payload)
    return user;
}