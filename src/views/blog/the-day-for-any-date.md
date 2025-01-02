---
author: sakawi
category: math
date: 2021-12-07
---

Ever wondered what day your friend's birthday occurred, or whether the next July
4th will be a Thursday? You can calculate it using simple math, which you'll
learn here!

This simple method uses different codes that we add up to get our result. We'll
need a month code, a century code, and a day code.

## Calculate It!

As we explain the process, we'll use **December 16, 2482** as an example.

1. Take the last two digits of the year. In our example, this is $82$.
2. Divide by 4, and drop any remainder. For us,
   $\lfloor 82 \div 4 \rfloor = 20$.
3. Add the date of the month. We'll do $20 + 16 = 36$.
4. Add the month's value from the [month codes table](#month-codes). In our
   example, this is $6$, so we do $36 + 6 = 42$.
5. Add the century code from the [century codes table](#century-codes). In our
   example, this is $6$, so we do $42 + 6 = 48$.
6. Add the last two digits of the year. In our example, this was $82$, so we do
   $48 + 82 = 130$.
7. Divide by 7 and take the remainder. In our example, this is
   $130 \bmod 7 = 4$.
8. Find your day in the [day codes table](#day-codes). In our example, this is
   Wednesday. This is your final result!

## Month Codes

|    Month | Value |     Month | Value |
| -------: | :---- | --------: | :---- |
|  January | 1\*   |      July | 0     |
| February | 4\*   |    August | 3     |
|    March | 4     | September | 6     |
|    April | 0     |   October | 1     |
|      May | 2     |  November | 4     |
|     June | 5     |  December | 6     |

_\* For leap years, use 2 for January and 5 for February._

## Century Codes

| Century                  | Value |
| ------------------------ | ----- |
| 1700s, 2100s, 2500s, ... | 4     |
| 1800s, 2200s, 2600s, ... | 2     |
| 1900s, 2300s, 2700s, ... | 0     |
| 2000s, 2400s, 2800s, ... | 6     |

## Day Codes

| Day       | Value |
| --------- | ----- |
| Saturday  | 0     |
| Sunday    | 1     |
| Monday    | 2     |
| Tuesday   | 3     |
| Wednesday | 4     |
| Thursday  | 5     |
| Friday    | 6     |
