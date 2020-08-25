describe("game resets to zero", () => {
    each([
      [
        [

            gameState = [
                  ["cross", "cross", "cross"],
                  ["nought", null, "nought"],
                  [null, "nought", "cross"] 
              ],
              turnNumber = 7
        ],
        [
            [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ],
            0
        ]
  
    ]
    ]).it("when the input is '%s'", (inputs, expected) => {
  
      actual_result = resetGame(inputs[0], inputs[1]);
  
      expect(actual_result).toStrictEqual(expected);
  
    });
  });