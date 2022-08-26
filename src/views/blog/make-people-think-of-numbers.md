---
author: Zachary Sakowitz
date: 2021-12-07
---

Did you know that using math we can force people to think of certain numbers? We
can use 9, 1089, or any other number you can think of using the simple tricks
described below.

## The First Trick

The first trick you'll learn can work for any set of two numbers, making it more
versatile than using 9 or 1089. It's also really simple to pull off.

### Preparation

1. Let $a$ be an integer ranging from 2 to 6. In examples, we'll use 3.
2. Let $b$ be an integer ranging from 3 to 5. In examples, we'll use 4.
3. Let $c$ be $a \times b$. In examples, we'll use 12.

### The Trick

1. Ask each person in the audience to select a number between 1 and 100. Make
   sure they don't tell it to you. In examples, we'll use 7.
2. Ask the audience to multiply their numbers by $a$. We chose 7, so we now have
   $7 \times 3 = 21$.
3. Ask them to add $c$ to their number. We used $c = 12$, so we now have
   $21 + 12 = 33$.
4. Ask them to divide their number by $a$. For us, $a = 3$, so we now have
   $33 \div 3 = 11$.
5. Ask each person to subtract their original number. We had $7$, so we now have
   $11-7 = 4$.
6. Announce that you already knew their number! Say it was $b$, which all the
   numbers will now be.

### The Explanation

We'll track a number $n$ as it progresses through the process, them simplify the
final answer.

1. Let $n$ be an integer.
2. We multiply $n \times a$.
3. We add $n \times a + c$.
4. We divide $\frac{n \times a + c}{a}$.
5. We subtract $\frac{n \times a + c}{a} - n$.

To simplify, we can remember that $c = a \times b$. Let's substitute it to get
$\frac{n \times a + b \times a}{a} - n$.

We can factor out $a$ to get $\frac{a(n + b)}{a} - n$.

Because $a/a = 1$, we can simplify to $n + b - n$.

Now we can finally simplify to $b$, our final result!

## Forcing 9

This method forces the number 9 on the audience.

1. Ask each person to think of a six-digit number. For our example, we'll
   use 173924.
2. Ask each person to shuffle the digits in their number randomly, and to
   remember the result. (329471)
3. Ask each person to take the difference between their larger number and their
   smaller one. (329471 - 173924 = 155547)
4. Ask each person to add the digits in their number together, and to keep doing
   that until they have a one-digit number. (1+5+5+5+4+7 = 27, 2+7 = 9)
5. Each member of the audience now has 9.

## Forcing 1089

This method forces the number 1089 on the audience.

1. Ask each person to think of a non-symmetrical three-digit number where the
   digits are decreasing. We'll use $932$ as an example.
2. Ask each person to reverse the digits in their number. We got $239$.
3. Ask each person to subtract their smaller number from the larger. We've got
   $693$.
4. Ask each person to reverse the new number. In our example, we have $396$.
5. Ask each person to add the two numbers together. We have $693 + 396 = 1089$.
6. Every person should now have 1089, which we do!
