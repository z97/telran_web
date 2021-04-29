const willWeGetAnswer = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const isEddAngry = Math.random() > 0.5;
            if (isEddAngry) {
                const reason = new Error(';)');
                reject();
            } else {
                const answer = {
                    code: 'I am happy',
                    smile: ':)'
                }
                resolve();
            }
        }, 1)
    })
}

willWeGetAnswer().then()