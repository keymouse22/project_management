import instance from "."

export const getUser = async () => {
    const user = await instance.get("/user/all-users");
    return user;
}

export const createUser = async (payload) => {
    const user = await instance.post("/user/sign-up", payload)
    return user;
}

export const loginUser = async (payload) => {
    const user = await instance.post("/user/log-in", payload)
    return user;
}

export const getUserProjects = async () => {
    const project = await instance.get("/projects/all-project").then((res) => { return res.data });
    return project;
}

export const createProject = async (payload) => {
    const project = await instance.post("/projects/create-project", payload);
    return project;
}

export const deleteProject = async (id) => {
    const project = await instance.delete(`/projects/${id}`);
    return project;
}

export const editProject = async (payload) => {
    const project = await instance.patch('/projects/edit', payload);
    return project;
}