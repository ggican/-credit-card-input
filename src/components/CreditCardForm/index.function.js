export function creditCardType(cc) {
    let amex = new RegExp("^3[47][0-9]{13}$");
    let visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
    let cup1 = new RegExp("^62[0-9]{14}[0-9]*$");
    let cup2 = new RegExp("^81[0-9]{14}[0-9]*$");

    let mastercard = new RegExp("^5[1-5][0-9]{14}$");
    let mastercard2 = new RegExp("^2[2-7][0-9]{14}$");

    let disco1 = new RegExp("^6011[0-9]{12}[0-9]*$");
    let disco2 = new RegExp("^62[24568][0-9]{13}[0-9]*$");
    let disco3 = new RegExp("^6[45][0-9]{14}[0-9]*$");

    let jcb = new RegExp("^35[0-9]{14}[0-9]*$");
    let resultPayment = "Blank";
    if (visa.test(cc)) {
        resultPayment = "Visa";
    }
    if (amex.test(cc)) {
        resultPayment = "Americanexpress";
    }
    if (mastercard.test(cc) || mastercard2.test(cc)) {
        resultPayment = "Mastercard";
    }
    if (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) {
        resultPayment = "Discover";
    }

    if (jcb.test(cc)) {
        resultPayment = "Jcb";
    }
    if (cup1.test(cc) || cup2.test(cc)) {
        resultPayment = "Cirrus";
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resultPayment);
        }, 1000);
    });
}
