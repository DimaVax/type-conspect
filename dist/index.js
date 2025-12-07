console.log('hello world');
const a = '';
// типізація простих типів даних 
// виділяють явну та неявну типізацію
// НЕЯВНА ТИПІЗАЦІЯ
// const userName = 'Dima';
// const userAge = 14;
// const isAdulted = false;
// const sertificate = null;
// const data = undefined;
// якщо ми не типізуємо дані у змінних, то у typescript відбувається неявна типізація
// ЯВНА ТИПІЗАЦІЯ
const userName = 'Dima';
const userAge = 14;
const isAdulted = false;
const sertificate = null;
const data = undefined;
// якщо ми плануємо змінювати змінні, то краще їх типізувати
let myAge = 14;
// myAge = '15';  буде помилка, оскільки ця змінна типізована неявно і чекає на число
// типізація складних типів даних
// типізація масивів
const friends = ['maks', 'yura'];
friends.push('artur');
console.log(friends);
const user = {
    userName: 'user6767',
    password: '12345678',
    age: 14,
    isLoggined: false
};
// const lesson: LessonType = 'javaScript' буде помилка, бо типом було зарезервоване інше значення 
// type SizeType = 'small' | 'meduim' | 'large';
// ПРАВИЛО ХОРОШОГО ТОНУ: ВСЮ ТИПІЗАЦІЮ ВИНОСИМО НА ВЕРХ ФАЙЛУ АБО В ОКРЕМИЙ ФАЙЛ(ІМПОРТУЄМО З НЬОГО)
//  тип даних any
let someData = 37298;
someData = 'dsd';
// тип даних any використовується в ситуаціях коли ми бажаємо отримати в змінній будь-який тип данних; дозволяє переписати на інший тип
// any зручний для тестування коду, наприклад якщо немає часу на типізацію(або це не зручно)
// !!НЕ РЕКОМЕНДОВАНИЙ, БО ВТРАЧАЄТЬСЯ СУТНІСТЬ TYPESCRIPT!!
// тип unknown
let some = 66.56767676767;
// some.toFixed(2)
// тип unknown це невідомий тип, який схожий на any. Він ігнорує перевірку типів, АЛЕ ПРИ ЗМІНІ ЗНАЧЕННЯ НАДАЄ ПОМИЛКУ(на відміну від any)
// тип еnum 
// тип еnum може більш конкретизувати значення і дозволяє не хардкодити(робити ці значення динамічними)
// спосіб 1
// type SizeType = 'small' | 'medium' | 'large';
// const button: SizeType = 'large';
// const button2: SizeType = 'extra-large'; буде помилка, бо поля зарезервованого як extra-large немає
// спосіб 2
var SizeType;
(function (SizeType) {
    SizeType["small"] = "small";
    SizeType["mudium"] = "medium";
    SizeType["large"] = "large";
})(SizeType || (SizeType = {}));
;
const button3 = SizeType.large;
