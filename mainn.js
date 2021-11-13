// | Name          | Yes      | Alphabetical Only                                       |
// | Phone Number  | Yes      | (###)###-####, ##########, or ###-###-####              |
// | Company Email | No       | Alphabetical@Aphabetical.Aphabetical                    |
let test1 = "jenemail.com" 
let test2 = "jen@emailcom" 
let test3 = "jen123@email.com"

let regex = /^[\w0-9]+@\w+\.\w+$/
let result = test3.match(regex)
console.log(result);
// | Zip Code      | Yes      | Numbers, only 5 characters or 5 followed by - then 4 #s |