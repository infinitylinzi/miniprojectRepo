
const { takeTurn, checkWinner, resetGame, getBoard, checkRow, checkColumn, checkDiagonal } = require('./academy');
const each = require("jest-each").default;


describe("checkDiagonal", () => {
    each([
        //first input/output
        [
            [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
            "nobody"
        ],
        //second input/output
        [
            [
                ["cross", "nought", "nought"],
                [null, "cross", null],
                [null, null, "cross"]
            ],
            "crosses"
        ],
        //third input/output
        [
            [
                ["cross", "cross", "nought"],
                [null, "nought", null],
                ["nought", null, "cross"]
            ],
            "noughts"
        ]
    ]).it("when the input is '%s'", (input, expected) => {
        actual_result = checkDiagonal(input)

        expect(actual_result).toStrictEqual(expected)
    })
})
