# projecteuler
My solutions of Project Euler problems. A lot of solutions are still laying on my disk since they're few years old and I've just recently decided to put them on GitHub.

![marines on Project Euler](https://projecteuler.net/profile/marines.png)

## Comments to solutions

### Problem 31

Nasty bruteforce. Probably could have been solved on a piece of paper but this one executed in a couple of minutes so I didn't care much. I'm aware that begginings of ranges could have been adjusted so that obvious sums over 200 are eliminated.

### Problem 46

Well, that was quick. Didn't expect the result to be so small number hence high iterations number. Works quite quick.

### Problem 55

This time solution in JS since I didn't have any dev environment nearby. Pretty straightforward. Didn't think it will run so quick. Additional checks for written functions.

### Problem 59

Three letter password is short enough to brute force the solution. I've taken "that" and "the" as common English words which should be present in the decrypted text.

### Problem 79

OK, I think the solution is tricky. I have mixed feelings about it. Couldn't come up with any better idea after I managed to solve it this way. The code basically only checks whether given pincode will match every given triple. If it doesn't it suggests solution. Based on the suggestion I've swapped some digits and passed working combibation as base pincode to further analysis. Eventually the base pincode was the solution. So it's semi-automatic. :)

What we know by looking at triples is that the first digit must be 7 and the last 0. Between them there have to be either 319 680 or 680 319. It quickly turned out that 680 319 makes a lot of problems later which 319 680 doesn't so I assumed 7319680 as my base pincode into which I had to place the last used digit (2). After each update of base pincode and revalidation of triples it needed 3 swaps to get the final result.
