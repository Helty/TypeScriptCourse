import {AuthPage} from './AuthPage';

describe('Проверка авторизации', () => {
    it('авторизация пользователя', async () => {
        const authPage = new AuthPage(browser);
        await authPage.open()

        await authPage.submitForm('admin', 'admin')

        expect(await authPage.error).not.toBeExisting()
        expect(await authPage.welcome.getText()).toEqual('Hi, admin')
    })

    it('авторизация не существующего пользователя', async () => {
        const authPage = new AuthPage(browser);
        await authPage.open()

        await authPage.submitForm('test', 'test')

        expect(await authPage.welcome).not.toBeExisting()
        expect(await authPage.error.getText()).toEqual('Error')
    })
})
