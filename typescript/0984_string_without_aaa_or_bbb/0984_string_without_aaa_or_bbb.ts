var strWithout3a3b = function(A: number, B: number) {
  let string = "";
  while (true) {
    if (A > B && B > 0) {
      string += "aab";
      A -= 2;
      B -= 1;
    }

    if (B > A && A > 0) {
      string += "bba";
      B -= 2;
      A -= 1;
    }

    if (A === B) {
      string += "ab".repeat(A);
      return string;
    }

    if (B === 0) {
      string += "a".repeat(A);
      return string;
    }

    if (A === 0) {
      string += "b".repeat(B);
      return string;
    }
  }
};

strWithout3a3b(1, 2);
strWithout3a3b(2, 5);
strWithout3a3b(1, 4);
strWithout3a3b(2, 6);
