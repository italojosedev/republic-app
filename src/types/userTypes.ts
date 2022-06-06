export type UserLogin = {
    email: String,
    password: String
}

export type UserRegister = {
    name: String,
    description: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    password: String
}

export type User = {
    firstName: String,
    lastName: String,
    rent: String,
    email: String,
    phone: String,
    isadmin: boolean,
}