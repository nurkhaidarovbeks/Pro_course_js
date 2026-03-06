function validateEmail(email) {
    if (!email) {
        throw new Error("Email is required")
    }

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.rest(email)
}

console.log(validateEmail("test@mail.com"))
console.log(validateEmail("wrong-email"))