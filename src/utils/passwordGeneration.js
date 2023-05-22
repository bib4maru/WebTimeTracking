export const Generatepassword = () => {
    let password = '';
    const b = "abcdefghijklmnopqrstuvwxyz1234567890";
    for(let i=0; i< 8; i++) {
        password += b[Math.floor(Math.random() * b.length)];
    }
    return password
}