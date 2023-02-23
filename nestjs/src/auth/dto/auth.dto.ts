export interface UserLoginDto {
    email: string,
    password: string
}

export interface UserSignupDto {
    hoTen: string,
    email: string,
    password: string,
    ngaySinh: string,
    hinhDaiDien: string,
    isRemove: boolean
}