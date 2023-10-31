export interface Login {
    username: string | null;
    password: string | null;
}

export let defaultLogin: Login = {
    username: null,
    password: null
}