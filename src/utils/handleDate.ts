export default function handleDate(x: any) {
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var date = new Date(Number(x));

  let day = date.getDate();
  let monthIndex = date.getMonth()+1;
    let year = date.getFullYear();

//   return "p";

  return `${day}-${monthNames[monthIndex]}-${year}`;
}

