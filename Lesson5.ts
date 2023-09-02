enum DayOfWeek
{
   Monday = 2,
   Tuesday = 3,
   Wednesday,
   Thursday,
   Firday,
   Satuday,
   Sunday,
}
enum Color
{
    Red ,
    Green,
    Blue,
    Yellow,
}
enum Month
{
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    July,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
console.log("cac mau :",Color)
// Array.map
const number = [1,2,3,4]
const squared = number.map(function(x) {return x*x;});
console.log("phan tu",squared)
// Array.filter
