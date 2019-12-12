# cheatsheet

1. Write down:
   - key points;
   - topic details;

2. Inputs & Outputs

3. Spot the Problem Value:
    - Have time, space & memory?
    - Main goal

4. Avoid asking to many questions.

5. Start saying the first naive/brute attempt to the problem:
    - show that you can reason and think critically;

6. Tell why the approach is not the best:
    - "not readable", O(n^2);

7. Walk through your approach:
    - Use all the code interview info;
    - Write comments, show if repetition, bottlenecks like O(n^2);
    - spot the Big-O's.

8. Before the start:
    - write the solution steps;

9. Modularize from the start;

10. Start from the easy parts, show that you can do this and is better than others.

11. Think about errors to check and how to break the code.
    - How would you safeguard the code?
    - Comment in the code the checks you would do.

12. Write code that reads well (not i or j, just for some cases using for loops, but it's better to use a better readable name);

13. Test your code:
    - no params;
    - 0, undefined, null;
    - massive arrays, async code;
    - try not to repeat yourself;

14. Talk to the interviewer where you would improve:
    - Ask what was the most interesting solution they've seen;
    - How can performance be improved?
    - Does it work?
    - What would you google to improve?
    - Is it readable?
    - Are there different approaches?

15. If the interviewer is happy, ends here, if not:
    - common at google to ask questions like: how you would handle the problem if
      the whole input is too large to fit into memory, or if the input arrives as a stream.
    - ANSWER: divide and conquer approach - perform distributed processing of the data and only
      read certain chunks of the input from disk into memory, write the output back to disk and
      combine them later.