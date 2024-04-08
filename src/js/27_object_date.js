let fecha = new Date()
console.log(fecha)
/* Día del mes */
console.log('día del mes:', fecha.getDate())
/* 
  Días de la semana:
    0       1     2       3       4     5       6       
  ['dom', lun', 'mar', 'mier', 'jue', 'vie', 'sab']
*/
console.log('día de la semana:', fecha.getDay())
/* 
  Meses:
    0       1     2       3       4     5       6       
  ['ene', feb', 'mar', 'abr', 'may', 'jun', 'jul'...]
*/
console.log('mes:', fecha.getMonth())
/* Año */
console.log('año:', fecha.getFullYear())
/* Hora, de en militar */
console.log('hora:', fecha.getHours())
/* Minutos */
console.log('minutos:', fecha.getMinutes())
/* Segundos */
console.log('segundos:', fecha.getSeconds())
/* milisegundos */
console.log('milisegundos:', fecha.getMilliseconds())
/* Fecha y hora */
console.log('fecha y hora:', fecha.toLocaleString())
/* Fecha */
console.log('fecha:', fecha.toLocaleDateString())
/* Dia de la semana y fecha */
console.log('dia de la semana y fecha:', fecha.toDateString())
/* Hora completa */
console.log('hora completa:', fecha.toLocaleTimeString())
/* Los segundos que han transcurrido desde
el 1 de enero de 1970, se usa para crar marcas
de timpo, medir el tiempo en que tarda una 
operación en ejecutarse*/
console.log('timestamp', Date.now())



