---
author: sakawi
category: math
date: 2021-12-07
---

You probably know how to find out if a number is divisible by 2, 5, or 10. But
did you know that there's simple divisibility rules for other numbers? Let's
check them out, from 2 to 12!

## 2

A number is divisible by **2** if it ends in a 0, 2, 4, 6, or 8. For example,
38324 ends in a 4, so it's divisible by 2.

## 3

A number is divisible by **3** if the sum of the digits is divisible by 3. For
example, 38324 is divisible by 3 because 3 + 8 + 3 + 2 = 15, which is divisible
by 3. For long number you can repeat the operation. For example, summing up
45398527 gives 43, and summing up 43 gives 7, which is not divisible by 3. This
means that 45398527 isn't divisible by 3.

## 4

A number is divisible by **4** if either

- the 2nd last digit is even and the last digit is 0, 4, or 8, or
- the 2nd last digit is odd and the last digit is 2 or 6.

2342 is not divisible by 4 because the second-to-last digit (4) is even, but the
last digit (2) is not 0, 4, or 8.

2172 is divisible by 4 because the second-to-last digit (7) is odd, and the last
digit (2) is 2 or 6.

9233 is not divisible by 4 because it's an odd number.

## 5

A number is divisible by **5** if the last digit is 0 or 5. For example, 98545
ends in a 5, so it's divisible by 5.

## 6

A number is divisible by **6** if it is even and divisible by 3. For example,
2349 isn't divisible by 6 because it's not even.

## 7

There's not a great trick for 7 like there are for other numbers. The simplest
trick is to add and subtract multiples of 7 until the number ends in 0. Then,
you can remove the 0 at the end and continue. If the end number is divisible by
7, your original number was also divisible by 7. If not, then the original
wasn't either. Let's try an example with 3582.

$$
\begin{aligned}
3582 + 28 &= 3610 \\
361 - 21 &= 340 \\
34 - 14 &= 20 \\
\end{aligned}
$$

20 is not a multiple of 7, so 3582 isn't divisible by 7.

## 8

A number is divisible by **8** if dividing the last 3 digits by 2 yields a
multiple of 4. For example, 2232 is divisible by 8 because 232÷2 (116) is
divisible by 4.

## 9

_What about 9? 7 8 9... #obscurereferences_

A number is divisible by **9** if the sum of the digits is a multiple of 9. For
example, 457 isn't divisible by 9 because 4+5+7 (16) isn't divisible by 9.

## 10

A number is divisible by **10** if it ends in 0. For example, 920 is divisible
by 10 because it ends in 0.

## 11

To check for divisibility by **11**, reverse the ordering of the digits. Then,
alternately subtract and add digits. If the final result is divisible by 11,
then the original number was divisible by 11. For example, the number 328149 is
not divisible by 11 because 9-4+1-8+2-3 (-3) is not divisible by 11.

## 12

A number is divisible by **12** if it is divisible by 3 and 4. For example, 1068
is divisible by 12 because it is divisible by 3 (1+0+6+8 = 15) and it is
divisible by 4 (6 is even and 8 is 0/4/8).
