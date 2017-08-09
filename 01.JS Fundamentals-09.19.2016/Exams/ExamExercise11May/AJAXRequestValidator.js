/**
 * Created by anton on 15-Oct-16.
 */
function validateRequest(requests) {
    let decodingHash = requests.pop().split('');

    function validateToken(token, decodingHash) {
        for (let i = 0; i < decodingHash.length; i+=2) {
            let count = decodingHash[i];
            let character = decodingHash[i + 1];

            if((token.match(new RegExp(character, "g")) || []).length == count) return true;
        }
        return false;
    }

    for (let i = 0; i < requests.length; i+=3) {
        let methodPattern = /Method: (GET|POST|DELETE|PUT)/g;
        let credentialsPattern = /Credentials: (Basic|Bearer) ([A-Za-z0-9]+)/g;
        let contentPattern = /Content: [A-Za-z0-9.]+/g;

        let methodMatch = methodPattern.exec(requests[i]);
        let credentialsMatch = credentialsPattern.exec(requests[i + 1]);
        let contentMatch = contentPattern.exec(requests[i + 2]);

        let result = '';

        if( methodMatch && credentialsMatch && contentMatch){
            let method = methodMatch[1];
            let authorizationType = credentialsMatch[1];
            let authenticationString = credentialsMatch[2];

            switch (method){
                case 'GET':
                   result = `Response-Method:${method}&Code:200&Header:${authenticationString}`;
                    break;
                case 'POST':
                case 'DELETE':
                case 'PUT':
                    if(authorizationType == 'Basic')result = `Response-Method:${method}&Code:401`;
                    else  result = `Response-Method:${method}&Code:200&Header:${authenticationString}`;
                    break;
            }

            if(validateToken(authenticationString, decodingHash === false)){
                result = `Response-Method:${method}&Code:403`;
            }
        }
        else result = "Response-Code:400";

        console.log(result);
    }

}

validateRequest([
   "Method: GET",
   "Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB",
   "Content: users.asd.1782452.278asd",
   "Method: POST",
   "Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas",
   "Content: Johnathan",
   "2q"
]);