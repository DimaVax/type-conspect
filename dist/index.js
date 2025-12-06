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
