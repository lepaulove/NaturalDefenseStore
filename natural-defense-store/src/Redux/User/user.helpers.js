import { auth } from '../../Firebase/utils'

export const handleResetPasswordAPI = email => {
    return new Promise((resolve, reject) => {
        const config = {
            url: 'http://localhost:3000/email-login'
        }

        auth.sendPasswordResetEmail(email, config).then(() => {
            resolve()
        }).catch(() => {
            const err = ['Email Not Found. Please Try Again.']
            reject(err)
        })
        // await auth.signInWithEmailAndPassword(email, password)
    })
}