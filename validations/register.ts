import { body } from 'express-validator'

export const registerValidations = [
    body('email', 'Введите E-Mail').isEmail().withMessage('Введен некорректный E-Mail').isLength({
        min: 10,
        max: 40
    }).withMessage('Недопустнимое количество символов'),
    body('fullname', 'Введите имя').isString().isLength({
        min: 1,
        max: 40
    }).withMessage('Недопустнимое количество символов'),
    body('username', 'Введите логин').isString().isLength({
        min: 2,
        max: 40
    }).withMessage('Недопустнимое количество символов'),
    body('password', 'Введите пароль')
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage('​Минимальная длина пароля 6 символов')
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Пароли не совпадают');
      } else {
        return value;
      }
    }),

]