module.exports = function toReadable(number) {
    const numberOfStr = {
        firstNum: {
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
        },

        secondNum: {
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
        },

        decimalNum: {
            10: "ten ",
            20: "twenty ",
            30: "thirty ",
            40: "forty ",
            50: "fifty ",
            60: "sixty ",
            70: "seventy ",
            80: "eighty ",
            90: "ninety ",
        },

        handredNum: {
            100: "one hundred ",
            200: "two hundred ",
            300: "three hundred ",
            400: "four hundred ",
            500: "five hundred ",
            600: "six hundred ",
            700: "seven hundred ",
            800: "eight hundred ",
            900: "nine hundred ",
        },
    };

    let remOne = number % 10;
    let remTwo = number % 100;
    let res = 0;

    if (number == 0) return "zero";

    if (remTwo > 10 && remTwo < 20) {
        res = remTwo;
        remOne = "";
    } else {
        res = (number - remOne) % 100;
    }

    let hanNum = number - res - remOne;

    return `${numberOfStr.handredNum[hanNum] || ""}${
        (res > 10 && res < 20
            ? numberOfStr.secondNum[res]
            : numberOfStr.decimalNum[res]) || ""
    }${numberOfStr.firstNum[remOne] || ""}`.trim();
};
