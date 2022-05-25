// В JavaScript есть четыре логических оператора:
// || (ИЛИ), && (И) и ! (НЕ)

// let hours = prompt('Введите в какое время хотите посетить офис? ');
// if (hours < 10 || hours > 18) {
//   alert( 'Офис закрыт.' );
// }else if(hours > 10 || hours < 18){
//   alert( 'Офис открыт.' );
// }

// let hour = 12;
// let minute = 30;
// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }

// alert( !true ); // false
// alert( !1 ); // true

let a = 2 + 5;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}
// let b = prompt('Сколько лет вашей компании? ')
// switch (b){
//   case 2:
//     alert('Маловато')
//     break;
//   case 5:
//     alert('Нормально')
//   case 10:
//     alert('')
// }