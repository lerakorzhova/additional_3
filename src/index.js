module.exports = function getBase(num) {
    var copy = num,
        base = '',
        length = (num + '').length - 1;

    if (num % Math.pow(10, length) === 0) {
        for (var i = 0; i < length; i++) {
            base = base + '9';
        }
        return base;
    }

    base = 2;
    while (copy) {
        if (copy % base === 1) {
            copy = Math.floor(copy / base);
        } else {
            copy = num;
            base++;
        }

    }
    return base;
}