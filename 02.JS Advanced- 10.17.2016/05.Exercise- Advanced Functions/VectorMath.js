(function solution() {
        return{
            add: function (a, b) {
                let x1 = a[0];
                let y1 = a[1];
                let x2 = b[0];
                let y2 = b[1];

                let result = [];
                result.push(x1 + x2);
                result.push(y1 + y2);
                return result;
            },
            multiply: function (a, s) {
                let x = a[0];
                let y = a[1];

                let result = [];
                result.push(x * s);
                result.push(y * s);
                return result;
            },
            length: function (a) {
                let x = a[0];
                let y = a[1];

                return Math.sqrt(x * x + y * y);
            },
            dot: function (a, b) {
                let x1 = a[0];
                let y1 = a[1];
                let x2 = b[0];
                let y2 = b[1];

                let str = (x1 * x2) + (y1 * y2);
                return str;
            },
            cross: function (a, b) {
                let x1 = a[0];
                let y1 = a[1];
                let x2 = b[0];
                let y2 = b[1];

                let str = (x1 * y2) - (y1 * x2);
                return str;
            }
        }
    }())
