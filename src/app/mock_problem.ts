export class MockProblem {
  public static getMockProblem(): Problem {
    return {
      title: 'Micro\'s House',
      author: 'masterrooo',
      diff: 'Data Structures, Medium, Trie',
      statement: `Our coder Micro, is building a new house. For that he bought a rectangular plot
       few days back. The plot is very big, so he decided that he will use some portion of the plot
       to make his house, and the rest he will use for playing cricket with his astrologer friend
       Mike. But Micro is very superstitious, he is not going to just randomly pick some portion
       to build his house. He want to maximize his good luck. For this he took help of Mike.
       Mike divided the whole plot into grid of square blocks and assigned a Good Luck value to
       each. The size of the grid was N * M. For some unknown reasons Mike kept N ≥ M. Now he
       calculates the Good Luck value of a rectangular portion (rectangular sub matrix) as xor
       of Good Luck value of all square blocks in that rectangular portion. Help Micro in finding
       out the maximum Good Luck value he can achieve.`,
      input: `First line of a two space separated integers denoting N and M, (N ≥ M).
Following N lines contain M space separated integers denoting the Good Luck value of square blocks.`,
      output: `Print the maximum Good Luck value that Micro can achieve.`,
      inputFormat: `First line of a two space separated integers denoting N and M, (N ≥ M).
       Following N lines contain M space separated integers denoting the Good Luck value of 
       square blocks.`,
      outputFormat: `Print the maximum Good Luck value that Micro can achieve.`,
      sampleInput: `3 3\n1 2 3\n4 5 6\n7 8 9`,
      sampleOutput: `12`,
    };
  }
}
